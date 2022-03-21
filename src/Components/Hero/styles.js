import { makeStyles } from "@material-ui/core";
import Bg from "../../Assets/Images/pen-on-paper.jpg";

const useStyles = makeStyles((theme) => ({
  heroMain: {
    width: "100%",
    height: "90vh",
    backgroundImage: `url(${Bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",

    [theme.breakpoints.down("md")]: {
      width: "auto",
      height: "60vh",
      display: "flex",
      justifyContent: "left",
      alignItems: "left",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "auto",
      backgroundPosition: "left",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
      height: "auto",
    },
  },
  HeroTextArea: {
    marginLeft: "100px",

    width: "550px",
    height: "350px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "left",
    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      justifyContent: "space-around",
      alignItems: "left",
      flexDirection: "column",
      marginLeft: "100px",
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "auto",
      paddingTop: "20px",
      paddingBottom: "20px",
      marginLeft: "0px",
      marginTop: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "left",
      paddingLeft: "12px",
      paddingRight: "12px",
    },
  },
  heroMainH: {
    color: "#162275",
    fontSize: "68px",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      fontSize: "30px",
      fontWeight: "500",
      marginLeft: "10px",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      fontSize: "30",
      fontWeight: "400",
      width: "auto",
      marginLeft: "10px",
    },
  },
  heroPara: {
    display: "flex",
    width: "550px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      width: "450px",
      fontSize: "22px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
      display: "flex",
      width: "auto",
      fontSize: "22px",
    },
  },
  heroMainH2: {
    color: "#162275",
    fontSize: "32px",
    margin: "0px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
      display: "flex",
      width: "auto",
      fontSize: "22px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      display: "flex",
      width: "auto",
      fontSize: "20px",
      textAlign: "center",
    },
  },
  heroMainP: {
    width: "100%",
    color: "rgb(20, 20, 20)",
    fontSize: "18px",
    fontWeight: "normal",
    lineHeight: "2rem",
    letterSpacing: "1px",
    [theme.breakpoints.down("md")]: {
      display: "flex",

      width: "550px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      width: "auto",
      paddingTop: "20px",
      textAlign: "justify",
      fontSize: "18px",
    },
  },
  HeroImgArea: {
    display: "flex",
    justifyContent: "center",
    width: "800px",
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "auto",
    },
  },
  HeroImg: {
    display: "flex",
    width: "800px",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  contactBtnDiv: {
    marginTop: "20px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "12px",
    },
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/

//background pic link https://pixabay.com/photos/right-advocacy-lex-attorney-jura-4703934/
