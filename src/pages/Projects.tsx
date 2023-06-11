import {
  Grid,
  Box,
  IconButton,
  Divider,
  Typography,
  useMediaQuery,
  Grow,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { ProjectsD } from "../assets/data";

const Projects = () => {
  const theme = useTheme();
  const [to, setTO] = useState(false);
  const size = useMediaQuery(theme.breakpoints.up("sm"));
  localStorage.setItem("visited", "true");
  setTimeout(() => {
    setTO(true);
  }, 1500);
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: "100%",
          borderRadius: {
            xs: "30px",
            sm: "30px",
            md: "30px 30px 30px 30px",
            lg: "30px 30px 30px 30px",
            xl: "30px 30px 30px 30px",
          },
        }}
      >
        <Grid container>
          <Grid item xs={12} ml={2} mt={1}>
            <Box>
              <IconButton href="/">
                <ArrowLeft />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} ml={3} mt={2} mb={5}>
            <Box alignItems="center" justifyContent="left" display="flex">
              <Typography variant={size ? "h5" : "body1"}>
                <TypeAnimation
                  sequence={["$  cat /Projects -R"]}
                  speed={60}
                  cursor={false}
                />
              </Typography>
            </Box>
          </Grid>
          <Grow
            in={to}
            style={{ transformOrigin: "0 0 0" }}
            {...(to ? { timeout: 1000 } : {})}
          >
            <Grid container spacing={3} mb={5} padding={4}>
              {ProjectsD.map((project, idx) => (
                <Grid item xs={12} sm={6} lg={4} key={idx}>
                  <Box
                    justifyContent="center"
                    display="flex"
                    alignItems="center"
                  >
                    <Card sx={{borderRadius: "30px"}}>
                      <CardActionArea href={`/projects/${project.name}`}> 
                        <CardMedia
                          component="img"
                          image={project.thumbnail}
                          alt={project.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {project.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {project.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grow>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} mt={1} mb={3}>
            <Box alignItems="center" display="center" justifyContent="center">
              <IconButton
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <ArrowDropUp fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Projects;
