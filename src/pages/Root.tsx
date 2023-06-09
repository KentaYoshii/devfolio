import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TypeAnimation } from "react-type-animation";
import CustomizedTreeView from "../components/TreeView";
import { useState } from "react";

const Root = () => {
  const theme = useTheme();
  const [showFS, setShowFS] = useState(false);
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  setTimeout(() => {
    setShowFS(true);
  }, 6000);
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          height: md ? "90%" : "100%",
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
          <Grid item xs={12} ml={3} mt={2}>
            <Box alignItems="center" justifyContent="left" display="flex">
              <Typography variant={sm ? "h5" : "body1"}>
                <TypeAnimation
                  sequence={[">  Welcome"]}
                  speed={60}
                  cursor={false}
                />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} ml={3} mt={0}>
            <Box alignItems="center" justifyContent="left" display="flex">
              <Typography variant={sm ? "h5" : "body1"}>
                <TypeAnimation
                  speed={60}
                  sequence={[1000, ">  My name is Kenta Yoshii"]}
                  cursor={false}
                />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} ml={3} mt={0}>
            <Box alignItems="center" justifyContent="left" display="flex">
              <Typography variant={sm ? "h5" : "body1"}>
                <TypeAnimation
                  speed={60}
                  sequence={[2400, ">  View the files for more information"]}
                  cursor={false}
                />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} ml={3} mt={0}>
            <Box alignItems="center" justifyContent="left" display="flex">
              <Typography variant={sm ? "h5" : "body1"}>
                <TypeAnimation sequence={[4500, ">  ls -R"]} cursor={false} />
              </Typography>
            </Box>
          </Grid>
          {showFS && (
            <Grid item xs={12} ml={3} mt={md ? 10 : 10}>
              <Box alignItems="center" justifyContent="center" display="flex">
                <CustomizedTreeView />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Root;
