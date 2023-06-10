import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import { Avatar, Grid, Typography, Box, Divider, Chip } from "@mui/material";
import { experience } from "../assets/data";

const ExperienceTL = () => {
  return (
    <Timeline
      sx={{
        "& .MuiTimelineItem-root:before": {
          flex: 0,
        },
      }}
    >
      {experience.map((ele, idx) => (
        <TimelineItem key={idx}>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="inherit">
              <Avatar
                src={ele.iconURL}
                sx={{ width: "60px", height: "60px" }}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Grid container>
              <Grid item xs={6}>
                <Typography>{ele.companyName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Box alignItems="center" justifyContent="right" display="flex">
                  <Typography variant="subtitle1" color="white">
                    {`${ele.from} - ${ele.to}`}{" "}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1" color="GrayText">
                  {ele.role}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box alignItems="center" display="flex" justifyContent="right">
                  <Typography variant="subtitle2" color="GrayText">
                    {ele.loc}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box alignItems="center" display="flex" justifyContent="left">
                <Typography variant="caption">
                  {ele.shortDescription}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mt={1}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                {ele.skills.map((skill, idx) => (
                    <Chip label={skill} key={idx} variant="outlined" sx={{margin: 0.5}}/>
                ))}
            </Grid>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExperienceTL;
