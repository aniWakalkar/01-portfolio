import React from "react";

const projects = [
  {
    title: "Entertainment App",
    description:
      "Application for discovering and bookmarking TV series and movies.",
    technologies: [
      "React JS",
      "Tailwind CSS",
      "Material Tailwind",
      "Node.js",
      "Express",
      "MongoDB Atlas",
    ],
  },
  {
    title: "Student Database Management System",
    description:
      "Developed a robust web application for managing student data using PostgreSQL and Sequelize.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Sequelize"],
  },
  {
    title: "CI/CD Workflow Automation",
    description:
      "Automated the deployment process for a cloud-based project using AWS tools and Bitbucket Pipelines.",
    technologies: ["AWS CodeBuild", "CodeDeploy", "EC2", "S3", "Bitbucket Pipelines"],
  },
  {
    title: "Scalable Web Application with Flask",
    description:
      "Built a scalable, data-driven web app to enhance user engagement.",
    technologies: ["Python", "Flask", "PostgreSQL"],
  },
];

const ProjectCard = ({ title, description, technologies }) => (
  <div className=" border border-gray-300 project-card p-6 mb-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-black">{title}</h3>
    <p className="mt-4 text-white">{description}</p>
    <div className="mt-4 text-white">
      <strong className="text-black">Technologies:</strong> {technologies.join(", ")}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="projects-section p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
            <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            />
        ))}
      </div>
    </section>
  );
};

export default Projects;
