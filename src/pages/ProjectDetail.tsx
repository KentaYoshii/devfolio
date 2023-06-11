import { ArrowLeft } from "@mui/icons-material";
import {
  Grid,
  Box,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { TypeAnimation } from "react-type-animation";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import { ProjectMap } from "../assets/data";

const ProjectDetail = () => {
  const { project } = useParams();
  const theme = useTheme();
  if (!project) {
    return (
      <Typography>Hmm. I have not quite finished the project yet!</Typography>
    );
  }
  const size = useMediaQuery(theme.breakpoints.up("sm"));
  const projectDetail = ProjectMap.get(project);
  if (!projectDetail) {
    return (
      <Typography>Hmm. I have not quite finished the project yet!</Typography>
    );
  }
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
              <IconButton href="/projects">
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
              <Typography variant={size ? "h4" : "h5"}>
                <TypeAnimation
                  sequence={[`$  cat /Projects/${project}`]}
                  speed={60}
                  cursor={false}
                />
              </Typography>
            </Box>
          </Grid>
          {/* Project Title */}
          <Grid item xs={12} ml={3} mr={3} mt={1} mb={1}>
            <Box alignItems="center" display="center" justifyContent="left">
              <Typography variant="h3">{projectDetail.name}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" light={true}/>
          </Grid>
          {/* Project Overview */}
          <Grid item xs={12} ml={3} mr={3} mt={1} mb={1}>
            <Box alignItems="center" display="center" justifyContent="left">
              <Typography variant="h4">1. Overview</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} ml={3} mr={3} mt={1}>
            <Box alignItems="center" display="center" justifyContent="left">
              <Typography variant="caption">{projectDetail.overview}</Typography>
            </Box>
          </Grid>
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

export default ProjectDetail;
