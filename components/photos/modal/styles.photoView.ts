export const styles = {
  root: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    height: "90vh",
    border: "2px solid #000",
    p: 4,
    bgcolor: "black",
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: { xs: "50px", md: "0px", lg: "0px" },
  },

  closeContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  roverNameContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  },
};
