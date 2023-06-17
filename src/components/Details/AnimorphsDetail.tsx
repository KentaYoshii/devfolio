import { Typography, Grid, Box, Link } from "@mui/material";
import animorph1 from "../../assets/projects/details/animorphs/animorphs1.gif";
import animorph2 from "../../assets/projects/details/animorphs/animorphs2.gif";
import animorph3 from "../../assets/projects/details/animorphs/animorphs3.gif";


const AnimorphsDetail = () => {
  return (
    <Grid container>
        <Grid item xs={12}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            Code can be found{" "}
            <Link
              href="https://github.com/KentaYoshii/Animorphs"
              target="_blank"
            >
              here
            </Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">
            Paper can be found{" "}
            <Link
              href="https://github.com/KentaYoshii/Animorphs/blob/master/Animorphs_paper.pdf"
              target="_blank"
            >
              here
            </Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">The project goal is to make a model architecture that can morph one object into another. We input two images (start and goal image) and the main task of our model is to use their latent space vectors of the two images to come up with intermediary latent vectors. Using these intermediary latent vectors, we create intermediary images by passing them into the StyleGAN. Finally, we will string together the start, intermediate images, and goal image to make a smooth .gif-like animation.</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">Latent vectors for intermediary images can be easily computed with a technique called Linear Interpolation where you take in the start and goal images (in their vector form) and gradually "shift" (more of this on the paper linked above)</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">The problem then is obtaining the latent vectors of the start and goal images. This could be easily done if we used randomly generated images using styleGAN as they already come with latent vectors. But our project strives to create image morphing of images of our choosing. Meaning, the latent vectors for them needed to be obtained via some encoding technique where you encode an image into a vector inside the latent space of styleGAN.</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={3}>
        <Box justifyContent="left" display="flex" alignItems="center">
          <Typography variant="caption">To achieve this, we experiemnted with different encoding techniques and compare the results. Please refer to the README of the repo linked above to see the results.</Typography>
        </Box>
      </Grid>
      <Grid margin={2} item xs={12}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Typography variant="h3">Demo</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} margin={5}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Box component="img" src={animorph1} width="50%" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" color="GrayText">
            Human Face morphing
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} margin={5}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Box component="img" src={animorph2} width="50%" />
        </Box>
      </Grid>
      <Grid item xs={12} mb={2}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" color="GrayText">
            Cat morphing
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} margin={5}>
        <Box alignItems="center" display="flex" justifyContent="center">
          <Box component="img" src={animorph3} width="50%" />
        </Box>
      </Grid>
      <Grid item xs={12} mb={2}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" color="GrayText">
            Art morphing
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AnimorphsDetail;
