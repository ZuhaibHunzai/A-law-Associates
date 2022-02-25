import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  locationMain: {
    borderTop: "1px solid #000",
  },
  locationH: {
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "400",
    fontSize: "70px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#162275",
    [theme.breakpoints.down("md")]: {
      height: "100px",
      fontSize: "35px",
    },
  },
}));

export default useStyles;
