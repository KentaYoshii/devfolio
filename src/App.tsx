import { Container } from "@mui/material";
import NavBar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Container maxWidth="lg">
        <NavBar />
        <Introduction />
        <Experience />
        <Projects />
        <Skills />
      </Container>
    </>
  );
};

export default App;
