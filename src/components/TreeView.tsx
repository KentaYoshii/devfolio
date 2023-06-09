import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { alpha, styled, useTheme } from "@mui/material/styles";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem";
import Collapse from "@mui/material/Collapse";
import { useSpring, animated } from "@react-spring/web";
import { TransitionProps } from "@mui/material/transitions";
import { Link, Box, useMediaQuery } from "@mui/material";

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
  const xs = useMediaQuery(theme.breakpoints.up("xs"))
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box>
      <TreeView
        aria-label="customized"
        defaultExpanded={["0", "1", "6"]}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}
        disableSelection
        sx={{
          maxHeight: "inherit",
          maxWidth: "inherit",
          flexGrow: 1,
          overflowY: "scroll",
        }}
      >
        <StyledTreeItem nodeId="1" label="Main">
          <StyledTreeItem nodeId="0" label="Me">
            <StyledTreeItem
              nodeId="2"
              sx={{
                "& .MuiTreeItem-label": {
                  fontSize: lg ? 25 : 20,
                }
              }}
              label={
                <Link href="/about" underline="hover" color="white">
                  About
                </Link>
              }
            />
            <StyledTreeItem
              nodeId="11"
              sx={{
                "& .MuiTreeItem-label": {
                  fontSize: lg ? 25 : 20,
                }
              }}
              label={
                <Link href="/about" underline="hover" color="white">
                  CV
                </Link>
              }
            />
          </StyledTreeItem>
          <StyledTreeItem
          sx={{
            "& .MuiTreeItem-label": {
              fontSize: lg ? 25 : 20,
            }
          }}
            nodeId="3"
            label={
              <Link href="/experience" underline="hover" color="white">
                Experience
              </Link>
            }
          />
          <StyledTreeItem
            nodeId="4"
            sx={{
              "& .MuiTreeItem-label": {
                fontSize: lg ? 25 : 20,
              }
            }}
            label={
              <Link href="/projects" underline="hover" color="white">
                Projects
              </Link>
            }
          />
          <StyledTreeItem
            nodeId="5"
            sx={{
              "& .MuiTreeItem-label": {
                fontSize: lg ? 25 : 20,
              }
            }}
            label={
              <Link href="/skills" underline="hover" color="white">
                Skills
              </Link>
            }
          />
          <StyledTreeItem
              nodeId="12"
              label="Blogs (soon)"
              // label={
              //   // <Link href="/about" underline="hover" color="white">
              //     Blogs
              //   // </Link>
              // }
            />
            <StyledTreeItem
              nodeId="13"
              label="Library (soon)"
              // label={
              //   // <Link href="/about" underline="hover" color="white">
              //     Library
              //   // </Link>
              // }
            />
          <StyledTreeItem nodeId="6" label="Socials">
            <StyledTreeItem
              nodeId="7"
              sx={{
                "& .MuiTreeItem-label": {
                  fontSize: lg ? 25 : 20,
                }
              }}
              label={
                <Link
                  href="https://github.com/KentaYoshii"
                  target="_blank"
                  underline="hover"
                  color="white"
                >
                  Github
                </Link>
              }
            />
            <StyledTreeItem
              nodeId="8"
              sx={{
                "& .MuiTreeItem-label": {
                  fontSize: lg ? 25 : 20,
                }
              }}
              label={
                <Link
                  href="https://www.linkedin.com/in/kentayoshii/"
                  target="_blank"
                  underline="hover"
                  color="white"
                >
                  Linkedin
                </Link>
              }
            />
            <StyledTreeItem
              nodeId="9"
              sx={{
                "& .MuiTreeItem-label": {
                  fontSize: lg ? 25 : 20,
                }
              }}
              label={
                <Link
                  href="https://www.facebook.com/kenta.yoshii.526/"
                  target="_blank"
                  underline="hover"
                  color="white"
                >
                  Facebook
                </Link>
              }
            />
            <StyledTreeItem
              nodeId="10"
              sx={{
                "& .MuiTreeItem-label": {
                  fontSize: lg ? 25 : 20,
                }
              }}
              label={
                <Link
                  href="https://www.youtube.com/channel/UCbtsINez6jBSFhiT35Zlt1g"
                  target="_blank"
                  underline="hover"
                  color="white"
                >
                  YouTube
                </Link>
              }
            />
          </StyledTreeItem>
        </StyledTreeItem>
      </TreeView>
    </Box>
  );
}
