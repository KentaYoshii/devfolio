import { Typography, Grid, Box, List, ListItem, Link } from "@mui/material";
import weenix_one from "../../assets/projects/details/weenix/weenix1.png";
import weenix_two from "../../assets/projects/details/weenix/weenix2.png";

const BigDawsSSHDetail = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            Code can be found{" "}
            <Link
              href="https://github.com/KentaYoshii/BigDawsSSH"
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
            Paper can be found{" "}
            <Link
              href="https://github.com/KentaYoshii/BigDawsSSH/blob/main/project-report/report.pdf"
              target="_blank"
            >
              here
            </Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            As mentioned above, SSH consists of three parts, with protocols
            built on top of the previous ones.{" "}
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
                <strong>Tranport Protocol</strong>
              </Typography>
              : Server Authentication, Algorithm Negotiation, Key Exchange, and
              Key Derivation
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
                <strong>Authentication Protocol</strong>
              </Typography>
              : Client Authentication via Publickey or Password
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
                <strong>Connection Protocol</strong>
              </Typography>
              : Interactive login sessions, remote execution of commands,
              forwarded TCP/IP connections, and forwarded X11 connections.
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" mt={2}>
          Since the class was about Cryptography, I only did the first two
          protocols. If you want to know more details, please refer to the paper linked above and watch the demo!
        </Typography>
      </Grid>
      <Grid margin={2} item xs={12}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Typography variant="h3">Demo</Typography>
        </Box>
      </Grid>
      <Grid mt={2} mb={2} item xs={12}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <iframe
            src="https://drive.google.com/file/d/1QZIelGR2DZpwZKIzKYCFYb15XgE0Zvaf/preview"
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

export default BigDawsSSHDetail;
