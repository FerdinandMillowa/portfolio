import React, { useState } from "react";

const skillCategories = [
  {
    title: "Languages",
    color: "#f6e05e",
    skills: ["Python", "JavaScript", "TypeScript", "PHP", "Go", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    color: "#63b3ed",
    skills: ["React", "Next.js", "React Native", "NestJS", "Laravel", "Flask"],
  },
  {
    title: "Databases",
    color: "#4fd1c5",
    skills: ["MySQL", "PostgreSQL", "SQLite", "Supabase"],
  },
  {
    title: "Tools & Platforms",
    color: "#b794f4",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Flutter",
      "SPSS",
      "Excel",
      "Cursor",
      "GitHub Copilot",
    ],
  },
  {
    title: "ICT & Networking",
    color: "#fc8181",
    skills: [
      "System Troubleshooting",
      "LAN Setup",
      "Hardware Maintenance",
      "End-User Support",
      "System Configuration",
    ],
  },
  {
    title: "Soft Skills",
    color: "#68d391",
    skills: [
      "Data Analysis",
      "Bookkeeping",
      "Technical Writing",
      "Team Collaboration",
      "Decision Making",
    ],
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills">
      <div className="section-wrapper">
        <p className="section-label">// 02</p>
        <h2 className="section-title">
          Tech <span>Stack</span>
        </h2>

        <style>{`
          @media (max-width: 768px) { .skills-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 480px) { .skills-grid { grid-template-columns: 1fr !important; } }
        `}</style>
        <div style={s.grid} className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} style={s.card}>
              <div style={s.catTitle}>
                <span style={{ color: cat.color }}>{cat.title}</span>
                <span style={s.catLine}></span>
              </div>
              <div>
                {cat.skills.map((skill) => {
                  const key = `${cat.title}-${skill}`;
                  return (
                    <span
                      key={skill}
                      style={{
                        ...s.pill,
                        borderColor:
                          hovered === key ? cat.color : "rgba(99,179,237,0.15)",
                        color: hovered === key ? cat.color : "#e2e8f0",
                      }}
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1px",
    background: "rgba(99,179,237,0.1)",
    border: "1px solid rgba(99,179,237,0.15)",
  },
  card: {
    background: "#0d1220",
    padding: "1.5rem",
  },
  catTitle: {
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  catLine: {
    flex: 1,
    height: "1px",
    background: "rgba(99,179,237,0.15)",
    display: "inline-block",
  },
  pill: {
    display: "inline-block",
    background: "#111827",
    border: "1px solid",
    padding: "3px 10px",
    margin: "3px 3px 0 0",
    fontSize: "11px",
    borderRadius: "2px",
    transition: "border-color 0.2s, color 0.2s",
    cursor: "default",
    fontFamily: "'Space Mono', monospace",
  },
};
