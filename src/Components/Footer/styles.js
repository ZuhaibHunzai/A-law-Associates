import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  FooterMain: {
    height: "350px",
    backgroundColor: "#162275",
    display: "flex",
    justifyContent: "space-around",
    color: "#fff",
    alignItems: "center",
    flexDirection: "column",
    borderTop: "1px solid #fff",
    [theme.breakpoints.down("md")]: {
      height: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  FooterData: {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    height: "250px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "top",
      // flexDirection: "column",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      flexDirection: "column",
      paddingLeft: "20px",
    },
  },
  // footerData1: {
  //   display: "flex",
  //   justifyContent: "center",
  //   // alignItems: "top",
  // },
  footerlogoImg: {
    width: "80px",
    height: "80px",
    [theme.breakpoints.down("md")]: {
      marginTop: "12px",
    },
  },
  footerText: {
    width: "400px",
    height: "300px",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "left",

      flexDirection: "column",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  lawAssocoiatesText: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "12px",
    },
  },
  lawAsscoiatesT: {
    [theme.breakpoints.down("md")]: {
      marginTop: "25px",
    },
  },
  footerP: {
    width: "300px",
  },
  SocialMediaIcons: {
    display: "flex",
    justifyContent: "top",

    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "left",
      flexDirection: "column",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },
  iconsMain: {
    display: "flex",
    justifyContent: "left",
    paddingTop: "12px",
    width: "150px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      display: "flex",
      marginLeft: "40px",
    },
  },
  socialIcons: {
    // padding: "12px",
    fontSize: "35px",
    color: "#fff",
  },
  FooterTextCopyRight: {
    color: "#fff",
    fontSize: "22px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "22px",
      fontSize: "16px",
      paddingBottom: "12px",
    },
  },
  ContactNavIcons: {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    marginRight: "10px",
    color: "#FFFFFF",
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
