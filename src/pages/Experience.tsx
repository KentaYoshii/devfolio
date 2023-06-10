import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  Button,
  Divider,
  Grow,
} from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import ExperienceTL from "../components/ExperienceTL";

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
              <Button
                href="/"
                color="inherit"
                sx={{
                  textTransform: "lowercase",
                  fontSize: 20,
                }}
              >
                cd ~ (back)
              </Button>
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
            <Grid item xs={12} mb={10} mt={5}>
              <Box alignItems="center" justifyContent="left" display="flex">
                {sm ? (
                  <ExperienceTL />
                ) : (
                  <></>
                )}
              </Box>
            </Grid>
          </Grow>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Experience;
