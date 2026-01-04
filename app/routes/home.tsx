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
  // 1. Helper to format the lifespan string
  const getLifespan = () => {
    if (!person.birthDate) return "Dates Unknown";

    const birthYear = new Date(person.birthDate).getFullYear();

    // If person is deceased, show death year. Otherwise, show "Present"
    if (person.deathDate) {
      const deathYear = new Date(person.deathDate).getFullYear();
      return `${birthYear} — ${deathYear}`;
    }

    return `${birthYear} — Present`;
  };

  // 2. High-contrast Initials
  // const initials = person.name
  //   .split(" ")
  //   .map((n) => n[0])
  //   .join("")
  //   .toUpperCase();

  // 3. Determine gender class for CSS color coding
  // Fallback to "unknown-gender" if the field is missing
  const genderClass = person.gender
    ? person.gender.toLowerCase()
    : "unknown-gender";

  return (
    <div className={`person-card ${genderClass}`}>
      <div className="avatar">{/* <span>{initials}</span> */}</div>
      <div className="card-info">
        <h3>{person.name}</h3>
        <p className="dates">{getLifespan()}</p>
      </div>
    </div>
  );
}

function TreeNodeComponent({ node }: { node: TreeNode }) {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <li className="tree-node-li">
      <div className="family-group">
        {/* THE PARENTS ROW */}
        <div className="parents-row">
          <PersonCard person={node} />
          {node.spouses.map((spouse) => (
            <React.Fragment key={spouse.id}>
              <div className="marriage-heart">❤️</div>
              <PersonCard person={spouse} />
            </React.Fragment>
          ))}
        </div>

        {/* FIX: The Vertical Connector SVG */}
        {hasChildren && (
          <div className="connector-container">
            <svg className="vertical-connector-svg" width="2" height="40">
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="40"
                stroke="#bfa77a"
                strokeWidth="2"
              />
            </svg>
            <ul className="children-list">
              {node.children.map((child) => (
                <TreeNodeComponent key={child.id} node={child} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
}

export default function Home() {
  const { people } = useLoaderData<typeof loader>();
  const roots = buildTree(people);

  // Slider state: 1 is 100%, 0.5 is 50%
  const [zoom, setZoom] = useState(1);

  return (
    <div className="lineage-page">
      <header className="lineage-header">
        <h1>THE IMIRE FAMILY LINEAGE</h1>
        <div className="controls">
          <label>Zoom</label>
          <input
            type="range"
            min="0.3"
            max="1.5"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
          />
          <span>{Math.round(zoom * 100)}%</span>
        </div>
      </header>

      <div className="tree-viewport">
        <div
          className="tree-container"
          style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
        >
          <ul className="root-level">
            {roots.map((root) => (
              <TreeNodeComponent key={root.id} node={root} />
            ))}
          </ul>
        </div>
      </div>

      <footer className="lineage-footer">© 2026 Family Archives</footer>
    </div>
  );
}
