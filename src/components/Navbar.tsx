import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, Grid } from "@mui/material";
import {
  GrFacebook,
  GrGithub,
  GrLinkedin,
  GrDocumentText,
} from "react-icons/gr";

const NavBar = () => {
  return (
    <Box sx={{ display: "flex" }}>
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
            >
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                sx={{
                  padding: 1,
                  border: 1,
                  borderRadius: "50%",
                }}
              >
                <GrFacebook />
              </Box>
            </IconButton>
            <IconButton
              href="https://drive.google.com/file/d/175vJ_iKJtQgWs7enTzS6EIrZLB_WzyMp/view?usp=sharing"
              target="_blank"
            >
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                sx={{
                  padding: 1,
                  border: 1,
                  borderRadius: "50%",
                }}
              >
                <GrDocumentText />
              </Box>
            </IconButton>
            <IconButton href="https://github.com/KentaYoshii" target="_blank">
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                sx={{
                  padding: 1,
                  border: 1,
                  borderRadius: "50%",
                }}
              >
                <GrGithub />
              </Box>
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/kentayoshii/"
              target="_blank"
            >
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                sx={{
                  padding: 1,
                  border: 1,
                  borderRadius: "50%",
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
