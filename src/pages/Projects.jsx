function Projects() {
  const projects = [
    {
      title: "Drowsiness Monitoring",
      description:
        "A desktop application built with PyQt6, OpenCV, and dlib to detect driver drowsiness in real time using eye aspect ratio (EAR).",
      stack: ["PyQt6", "OpenCV", "dlib", "Computer Vision"],
    },
    {
      title: "Truck Routing System",
      description:
        "A full-stack web application for route planning, customer management, and logistics optimization using Django, React, and PostgreSQL.",
      stack: ["Django", "React", "PostgreSQL", "Route Optimization"],
    },
    {
      title: "RideMate - Smart Ride Sharing",
      description:
        "A carpooling platform with real-time tracking, AI assistance, and modern UI backed by React, Node.js, and MongoDB.",
      stack: ["React", "Node.js", "MongoDB", "AI"],
    },
  ];

  return (
    <section className="page-section">
      <h2>Projects</h2>
      <p>Here are a few ideas and projects I have worked on while learning web development.</p>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-row">
              {project.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;