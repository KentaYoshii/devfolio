import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import { IconButton, useMediaQuery } from "@mui/material";
import {
  GrFacebook,
  GrGithub,
  GrLinkedin,
  GrDocumentText,
} from "react-icons/gr";

const NavBar = () => {
  const theme = useTheme();
  const size = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box sx={{ display: "flex", minHeight: "15vh" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#fff" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <IconButton
              href="https://www.facebook.com/kenta.yoshii.526/"
              target="_blank"
              size={size ? "medium" : "small"}
              sx={{
                "&:hover": {
                    color: "black"
                  }
              }}
            >
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                sx={{
                  padding: 1,
                  border: 1,
                  borderRadius: "50%",
                  ":hover": {
                    color: "black"
                  }
                }}
              >
                <GrFacebook/>
              </Box>
            </IconButton>
            <IconButton
              href="https://drive.google.com/file/d/175vJ_iKJtQgWs7enTzS6EIrZLB_WzyMp/view?usp=sharing"
              target="_blank"
              size={size ? "medium" : "small"}
            >
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                sx={{
                  padding: 1,
                  border: 1,
                  borderRadius: "50%",
                  ":hover": {
                    color: "black"
                  }
                }}
              >
                <GrDocumentText />
              </Box>
            </IconButton>
            <IconButton
              href="https://github.com/KentaYoshii"
              target="_blank"
              size={size ? "medium" : "small"}
            >
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                sx={{
                  padding: 1,
                  border: 1,
                  borderRadius: "50%",
                  ":hover": {
                    color: "black"
                  }
                }}
              >
                <GrGithub />
              </Box>
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/kentayoshii/"
              target="_blank"
              size={size ? "medium" : "small"}
            >
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                sx={{
                  padding: 1,
                  border: 1,
                  borderRadius: "50%",
                  ":hover": {
                    color: "black"
                  }
                }}
              >
                <GrLinkedin />
              </Box>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
