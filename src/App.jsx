import { useRef } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    Home: homeRef,
    Skills: skillsRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  const handleScrollToItem = (section) => {
    if (refs[section] && refs[section].current) {
      refs[section].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-lightMint">
      <Navbar handleScrollToItem={handleScrollToItem} />
      <Home ref={homeRef} handleScrollToItem={handleScrollToItem} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
