import {
  Grid,
  Box,
  IconButton,
  Divider,
  Typography,
  Grow,
  useMediaQuery,
} from "@mui/material";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { language, backend, frontend, dev_ops, other } from "../assets/data";

const Skills = () => {
  const theme = useTheme();
  const [to, setTO] = useState(false);
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
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
          <Grid item xs={12} ml={3} mt={2}>
            <Box alignItems="center" justifyContent="left" display="flex">
              <Typography variant={sm ? "h5" : "body1"}>
                <TypeAnimation
                  sequence={[">  cat Skills"]}
                  speed={60}
                  cursor={false}
                />
              </Typography>
            </Box>
          </Grid>
          <Grow
            in={to}
            style={{ transformOrigin: "0 0 0" }}
            {...(to ? { to: 1000 } : {})}
          >
            <Grid container>
              <Grid item xs={12} mb={2} mt={5}>
                <Box alignItems="center" display="flex" justifyContent="center">
                  <Typography>Languages</Typography>
                </Box>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  borderRadius: {
                    xs: "30px",
                    sm: "30px",
                    md: "30px 30px 30px 30px",
                    lg: "30px 30px 30px 30px",
                    xl: "30px 30px 30px 30px",
                  },
                }}
                margin={3}
                justifyContent="space-evenly"
              >
                {language.map((language, idx) => (
                  <Grid item xs={4} sm={3} md={2} lg={1} padding={1}>
                    <Box
                      alignItems="center"
                      display="flex"
                      justifyContent="center"
                    >
                      <img
                        src={language}
                        key={idx}
                        width="60px"
                        height="60px"
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12} mb={2} mt={2}>
                <Box alignItems="center" display="flex" justifyContent="center">
                  <Typography>Backend</Typography>
                </Box>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  borderRadius: {
                    xs: "30px",
                    sm: "30px",
                    md: "30px 30px 30px 30px",
                    lg: "30px 30px 30px 30px",
                    xl: "30px 30px 30px 30px",
                  },
                }}
                margin={3}
                justifyContent="space-evenly"
              >
                {backend.map((language, idx) => (
                  <Grid item xs={4} sm={3} md={2} lg={1} padding={1}>
                    <Box
                      alignItems="center"
                      display="flex"
                      justifyContent="center"
                    >
                      <img
                        src={language}
                        key={idx}
                        width="60px"
                        height="60px"
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12} mb={2} mt={2}>
                <Box alignItems="center" display="flex" justifyContent="center">
                  <Typography>Frontend</Typography>
                </Box>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  borderRadius: {
                    xs: "30px",
                    sm: "30px",
                    md: "30px 30px 30px 30px",
                    lg: "30px 30px 30px 30px",
                    xl: "30px 30px 30px 30px",
                  },
                }}
                margin={3}
                justifyContent="space-evenly"
              >
                {frontend.map((language, idx) => (
                  <Grid item xs={4} sm={3} md={2} lg={1} padding={1}>
                    <Box
                      alignItems="center"
                      display="flex"
                      justifyContent="center"
                    >
                      <img
                        src={language}
                        key={idx}
                        width="60px"
                        height="60px"
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12} mb={2} mt={2}>
                <Box alignItems="center" display="flex" justifyContent="center">
                  <Typography>Dev-Ops</Typography>
                </Box>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  borderRadius: {
                    xs: "30px",
                    sm: "30px",
                    md: "30px 30px 30px 30px",
                    lg: "30px 30px 30px 30px",
                    xl: "30px 30px 30px 30px",
                  },
                }}
                margin={3}
                justifyContent="space-evenly"
              >
                {dev_ops.map((language, idx) => (
                  <Grid item xs={4} sm={3} md={2} lg={1} padding={1}>
                    <Box
                      alignItems="center"
                      display="flex"
                      justifyContent="center"
                    >
                      <img
                        src={language}
                        key={idx}
                        width="60px"
                        height="60px"
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12} mb={2} mt={2}>
                <Box alignItems="center" display="flex" justifyContent="center">
                  <Typography>Other</Typography>
                </Box>
              </Grid>
              <Grid
                container
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  borderRadius: {
                    xs: "30px",
                    sm: "30px",
                    md: "30px 30px 30px 30px",
                    lg: "30px 30px 30px 30px",
                    xl: "30px 30px 30px 30px",
                  },
                }}
                margin={3}
                justifyContent="space-evenly"
              >
                {other.map((language, idx) => (
                  <Grid item xs={4} sm={3} md={2} lg={1} padding={1}>
                    <Box
                      alignItems="center"
                      display="flex"
                      justifyContent="center"
                    >
                      <img
                        src={language}
                        key={idx}
                        width="60px"
                        height="60px"
                      />
                    </Box>
                  </Grid>
                ))}
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

export default Skills;
