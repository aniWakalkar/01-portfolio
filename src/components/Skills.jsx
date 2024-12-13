import React from "react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "Material UI", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Flask", "Sequelize"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "DevOps & Tools",
    items: ["AWS (CodeBuild, CodeDeploy)", "Bitbucket Pipelines", "Docker", "Git"],
  },
];

const Skills = () => {
  return (
    <section className="p-6 text-black">
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-md text-left"
          >
            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item, idx) => (
                <li
                  key={idx}
                  className="px-3 py-1 rounded-lg shadow-sm text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
