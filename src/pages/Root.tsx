import { Grid, Container, Box, Typography } from "@mui/material";
import CustomizedTreeView from "../components/TreeView";

const Root = () => {
  return (
    <Container maxWidth="sm">
      <Box minHeight="65vh">
        <Grid container mt={15} spacing={5}>
          <Grid item xs={12}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="center"
            >
              <Typography variant="h3">Welcome to Kenta FS</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box alignItems="center" display="flex" justifyContent="center">
              <CustomizedTreeView />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Root;
