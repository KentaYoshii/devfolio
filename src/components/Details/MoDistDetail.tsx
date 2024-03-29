import { Grid, Box, Typography, List, ListItem, Link } from "@mui/material";
import tapestry from "../../assets/projects/details/modist/tapestry.png";
import raft from "../../assets/projects/details/modist/raft.png";

const MoDistDetail = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">MoDist consists of 5 parts</Typography>
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
                <strong>Clocks</strong>
              </Typography>
              : Conflict resolution based on Vector Clocks and Physical Clocks
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
                <strong>Leaderless Replication</strong>
              </Typography>
              : Leaderless replication using read/write quorum to tolerate failures. Read repair to bring slow peers up to speed. 
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
                <strong>Partitioning</strong>
              </Typography>
              : Implemented object keys distribution strategy based on <strong>Consistent Hashing</strong> with minimal keys transfer in the event of a peer joining/leaving.
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
                <strong>Tapestry</strong>
              </Typography>
              : Implemented <Link href="https://pdos.csail.mit.edu/~strib/docs/tapestry/tapestry_jsac03.pdf">Tapestry</Link> that utilizes simple prefix-based routing to store and retrieve objects across multiple nodes.
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
                <strong>Raft</strong>
              </Typography>
              : Implemented <Link href="https://raft.github.io/raft.pdf">Raft</Link> to realize leader-based replication with all its features such as Leader Election, Log Replication, and Log Commitment.
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" mt={2}>
          Through MoDist, I was able to understand not only the core distrbuted systems concepts such as replication, partitioning, routing, and so on, but also pros and cons of differet kinds of architectures that are used in today's world.
        </Typography>
      </Grid>
      <Grid item xs={12} margin={5}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Box component="img" src={tapestry} width="85%" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" color="GrayText">
            Tapestry 
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} margin={5}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Box component="img" src={raft} width="85%" />
        </Box>
      </Grid>
      <Grid item xs={12} mb={2}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" color="GrayText">
            Raft, leader-based replication
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mb={2}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="caption">
            If you want to learn more, please go check out the{" "}
            <Link
              href="https://cs.brown.edu/courses/cs138/s23/assignments.html"
              target="_blank"
            >
              official documentation
            </Link>
            !
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MoDistDetail;
