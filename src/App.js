import MyBentoGrid from "./Components/MyBentoGrid";
import "./App.css";
import "./motion.css";
import Banner from "./Components/Banner";
import CustomCursor from "./Components/CustomCursor";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <NavBar />
      <Banner />
      <Skills />
      <MyBentoGrid />
      <Timeline />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
