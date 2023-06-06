import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import me from "../assets/me.jpg";
import me2 from "../assets/me2.jpg";
import me3 from "../assets/me3.jpg";
import me4 from "../assets/me4.jpg";

const itemData = [
  {
    img: me,
    title: "me",
  },
  {
    img: me2,
    title: "me",
  },
  {
    img: me3,
    title: "me",
  },
  {
    img: me4,
    title: "me",
  },
];

const Introduction = () => {
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
        <Box
            sx={{ width: "30vw", height: "30vh", overflowY: "scroll", position: "absolute" }}
          >
            <ImageList variant="masonry"  gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        {/* <Grid item xs={12} md={6}>
          <Box
            sx={{ width: "inherit", height: "inherit", overflowY: "scroll" }}
          >
            <ImageList variant="masonry"  gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid> */}
      </Box>
    </Box>
  );
};

export default Introduction;
