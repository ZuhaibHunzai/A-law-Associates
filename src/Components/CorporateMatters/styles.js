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
    height: "400px",
    [theme.breakpoints.down("md")]: {
      width: "650px",
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      height: "300px",
    },
  },
  servicesBodyImg: {
    width: "100%",
    height: "100%",
  },
  servicesBodyTextDiv: {
    // paddingLeft: "50px",
    [theme.breakpoints.down("md")]: {
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
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      width: "300",
      height: "auto",
    },
  },
  serviceH: {
    fontSize: "30px",
    fontWeight: "400",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      width: "400px",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      width: "300px",
      height: "auto",
      paddingLeft: "12px",
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
      width: "650px",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      width: "auto",
      height: "auto",
      paddingLeft: "12px",
      paddingRight: "12px",
      textAlign: "left",
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
