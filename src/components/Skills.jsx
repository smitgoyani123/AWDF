function Skills({ skillList }) {
  return (
    <section className="card">
      <h2>Skills</h2>

      <div className="tag-row">
        {skillList.map((skill) => (
          <span className="tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;