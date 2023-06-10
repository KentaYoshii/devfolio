import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  Button,
  Divider,
  Grow,
  IconButton,
} from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import ExperienceTL from "../components/ExperienceTL";
import ExperienceStack from "../components/ExperienceStack";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowLeft from "@mui/icons-material/ArrowLeft";

const Experience = () => {
  const theme = useTheme();
  const [timeout, setTO] = useState(false);
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
            <IconButton
                href="/"
              >
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
                  sequence={[">  cat Experience"]}
                  speed={60}
                  cursor={false}
                />
              </Typography>
            </Box>
          </Grid>
          <Grow
            in={timeout}
            style={{ transformOrigin: "0 0 0" }}
            {...(timeout ? { timeout: 1000 } : {})}
          >
            <Grid item xs={12} mb={2} mt={5}>
              {sm ? (
                <Box alignItems="center" justifyContent="left" display="flex">
                  <ExperienceTL />{" "}
                </Box>
              ) : (
                <Box alignItems="center" justifyContent="center" display="flex">
                  <ExperienceStack />
                </Box>
              )}
            </Grid>
          </Grow>
          {/* Footer */}
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
                <ArrowDropUpIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Experience;
