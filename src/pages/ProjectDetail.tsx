import { ArrowLeft } from "@mui/icons-material";
import {
  Grid,
  Box,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
  Grow,
  Chip,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { TypeAnimation } from "react-type-animation";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import { ProjectMap } from "../assets/data";
import { useState } from "react";

// Details
import WeenixDetail from "../components/Details/WeenixDetail";
import MoDistDetail from "../components/Details/MoDistDetail";
import IPTCPDetail from "../components/Details/IPTCPDetail";
import BigDawsSSHDetail from "../components/Details/BigDawsSSHDetail";
import TwitterCloneDetail from "../components/Details/TwitterCloneDetail";
import AnimorphsDetail from "../components/Details/AnimorphsDetail";

const returnDetail = (project: string) => {
  switch (project) {
    case "WeenixOS":
      return <WeenixDetail />;
    case "MoDist":
      return <MoDistDetail />;
    case "IP-TCP":
      return <IPTCPDetail />;
    case "BigDawsSSH":
      return <BigDawsSSHDetail />;
    case "Twitter-Clone":
      return <TwitterCloneDetail />;
    case "Animorphs":
      return <AnimorphsDetail />;
  }
};

const ProjectDetail = () => {
  const { project } = useParams();
  const theme = useTheme();
  const [to, setTO] = useState(false);
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
  setTimeout(() => {
    setTO(true);
  }, 1500);
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
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
              <Typography variant={size ? "body2" : "body1"}>
                <TypeAnimation
                  sequence={[`$  cat /Projects/${project}`]}
                  speed={60}
                  cursor={false}
                />
              </Typography>
            </Box>
          </Grid>
          {/* Project Title */}
          <Grow
            in={to}
            style={{ transformOrigin: "0 0 0" }}
            {...(to ? { to: 1000 } : {})}
          >
            <Grid container>
              <Grid item xs={12} ml={3} mr={3} mt={1} mb={1}>
                <Box alignItems="center" display="flex" justifyContent="center">
                  <Typography variant="h2">{projectDetail.name}</Typography>
                </Box>
                <Box
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                  margin={3}
                >
                  <Typography
                    variant="caption"
                    color="GrayText"
                    sx={{ fontStyle: "italic" }}
                  >{`${projectDetail.note}`}</Typography>
                </Box>
                <Box
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                  margin={3}
                >
                  {projectDetail.stack.map((stack, idx) => (
                    <Chip
                      label={stack}
                      key={idx}
                      variant="outlined"
                      sx={{ margin: 0.5 }}
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider variant="middle" light={true} />
              </Grid>
              {/* Project Overview */}
              <Grid item xs={12} ml={3} mr={3} mt={3} mb={1}>
                <Box alignItems="center" display="flex" justifyContent="left">
                  <Typography variant="h4">1. Overview</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} ml={3} mr={3} mt={1} mb={1}>
                <Box alignItems="center" display="flex" justifyContent="center">
                  <Typography variant="caption">
                    {projectDetail.overview}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} ml={3} mr={3} mt={3} mb={1}>
                <Box alignItems="center" display="flex" justifyContent="left">
                  <Typography variant="h4">2. Details</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} ml={3} mr={3} mt={1} mb={1}>
                <Box alignItems="center" display="flex" justifyContent="left">
                  <>{returnDetail(projectDetail.name)}</>
                </Box>
              </Grid>
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

export default ProjectDetail;
