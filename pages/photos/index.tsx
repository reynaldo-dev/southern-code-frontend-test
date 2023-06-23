import React from "react";

import { Box, Container, FormControl, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

import { useFormik } from "formik";

import { InputSelect } from "@/components/app/select/Select";
import { MainLayout } from "@/components/layout/MainLayout";
import { NavBar } from "@/components/app/navBar/NavBar";
import { PhotosGrid } from "@/components/photos/grid/PhotosGrid";

import { getCurrentDate } from "@/utils/getCurrentDate";
import { dictionary } from "@/dictionary";
import { paths } from "@/paths";

const cameras = [
  "fhaz",
  "rhaz",
  "mast",
  "chemcam",
  "mahli",
  "mardi",
  "navcam",
  "pancam",
  "minites",
];

const rovers = ["curiosity", "opportunity", "spirit"];

const PhotosScreen = () => {
  const formik = useFormik({
    initialValues: {
      rover: "curiosity",
      camera: "chemcam",
      sol: 1000,
      earth_date: getCurrentDate(),
    },
    onSubmit: (values) => {},
  });

  return (
    <div>
      <NavBar route={{ label: "Favorites", path: `${paths.favorites}` }} />
      <Container sx={styles.container}>
        <Typography variant="subtitle1" mb={2} sx={styles.filterSuggestion}>
          {dictionary.photos.filterSuggestion}
        </Typography>
        <Box sx={styles.filtersContainer}>
          <InputSelect
            label="Rovers"
            name="rover"
            options={rovers}
            onChange={formik.handleChange}
            value={formik.values.rover}
          />

          <InputSelect
            label="Cameras"
            name="camera"
            options={cameras}
            onChange={formik.handleChange}
            value={formik.values.camera}
          />

          <FormControl sx={styles.formControl}>
            <InputLabel htmlFor="earth_date" sx={styles.label}>
              {dictionary.photos.solInputLabel}
            </InputLabel>
            <OutlinedInput
              size="small"
              placeholder="Please enter a sol number"
              type="number"
              name="sol"
              onChange={formik.handleChange}
              value={formik.values.sol}
              sx={styles.inputText}
            />
          </FormControl>

          <FormControl sx={styles.formControl}>
            <input
              style={styles.inputDate}
              type="date"
              max={getCurrentDate()} 
              name="earth_date"
              onChange={formik.handleChange}
              value={formik.values.earth_date}
            />
          </FormControl>
        </Box>
      </Container>

      <PhotosGrid
        camera={formik.values.camera}
        earth_date={formik.values.earth_date}
        rover={formik.values.rover}
        sol={formik.values.sol}
      />
    </div>
  );
};

export default PhotosScreen;

PhotosScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5rem",
    alignItems: { xs: "center", md: "flex-start" },
    justifyContent: { xs: "center", md: "flex-start" },
  },

  filtersContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-around",
    alignItems: "center",
    gap: "1rem",
  },

  filterSuggestion: {
    color: "#c4c4c4",
  },

  formControl: {
    width: { xs: "90%", md: "auto" },
  },
  inputDate: {
    border: "1px solid #c4c4c4",
    outline: "none",
    backgroundColor: "transparent",
    padding: "0.4rem",
    borderRadius: "5px",
  },

  inputText: {
    border: "1px solid #c4c4c4",
    outline: "none",
    backgroundColor: "transparent",
    color: "#c4c4c4",
  },

  label: {
    color: "#c4c4c4",
  },
};
