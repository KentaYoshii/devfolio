import { Typography, Grid, Box, List, ListItem, Link } from "@mui/material";
import weenix_one from "../../assets/projects/details/weenix/weenix1.png";
import weenix_two from "../../assets/projects/details/weenix/weenix2.png";

const WeenixDetail = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">Weenix consists of 5 parts</Typography>
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
                <strong>Procs</strong>
              </Typography>
              : Threads, processes, and synchronization primitives
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
                <strong>Drivers</strong>
              </Typography>
              : Device drivers for terminals, disks, and the memory devices
              /dev/zero and /dev/null.
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
                <strong>Virtual File System</strong>
              </Typography>
              : A common interface between the operating system kernel and the
              various file systems (such as S5FS and device drivers).
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
                <strong>System V File System</strong>
              </Typography>
              : File System implementation based on the original Unix file
              system
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
                <strong>Virtual Memory</strong>
              </Typography>
              : Implement virtual memory maps, page fault handler, anonymous and
              shadow objects, and systems calls such as fork(). With these, the
              Weenix kernel is able to manage user address spaces, run
              user-level code and service system calls
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption">
          Overall, this was a very fun project to work on. I think this project
          really helped me understand how kernel operates behind the scenes and
          also hone my problem solving skills and system programming in general. 
        </Typography>
      </Grid>
      <Grid item xs={12} margin={5}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Box component="img" src={weenix_one} width="85%" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" color="GrayText">
            Weenix
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} margin={5}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Box component="img" src={weenix_two} width="85%" />
        </Box>
      </Grid>
      <Grid item xs={12} mb={2}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" color="GrayText">
            Weenix Shutdown
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mb={2}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="caption" >
            If you want to learn more, please go check out the <Link href="https://github.com/brown-cs1690/handout/wiki/Weenix-Operating-System" target="_blank">official documentation</Link>!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WeenixDetail;
