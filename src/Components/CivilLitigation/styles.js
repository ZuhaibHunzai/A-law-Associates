import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  servicesBodyMain: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "auto",
    flexWrap: "wrap",
    paddingTop: "30px",
    paddingBottom: "20px",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  servicesImgDiv: {
    display: "flex",
    width: "650px",
    height: "650px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      height: "auto",
    },
  },
  servicesBodyImg: {
    width: "100%",
    height: "100%",
  },
  servicesBodyTextDiv: {
    width: "650px",
    paddingTop: "30px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      height: "auto",
      paddingTop: "30px",
      paddingLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingTop: "30px",
    },
  },
  servicesTextDiv: {
    width: "400px",
    height: "400px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      width: "250px",
      height: "auto",
    },
  },
  serviceH: {
    fontSize: "30px",
    fontWeight: "400",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      paddingLeft: "30px",
      width: "400px",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingLeft: "20px",
      width: "300px",
      height: "auto",
    },
  },
  serviceP: {
    width: "650px",
    fontWeight: "300",
    fontSize: "22px",
    textAlign: "justify",
    paddingTop: "12px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      width: "90%",
      height: "auto",
      paddingLeft: "20px",
    },
  },
  servicesBodyTextH: {
    width: "100%",
  },
  servicesBodyTextP: {
    width: "100%",
  },
}));

export default useStyles;
