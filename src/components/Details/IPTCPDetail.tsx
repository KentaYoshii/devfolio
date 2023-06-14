import { Grid, Box, Typography, List, ListItem, Link } from "@mui/material";
import iptcp1 from "../../assets/projects/details/iptcp/iptcp1.png";

const IPTCPDetail = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="h5">2.1 IP</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={2}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            The spec can be found{" "}
            <Link href="https://hackmd.io/@csci1680/IP">here</Link>. The first
            part of this two-part project was building the Virtual IP Network
            using UDP connection to simulate a link layer between two hosts in
            the network. Each host servers as a router that can forward a packet
            or as a host that receive a packet. At the startup, each node is
            configured with links (UDP connections) to their neighbors. From
            there, three things needed to be implemented.
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
                Packet Forwarding
              </Typography>{" "}
              which consists of checksum validation, routing table lookup, and
              forwarding/receving the packet
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
                Dynamic Routing Table update
              </Typography>{" "}
              which consists of each host sending/receiving RIP packets and
              updating their routing tables accordingly. Table entry has
              expiration time of 5 seconds. Specifically, trigger updates and
              split horizon with poisioned reverse is used to prevent from
              infinite loop
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
                Traceroute
              </Typography>{" "}
              which allows us to see the exact path the packet took to get to
              the destination
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            To test the Virtual IP network, "send" command was also implemented
            (send {"<dest IP>"} payload). For debugging, wireshark was
            extensively used to monitor packets travelling. RFC documents were
            used as source of the truth for this part.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} margin={5}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Box component="img" src={iptcp1} width="85%" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" color="GrayText">
            packet capture on wireshark 
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={2}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="h4">2.2 TCP</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default IPTCPDetail;
