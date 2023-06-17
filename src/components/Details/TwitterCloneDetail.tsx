import { Typography, Grid, Box, List, ListItem, Link } from "@mui/material";
import tclone1 from "../../assets/projects/details/tclone/tclone1.png";
import tclone2 from "../../assets/projects/details/tclone/tclone2.png";

const TwitterCloneDetail = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            Code can be found{" "}
            <Link
              href="https://github.com/KentaYoshii/twitter.git"
              target="_blank"
            >
              here
            </Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            Demo can be found at the bottom of the page
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="h3">
            2.1 Backend
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <List
          sx={{
            listStyleType: "disc",
            pl: 6,
            "& .MuiListItem-root": {
              display: "list-item",
            },
          }}
        >
          <ListItem>
            <Typography variant="caption">
              <Typography
                variant="caption"
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                <strong>Single Sign On</strong>
              </Typography>
              : SSO using Google OpenID Connect
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption">
              <Typography
                variant="caption"
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                <strong>Express</strong>
              </Typography>
              : Backend uses express server with various middlewares such as express-session for session management
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption">
              <Typography
                variant="caption"
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                <strong>DynamoDB</strong>
              </Typography>
              : Backend uses DynamoDB with single table scheme. Global Index and Local Index are also used for certain queries.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption">
              <Typography
                variant="caption"
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                <strong>S3</strong>
              </Typography>
              : Amazon S3 is used for storing images
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="caption">
              <Typography
                variant="caption"
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                <strong>Redis</strong>
              </Typography>
              : Redis is used to store session data with some other user-related information for performance
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} margin={5}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Box component="img" src={tclone1} width="85%" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" color="GrayText">
            Backend architecture
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="h3">
            2.2 Frontend
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            For frontend, react-router-dom is used to achieve protected domain and non-protected domain. For styling, Material UI is used.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="h3">
            2.3 Infrastructure
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            For deployment, the following infrastructure was built using terraform and deployed on AWS.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} margin={5}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Box component="img" src={tclone2} width="85%" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" color="GrayText">
            Twitter Clone Infrastructure
          </Typography>
        </Box>
      </Grid>
      <Grid margin={2} item xs={12}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Typography variant="h3">Demo</Typography>
        </Box>
      </Grid>
      <Grid mt={2} mb={2} item xs={12}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <iframe
            src="https://drive.google.com/file/d/1p131SeOb1rtwXvmxjySHgURzknVUGS2R/preview"
            width="auto"
            height="auto"
            allow="autoplay"
            allowFullScreen={true}
          ></iframe>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TwitterCloneDetail;
