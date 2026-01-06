import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router";
import { prisma } from "~/db/db.server";
import "~/styles/lineage.css";

// Represents the raw data coming from Prisma
type Person = {
  id: string;
  name: string;
  gender: string | null;
  birthDate: string | Date | null;
  deathDate: string | Date | null;
  parentId: string | null;
  // Included from the Prisma 'include' loader
  marriagesAsA?: any[];
  marriagesAsB?: any[];
};

// Represents the processed data for the tree UI
type TreeNode = Person & {
  children: TreeNode[];
  spouses: Person[]; // Changed to an array to support polygamy
};

/**
 * LOADER
 * Fetches all people in a flat list with marriages and parents included.
 */
export async function loader() {
  const allPeople = await prisma.person.findMany({
    include: {
      parent: true,
      marriagesAsA: { include: { spouseB: { include: { parent: true } } } },
      marriagesAsB: { include: { spouseA: { include: { parent: true } } } },
    },
  });

  return { allPeople };
}

/**
 * TREE BUILDER HELPER
 * Converts flat DB data into a nested JSON structure for the UI.
 */
function buildTree(allPeople: any[]) {
  if (!allPeople || !Array.isArray(allPeople)) return null;

  const map = new Map();

  // 1. Initialize map and normalize marriages
  allPeople.forEach((person) => {
    const spouses = [
      ...(person.marriagesAsA?.map((m: any) => ({
        ...m.spouseB,
        parent: m.spouseB.parent,
      })) || []),
      ...(person.marriagesAsB?.map((m: any) => ({
        ...m.spouseA,
        parent: m.spouseA.parent,
      })) || []),
    ];
    map.set(person.id, { ...person, spouses, children: [] });
  });

  let root = null;

  // 2. Build relationships
  allPeople.forEach((person) => {
    const node = map.get(person.id);
    if (person.parentId && map.has(person.parentId)) {
      map.get(person.parentId).children.push(node);
    } else if (person.name === "Lovoga") {
      root = node;
    }
  });

  return root;
}

/**
 * PERSON CARD COMPONENT
 * Renders individual nodes with Son/Daughter logic and age calculations.
 */
function PersonCard({ person }: { person: any }) {
  const calculateAge = () => {
    if (!person.birthDate) return null;
    const birth = new Date(person.birthDate);
    const end = person.deathDate ? new Date(person.deathDate) : new Date();
    let age = end.getFullYear() - birth.getFullYear();
    const m = end.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && end.getDate() < birth.getDate())) age--;
    return age;
  };

  const age = calculateAge();
  const initials = person.name
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();
  const kinshipLabel = person.gender === "female" ? "Daughter of" : "Son of";

  return (
    <div className={`person-card ${person.gender?.toLowerCase() || "unknown"}`}>
      {person.parent && (
        <div className="parent-tag">
          {kinshipLabel} {person.parent.name.split(" ")[0]}
        </div>
      )}
      <div className="avatar">
        <span>{initials}</span>
      </div>
      <div className="card-info">
        <h3>{person.name}</h3>
        <p className="dates">
          {person.birthDate ? new Date(person.birthDate).getFullYear() : "???"}{" "}
          —{" "}
          {person.deathDate
            ? new Date(person.deathDate).getFullYear()
            : person.birthDate
              ? "Present"
              : "???"}
        </p>
        {age !== null && (
          <p className="age-label">
            {person.deathDate ? `Died at ${age}` : `Age: ${age}`}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * RECURSIVE TREE NODE
 */
function TreeNodeComponent({ node, currentDepth, maxDepth }: any) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = currentDepth < maxDepth;

  return (
    <li className="tree-node-li">
      <div className="family-group">
        <div className="parents-row">
          <PersonCard person={node} />
          {node.spouses.map((spouse: any) => (
            <React.Fragment key={spouse.id}>
              <div className="marriage-heart">❤️</div>
              <PersonCard person={spouse} />
            </React.Fragment>
          ))}
        </div>
        {hasChildren && isExpanded && (
          <ul className="children-list">
            {node.children.map((child: any) => (
              <TreeNodeComponent
                key={child.id}
                node={child}
                currentDepth={currentDepth + 1}
                maxDepth={maxDepth}
              />
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default function Home() {
  const { allPeople } = useLoaderData<typeof loader>();
  const treeRoot = useMemo(() => buildTree(allPeople), [allPeople]);

  const [zoom, setZoom] = useState(0.6);
  const [maxDepth, setMaxDepth] = useState(1);
  // NEW: Theme State
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const totalPeople = allPeople?.length || 0;

  const actualMaxDepth = useMemo(() => {
    const getDepth = (node: any): number => {
      if (!node.children || node.children.length === 0) return 1;
      return (
        1 + Math.max(...node.children.map((child: any) => getDepth(child)))
      );
    };
    return treeRoot ? getDepth(treeRoot) : 1;
  }, [treeRoot]);

  if (!treeRoot) return <div className="loading-screen">No Data Found.</div>;

  return (
    // Dynamic class based on theme state
    <div className={`lineage-page ${theme}-theme`}>
      <header className="lineage-header">
        <h1>THE IMIRE FAMILY LINEAGE</h1>

        <div className="controls">
          {/* NEW: Theme Toggle Button */}
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "📜 Light Parchment" : "🏛️ Dark Museum"}
          </button>

          <div className="control-group">
            <label>Depth</label>
            <input
              type="range"
              min="1"
              max={actualMaxDepth}
              value={maxDepth}
              onChange={(e) => setMaxDepth(parseInt(e.target.value))}
            />
            <span>
              {maxDepth} / {actualMaxDepth} Gen
            </span>
          </div>

          <div className="control-group">
            <label>Zoom</label>
            <input
              type="range"
              min="0.2"
              max="1.5"
              step="0.1"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
            />
            <span>{Math.round(zoom * 100)}%</span>
          </div>

          <div className="stats-badge">
            <span className="stats-label">TOTAL MEMBERS:</span>
            <span className="stats-count">{totalPeople}</span>
          </div>
        </div>
      </header>

      <div className="tree-viewport">
        <div className="tree-container" style={{ transform: `scale(${zoom})` }}>
          <ul className="root-level">
            <TreeNodeComponent
              node={treeRoot}
              currentDepth={1}
              maxDepth={maxDepth}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
