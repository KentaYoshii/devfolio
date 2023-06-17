import {
  Box,
  Grid,
  useMediaQuery,
  Divider,
  Typography,
  IconButton,
  Grow,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import AboutContent from "../components/AboutContent";
const About = () => {
  const [to, setTO] = useState(false);
  localStorage.setItem("visited", "true");
  const theme = useTheme();
  const size = useMediaQuery(theme.breakpoints.up("sm"));
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
            <Box display="inline">
              <IconButton href="/">
                <KeyboardDoubleArrowLeftIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} ml={3} mt={2}>
            <Box alignItems="center" justifyContent="left" display="flex">
              <Typography variant={size ? "body2" : "body1"}>
                <TypeAnimation
                  sequence={["$ whoami"]}
                  speed={60}
                  cursor={false}
                />
              </Typography>
            </Box>
          </Grid>
          <Grow in={to}>
            <Grid item xs={12}>
              <AboutContent />
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

export default About;
