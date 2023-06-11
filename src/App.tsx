import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MainLayout from "./layouts/MainLayout";
import Root from "./pages/Root";
import About from "./pages/About";
import ResumePage from "./pages/Resume";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";

const App = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          width: {
            sm: "90vw",
            xs: "90vw",
            md: "80vw",
            lg: "60vw",
            xl: "60vw",
          },
        }}
      >
        <Grid container minHeight="90vh">
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:project" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default App;
