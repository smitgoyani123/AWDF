import "./App.css";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const skills = ["HTML","CSS","JavaScript","React","Python","Git & GitHub",];

  return (
    <div className="App">

      <Header
        name="Smit Kumar"
        color="darkblue"
      />

      <About />

      <Skills skillList={skills} />

   

      <Footer email="sskumar@gmail.com" />
    </div>
  );
}

export default App;