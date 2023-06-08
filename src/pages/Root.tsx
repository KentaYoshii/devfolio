import { Grid, Container, Box, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import CustomizedTreeView from "../components/TreeView";
import { styled } from "@mui/material/styles";

const Root = () => {
  return (
    <Container maxWidth="sm" sx={{
      backgroundColor: "rgba(255, 255, 255, 1.5)",
      backdropFilter: `blur(5px)`,
    }}>
      <Box mt="20vh" paddingTop="28px" paddingBottom="28px">
        <Box
          minHeight="40vh"
          sx={{
            background: "black",
          }} 
        >
          <Grid container>
            <Grid item xs={12}>
              <Box component="div" display="flex">
                <Typography variant="h3">
                  <TypeAnimation
                    sequence={[
                      "Welcome to Kenta File System",
                      2000,
                      "Hope you enjoy!",
                    ]}
                    cursor={true}
                  />
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mb={5}>
              <CustomizedTreeView />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Root;
