import React from "react";
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

function buildTree(people: any[]): TreeNode[] {
  const map = new Map<string, TreeNode>();
  people.forEach((p) => map.set(p.id, { ...p, children: [], spouses: [] }));

  const roots: TreeNode[] = [];
  const secondarySpouses = new Set<string>();

  map.forEach((node) => {
    // Check both potential marriage arrays
    const allMarriages = [
      ...(node.marriagesAsA || []),
      ...(node.marriagesAsB || []),
    ];

    allMarriages.forEach((m: any) => {
      const partnerId = m.spouseAId === node.id ? m.spouseBId : m.spouseAId;
      const partner = map.get(partnerId);

      // Add partner to spouses array if not already processed
      if (partner && !secondarySpouses.has(node.id)) {
        node.spouses.push(partner);
        secondarySpouses.add(partnerId);
      }
    });
  });

  map.forEach((node) => {
    if (node.parentId && map.has(node.parentId)) {
      map.get(node.parentId)?.children.push(node);
    } else if (!secondarySpouses.has(node.id)) {
      roots.push(node);
    }
  });

  return roots;
}

export async function loader() {
  const people = await prisma.person.findMany({
    include: {
      marriagesAsA: true, // Fetch marriages where they are spouse A
      marriagesAsB: true, // Fetch marriages where they are spouse B
    },
    orderBy: { createdAt: "asc" },
  });
  return Response.json({ people });
}

function PersonCard({ person }: { person: Person }) {
  const calculateAge = () => {
    if (!person.birthDate) return null;

    const birth = new Date(person.birthDate);
    const end = person.deathDate ? new Date(person.deathDate) : new Date();

    let age = end.getFullYear() - birth.getFullYear();
    const monthDiff = end.getMonth() - birth.getMonth();

    // Adjust if the birthday hasn't occurred yet in the final year
    if (monthDiff < 0 || (monthDiff === 0 && end.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  };

  const getLifespan = () => {
    if (!person.birthDate) return "Dates Unknown";
    const birthYear = new Date(person.birthDate).getFullYear();
    if (person.deathDate) {
      return `${birthYear} — ${new Date(person.deathDate).getFullYear()}`;
    }
    return `${birthYear} — Present`;
  };

  const age = calculateAge();
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  const genderClass = person.gender
    ? person.gender.toLowerCase()
    : "unknown-gender";

  return (
    <div className={`person-card ${genderClass}`}>
      <div className="avatar">
        <span>{initials}</span>
      </div>
      <div className="card-info">
        <h3>{person.name}</h3>
        <p className="dates">{getLifespan()}</p>
        {/* Display Age */}
        {age !== null && (
          <p className="age-label">
            {person.deathDate ? `Died at ${age}` : `Age: ${age}`}
          </p>
        )}
      </div>
    </div>
  );
}

function TreeNodeComponent({
  node,
  currentDepth,
  maxDepth,
}: {
  node: TreeNode;
  currentDepth: number;
  maxDepth: number;
}) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = currentDepth < maxDepth;

  return (
    <li className="tree-node-li">
      <div className="family-group">
        <div className="parents-row">
          {/* ANCHOR: The primary parent (e.g., Gwadenzwa) */}
          <div className="primary-parent-container">
            <PersonCard person={node} />

            {/* The vertical connector now lives INSIDE this container */}
            {hasChildren && isExpanded && (
              <div className="vertical-line-anchor">
                <svg width="2" height="40">
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="40"
                    stroke="#bfa77a"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* The Spouses flow to the right */}
          {node.spouses.map((spouse) => (
            <React.Fragment key={spouse.id}>
              <div className="marriage-heart">❤️</div>
              <PersonCard person={spouse} />
            </React.Fragment>
          ))}
        </div>

        {hasChildren && isExpanded && (
          <ul className="children-list">
            {node.children.map((child) => (
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
  const { people } = useLoaderData<typeof loader>();
  const roots = buildTree(people);

  const [zoom, setZoom] = useState(1);
  // Default to showing 3 generations
  const [maxDepth, setMaxDepth] = useState(3);

  return (
    <div className="lineage-page">
      <header className="lineage-header">
        <h1>THE IMIRE FAMILY LINEAGE</h1>
        <div className="controls">
          <label>Depth</label>
          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={maxDepth}
            onChange={(e) => setMaxDepth(parseInt(e.target.value))}
          />
          <span>{maxDepth} Gen</span>

          <label style={{ marginLeft: "20px" }}>Zoom</label>
          <input
            type="range"
            min="0.3"
            max="1.5"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
          />
        </div>
      </header>

      <div className="tree-viewport">
        <div
          className="tree-container"
          style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
        >
          <ul className="root-level">
            {roots.map((root) => (
              <TreeNodeComponent
                key={root.id}
                node={root}
                currentDepth={1}
                maxDepth={maxDepth}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
