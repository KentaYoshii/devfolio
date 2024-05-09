import { Grid, Box, Typography, List, ListItem, Link } from "@mui/material";
import iptcp1 from "../../assets/projects/details/iptcp/iptcp1.png";
import iptcp2 from "../../assets/projects/details/iptcp/iptcp2.png";
import iptcp3 from "../../assets/projects/details/iptcp/iptcp3.png";
import iptcp4 from "../../assets/projects/details/iptcp/iptcp4.png";


const IPTCPDetail = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            The code can be found{" "}
            <Link href="https://github.com/KentaYoshii/netstack" target="_blank">
              here
            </Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            The spec for IP can be found{" "}
            <Link href="https://hackmd.io/@csci1680/IP" target="_blank">
              here
            </Link>
            .
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            The spec for TCP can be found{" "}
            <Link href="https://hackmd.io/@csci1680/TCP" target="_blank">
              here
            </Link>
            .
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="h5">2.1 IP</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={2}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            The first part of this two-part project was building the Virtual IP
            Network using UDP connection to simulate a link layer between two
            hosts in the network. Each host servers as a router that can forward
            a packet or as a host that receives a packet. At the startup, each
            node is configured with links (UDP connections) to their neighbors.
            From there, three things needed to be implemented.
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
                <strong>Packet Forwarding</strong>
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
                <strong>Dynamic Routing Table update</strong>
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
                <strong>Traceroute</strong>
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
      <Grid item xs={12} mt={2}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            The second part of this two-part project was building the
            Tranmission Control Protocol (TCP) on top of the IP that we have
            already built in the first part. In simple terms, IP allows us to
            send a packet from any host on the internet to any other host on the
            same internet. TCP then has to do with how we want to send the
            packet, e.g. we want to send it reliably. The ultimate test of our
            implementation was to send a large file (500 mb) over a lossy
            internet and the receiver's file and the sender's file are the exact
            same ("diff" command does not output anything). To realize that, the
            following things needed to be implemented.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} margin={5}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Box component="img" src={iptcp2} width="85%" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" color="GrayText">
            where TCP fits in
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
                <strong>Sockets API</strong>
              </Typography>{" "}
              which consists of mapping packets to sockets and allowing
              "applications" to interact with the network. Just like in real OS,
              this virtual sockets will allow our node to maintain multiple
              simultaneous connections with other nodes on which we can send and
              receive data.
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
                <strong>TCP State Machine</strong>
              </Typography>{" "}
              which consists of managing different states of each and every TCP
              connection. FIN_WAIT1, SYN_RECV, etc.
            </Typography>
          </ListItem>
          <Grid item xs={12} margin={5}>
            <Box alignItems="center" display="flex" justifyContent="center">
              <Box component="img" src={iptcp3} width="85%" />
            </Box>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography variant="subtitle1" color="GrayText">
                state machine
              </Typography>
            </Box>
          </Grid>
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
                <strong>Sliding Window</strong>
              </Typography>{" "}
              which determines what data you are allowed to send and receive at
              any point. For this part, we came up with our own Circular Buffer
              implementation with various pointers to capture the idea of
              sliding window.
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
                <strong>Congestion Control</strong>
              </Typography>{" "}
              which allows us to send packets optimally in the face of congested
              network where packets get dropped and retransmitted. For this
              project, we used{" "}
              <Typography fontStyle="italic" variant="caption" display="inline">
                Tahoe
              </Typography>{" "}
              (Slow Start + AIMD + Fast Retransmit) as our congestion control
              algorithm.
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} margin={5}>
            <Box alignItems="center" display="flex" justifyContent="center">
              <Box component="img" src={iptcp4} width="85%" />
            </Box>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography variant="subtitle1" color="GrayText">
                throughput graph from sending 800kb file over lossy network (packets drop rate set to 2%)
              </Typography>
            </Box>
          </Grid>
    </Grid>
  );
};

export default IPTCPDetail;
