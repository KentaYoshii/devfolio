import {
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const About = () => {
  const theme = useTheme();
  const size = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box minHeight="85vh">
      <Box
        minHeight="65vh"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Typography variant={size ? "h2" : "h3"}>
          Hello! My name is <strong>Kenta Yoshii</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
