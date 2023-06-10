import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Grid, Box, Divider, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import resume from "../assets/KENTA_RESUME_JUNE.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "cmaps/",
  standardFontDataUrl: "standard_fonts/",
};
type PDFFile = string | File | null;

const ResumePage = () => {
  const [file, setFile] = useState<PDFFile>(resume);
  localStorage.setItem("visited", "true");
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: "100%",
          borderRadius: {
            xs: "30px",
            sm: "30px",
            md: "30px 30px 30px 30px",
            lg: "30px 30px 30px 30px",
            xl: "30px 30px 30px 30px",
          },
        }}
      >
        <Grid container>
          <Grid item xs={12} ml={2} mt={1}>
            <Box>
              <Button
                href="/"
                color="inherit"
                sx={{
                  textTransform: "lowercase",
                  fontSize: 20,
                }}
              >
                cd ~ (back)
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} mt={5}>
            <Box alignItems="center" justifyContent="center" display="flex">
              <Button 
              href="https://drive.google.com/file/d/1Gv0loIgXhjzCcGj8midX2oymWMkYtc_1/view?usp=sharing"
              variant="outlined"
              color="inherit"
              sx={{
                color: "white"
              }}
              target="_blank"
              >
                Download
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} mb={5} mt={5}>
            <Box alignItems="center" justifyContent="center" display="flex">
              <Document file={file} options={options}>
                <Page
                  pageNumber={1}
                  scale={xl ? 1.5 : lg ? 1.0 : sm ? 0.8 : 0.5}
                />
              </Document>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ResumePage;
