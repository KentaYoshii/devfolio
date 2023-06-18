import {
  Grid,
  Box,
  Avatar,
  Stack,
  Typography,
  useMediaQuery,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import me from "../assets/me.jpg";

const AboutContent = () => {
  const theme = useTheme();
  const size = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid container>
      <Grid item xs={12} mt={5}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Avatar
            src={me}
            sx={{
              width: {
                xs: "140px",
                sm: "180px",
                md: "180px",
                lg: "200px",
                xl: "240px",
              },
              height: {
                xs: "140px",
                sm: "180px",
                md: "180px",
                lg: "200px",
                xl: "240px",
              },
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} mt={5} ml={size ? 10 : 5} mr={size ? 10 : 5}>
        <Box alignItems="center" justifyContent="left" display="flex">
          <Stack direction="column" spacing={2} mb={5}>
            <Typography>
              <Typography
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                Hello!
              </Typography>
            </Typography>
            <Typography variant="body2">
              My name is{" "}
              <Typography
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                Kenta Yoshii
              </Typography>{" "}
              and welcome to my website! This is where I share with you my life,
              passion, and cretion.
            </Typography>
            <Typography variant="body2">
              I am from Tokyo, Japan and currently a senior at{" "}
              <Typography
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                <Link
                  sx={{ color: "white" }}
                  underline="none"
                  href="https://www.brown.edu/"
                  target="_blank"
                >
                  Brown University
                </Link>
              </Typography>{" "}
              studying Computer Science.
            </Typography>
            <Typography variant="body2">
              I am mainly interested in{" "}
              <Typography
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                Computer Systems
              </Typography>
              , and{" "}
              <Typography
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                Software Development
              </Typography>
              , but also have experience in other areas such as Machine Learning
              and Cryptography.
            </Typography>
            <Typography variant="body2">
              Previously, I have worked at{" "}
              <Typography
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                <Link
                  sx={{ color: "white" }}
                  underline="none"
                  href="https://sonyinteractive.com/en/"
                  target="_blank"
                >
                  Sony Interactive Entertainment
                </Link>
              </Typography>{" "}
              building full stack web application, at{" "}
              <Typography
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                <Link
                  sx={{ color: "white" }}
                  underline="none"
                  href="https://plaid.co.jp/en/"
                  target="_blank"
                >
                  Plaid
                </Link>
              </Typography>{" "}
              working on document database, and at{" "}
              <Typography
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                <Link
                  sx={{ color: "white" }}
                  underline="none"
                  href="https://hennge.com/global/"
                  target="_blank"
                >
                  Hennge
                </Link>
              </Typography>{" "}
              gaining experience in DevOps and Cloud Engineering. Please go to
              my experience page for more information.
            </Typography>
            <Typography variant="body2">
              In my free time, I like going on{" "}
              <Typography
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                long runs
              </Typography>
              , reading{" "}
              <Typography
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                classic and mystery books
              </Typography>
              , and lying down and do nothing for an extend period of time. I am
              also a{" "}
              <Typography
                sx={{
                  textDecoration: "underline",
                  textDecorationColor: "#624CAB",
                }}
                display="inline"
              >
                foodie
              </Typography>{" "}
              and on a constant search of new cafe or restaurants to visit.
            </Typography>
            <Typography variant="body2">
              Feel free to reach out to me via /Main/Socials/*
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutContent;
