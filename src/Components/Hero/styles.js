import { makeStyles } from "@material-ui/core";
import Bg from "../../Assets/Images/pen-on-paper.jpg";

const useStyles = makeStyles((theme) => ({
  heroMain: {
    width: "100%",
    height: "90vh",
    backgroundImage: `url(${Bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    // filter: "brightness(90%)",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    // borderBottomRightRadius: "350px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      height: "60vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      // borderBottomRightRadius: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "auto",
      backgroundPosition: "left",
      // borderBottomRightRadius: "150px",
      // filter: "brightness(40%)",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
      // filter: "brightness(40%)",
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
    // background: "rgba(0,0,0,0.3)",

    [theme.breakpoints.down("md")]: {
      justifyContent: "space-around",
      alignItems: "left",
      flexDirection: "column",
      marginLeft: "0px",
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "auto",
      marginLeft: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
      marginLeft: "10px",
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
      paddingRight: "12px",
      paddingLeft: "12px",
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
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/

//background pic link https://pixabay.com/photos/right-advocacy-lex-attorney-jura-4703934/
