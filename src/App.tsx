import {
  Route,
  Routes,
} from "react-router-dom";
import Root from "./pages/Root";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />}/>
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
};

export default App;
