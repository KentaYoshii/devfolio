import { experience } from "../assets/data";
import {
  Stack,
  Grid,
  Avatar,
  Box,
  Typography,
  Divider,
  Chip,
} from "@mui/material";

const ExperienceStack = () => {
  return (
    <Stack direction="column" spacing={2}>
      {experience.map((ele, idx) => (
        <>
          <Grid container key={idx}>
            <Grid item xs={12}>
              <Box justifyContent="center" display="flex" alignItems="center">
                <Avatar src={ele.iconURL} />
              </Box>
            </Grid>
            <Grid item xs={12} mt={1}>
              <Box justifyContent="center" display="flex" alignItems="center">
                <Typography>
                  {ele.companyName === "Sony Interactive Entertainment"
                    ? "SIE"
                    : ele.companyName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mt={0.5}>
              <Box justifyContent="center" display="flex" alignItems="center">
                <Typography variant="subtitle1">{ele.role}</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} mt={0.5} paddingRight={0.5}>
              <Box justifyContent="right" display="flex" alignItems="center">
                <Typography variant="caption">{`${ele.from}-${ele.to}`}</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} mt={0.5} paddingLeft={0.5}>
              <Box justifyContent="left" display="flex" alignItems="center">
                <Typography variant="caption">{ele.loc}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mt={0.5}>
              <Box
                justifyContent="center"
                display="flex"
                alignItems="center"
                marginRight={3}
                marginLeft={3}
              >
                <Typography variant="subtitle2">
                  {ele.shortDescription}
                </Typography>
              </Box>
            </Grid>
            <Grid container mt={0.5} rowSpacing={2}>
              {/* <Box justifyContent="center" display="flex" alignItems="center">
                {ele.skills.map((skill, idx) => (
                  <Chip label={skill} key={idx} />
                ))}
              </Box> */}
              {ele.skills.map((skill, idx) => (
                <Grid item xs={4}>
                  <Box
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                  >
                    <Chip label={skill} key={idx} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {idx !== 4 ? <Divider /> : <></>}
        </>
      ))}
    </Stack>
  );
};

export default ExperienceStack;
