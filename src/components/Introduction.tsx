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
];

const Introduction = () => {
  const theme = useTheme();
  const size = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box alignItems="center" justifyContent="center" display="flex" minHeight={size ? "40vh" : "0vh"}>
            <Typography variant={size ? "h2" : "h6"}>
              Hello!
              My name is <br />
              <strong>Kenta Yoshii</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{ width: "inherit", height: "inherit", overflowY: "scroll" }}
          >
            <ImageList variant="masonry" cols={2} gap={8}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
