import Header from "../components/Header.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";

function Home() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Python","Django","Java","C++","DL"];

  return (
    <>
      <Header name="Smit Goyani" color="#2563eb" />

      <About />

      <section className="card">
        <h2>What I’m building</h2>
        <p>
          I create intelligent applications centered on computer vision,
          machine learning, and deep learning. My work focuses on real-time
          detection, route optimization, and AI-driven ride-sharing experiences.
        </p>
        <div className="tag-row">
          <span className="tag">Computer Vision</span>
          <span className="tag">Machine Learning</span>
          <span className="tag">Deep Learning</span>
        </div>
      </section>

      <Skills skillList={skills} />
    </>
  );
}

export default Home;