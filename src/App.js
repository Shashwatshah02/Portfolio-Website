import MyBentoGrid from "./Components/MyBentoGrid";
import "./App.css";
import "./motion.css";
import Banner from "./Components/Banner";
import CustomCursor from "./Components/CustomCursor";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Preloader from "./Components/Preloader";
import Projects from "./Components/Projects";
import { EducationTimeline, InternshipJourney } from "./Components/Timeline";

function App() {
  return (
    <div className="App">
      <Preloader />
      <CustomCursor />
      <NavBar />
      <Banner />
      <EducationTimeline />
      <MyBentoGrid />
      <InternshipJourney />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
