import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { alpha, styled, useTheme } from "@mui/material/styles";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem";
import Collapse from "@mui/material/Collapse";
import { useSpring, animated } from "@react-spring/web";
import { TransitionProps } from "@mui/material/transitions";
import { Link, Box, useMediaQuery, Typography } from "@mui/material";

function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props: SvgIconProps) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: "translate3d(20px,0,0)",
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const StyledTreeItem = styled((props: TreeItemProps) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

export default function CustomizedTreeView() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box>
      <TreeView
        aria-label="customized"
        defaultExpanded={["0", "1", "4", "6"]}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}
        disableSelection
        sx={{
          flexGrow: 1,
        }}
      >
        <StyledTreeItem nodeId="1" label="Main">
          <StyledTreeItem nodeId="0" label="Me">
            <StyledTreeItem
              nodeId="2"
              label={
                <Link href="/about" underline="none" color="white">
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      textDecorationColor: "#624CAB",
                    }}
                    display="inline"
                  >
                    About
                  </Typography>
                </Link>
              }
            />
            <StyledTreeItem
              nodeId="11"
              label={
                <Link href="/resume" underline="none" color="white">
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      textDecorationColor: "#624CAB",
                    }}
                    display="inline"
                  >
                    Résumé
                  </Typography>
                </Link>
              }
            />
          </StyledTreeItem>
          <StyledTreeItem
            nodeId="3"
            label={
              <Link href="/experience" underline="none" color="white">
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#624CAB",
                  }}
                  display="inline"
                >
                  Experience
                </Typography>
              </Link>
            }
          />
          <StyledTreeItem
            nodeId="4"
            label={
              <Link href="/projects" underline="none" color="white">
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#624CAB",
                  }}
                  display="inline"
                >
                  Projects
                </Typography>
              </Link>
            }
          >
            <StyledTreeItem
            nodeId="14"
            label={
              <Link href="/projects/WeenixOS" underline="none" color="white">
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#624CAB",
                  }}
                  display="inline"
                >
                  WeenixOS
                </Typography>
              </Link>
            }
          />
          <StyledTreeItem
            nodeId="15"
            label={
              <Link href="/projects/MoDist" underline="none" color="white">
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#624CAB",
                  }}
                  display="inline"
                >
                  MoDist
                </Typography>
              </Link>
            }
          />
          <StyledTreeItem
            nodeId="16"
            label={
              <Link href="/projects/IP-TCP" underline="none" color="white">
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#624CAB",
                  }}
                  display="inline"
                >
                  IP-TCP
                </Typography>
              </Link>
            }
          />
          <StyledTreeItem
            nodeId="17"
            label={
              <Link href="/projects/Twitter-Clone" underline="none" color="white">
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#624CAB",
                  }}
                  display="inline"
                >
                  Twitter-Clone
                </Typography>
              </Link>
            }
          />
          <StyledTreeItem
            nodeId="18"
            label={
              <Link href="/projects/BigDawsSSH" underline="none" color="white">
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#624CAB",
                  }}
                  display="inline"
                >
                  BigDawsSSH
                </Typography>
              </Link>
            }
          />
          <StyledTreeItem
            nodeId="19"
            label={
              <Link href="/projects/Animorphs" underline="none" color="white">
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#624CAB",
                  }}
                  display="inline"
                >
                  Animorphs
                </Typography>
              </Link>
            }
          />
          </StyledTreeItem>
          <StyledTreeItem
            nodeId="5"
            label={
              <Link href="/skills" underline="none" color="white">
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#624CAB",
                  }}
                  display="inline"
                >
                  Skills
                </Typography>
              </Link>
            }
          />
          <StyledTreeItem
            nodeId="20"
            label={
              <Link href="https://haruyoshieats.com" underline="none" color="white" target="_blank">
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#624CAB",
                  }}
                  display="inline"
                >
                  Food Blog (for the foodies)
                </Typography>
              </Link>
            }
          />
          <StyledTreeItem
            nodeId="12"
            label={
              <Link href="https://kenblog.dev" underline="none" color="white" target="_blank">
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#624CAB",
                  }}
                  display="inline"
                >
                  KenBlog 
                </Typography>
              </Link>
          />
          <StyledTreeItem
            nodeId="13"
            label={
              <Link href="https://kenbrary.xyz" underline="none" color="white" target="_blank">
                <Typography
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#624CAB",
                  }}
                  display="inline"
                >
                  Kenbrary 
                </Typography>
              </Link>
          />
          <StyledTreeItem nodeId="6" label="Socials">
            <StyledTreeItem
              nodeId="7"
              label={
                <Link
                  href="https://github.com/KentaYoshii"
                  target="_blank"
                  underline="none"
                  color="white"
                >
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      textDecorationColor: "#624CAB",
                    }}
                    display="inline"
                  >
                    Github
                  </Typography>
                </Link>
              }
            />
            <StyledTreeItem
              nodeId="8"
              label={
                <Link
                  href="https://www.linkedin.com/in/kentayoshii/"
                  target="_blank"
                  underline="none"
                  color="white"
                >
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      textDecorationColor: "#624CAB",
                    }}
                    display="inline"
                  >
                    Linkedin
                  </Typography>
                </Link>
              }
            />
            <StyledTreeItem
              nodeId="9"
              label={
                <Link
                  href="https://www.facebook.com/kenta.yoshii.526/"
                  target="_blank"
                  underline="none"
                  color="white"
                >
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      textDecorationColor: "#624CAB",
                    }}
                    display="inline"
                  >
                    Facebook
                  </Typography>
                </Link>
              }
            />
            <StyledTreeItem
              nodeId="10"
              label={
                <Link
                  href="https://www.youtube.com/channel/UCbtsINez6jBSFhiT35Zlt1g"
                  target="_blank"
                  underline="none"
                  color="white"
                >
                  <Typography
                    sx={{
                      textDecoration: "underline",
                      textDecorationColor: "#624CAB",
                    }}
                    display="inline"
                  >
                    YouTube
                  </Typography>
                </Link>
              }
            />
          </StyledTreeItem>
        </StyledTreeItem>
      </TreeView>
    </Box>
  );
}
