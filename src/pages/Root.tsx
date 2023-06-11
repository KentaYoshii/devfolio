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
  const visited = localStorage.getItem("visited");
  setTimeout(
    () => {
      setShowFS(true);
    },
    visited === "true" ? 2500 : 6000
  );
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
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
          {visited === "true" ? (
            <>
              <Grid item xs={12} ml={3} mt={2}>
                <Box alignItems="center" justifyContent="left" display="flex">
                  <Typography variant={sm ? "body2" : "body1"}>
                    <TypeAnimation
                      sequence={["$  Welcome back"]}
                      speed={60}
                      cursor={false}
                    />
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} ml={3} mt={0} mb={5}>
                <Box alignItems="center" justifyContent="left" display="flex">
                  <Typography variant={sm ? "body2" : "body1"}>
                    <TypeAnimation
                      sequence={[1000, "$  ls -R"]}
                      speed={60}
                      cursor={false}
                    />
                  </Typography>
                </Box>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} ml={3} mt={2}>
                <Box alignItems="center" justifyContent="left" display="flex">
                  <Typography variant={sm ? "body2" : "body1"}>
                    <TypeAnimation
                      sequence={["$  Welcome"]}
                      speed={60}
                      cursor={false}
                    />
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} ml={3} mt={0}>
                <Box alignItems="center" justifyContent="left" display="flex">
                  <Typography variant={sm ? "body2" : "body1"}>
                    <TypeAnimation
                      speed={60}
                      sequence={[1000, "$  My name is Kenta Yoshii"]}
                      cursor={false}
                    />
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} ml={3} mt={0}>
                <Box alignItems="center" justifyContent="left" display="flex">
                  <Typography variant={sm ? "body2" : "body1"}>
                    <TypeAnimation
                      speed={60}
                      sequence={[
                        2400,
                        "$  View the files for more information",
                      ]}
                      cursor={false}
                    />
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} ml={3} mt={0}>
                <Box alignItems="center" justifyContent="left" display="flex">
                  <Typography variant={sm ? "body2" : "body1"}>
                    <TypeAnimation
                      sequence={[4500, "$  ls -R"]}
                      cursor={false}
                    />
                  </Typography>
                </Box>
              </Grid>
            </>
          )}
          {showFS && (
            <>
              <Grid item xs={12} ml={3} mt={5} mb={5}>
                <Box
                  alignItems="center"
                  justifyContent="center"
                  display="flex"
                  overflow="auto"
                >
                  <CustomizedTreeView />
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Root;
