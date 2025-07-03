import MyBentoGrid, {MybentoGrid} from "./Components/MyBentoGrid";
import "./App.css";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Exp from "./Components/EducationExperience"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <MyBentoGrid />
      <Exp />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
