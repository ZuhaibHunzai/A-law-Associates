import { makeStyles, createTheme } from "@material-ui/core";

// const sizes = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 700,
//       lg: 1000,
//       xl: 1536,
//     },
//   },
// });

const useStyles = makeStyles((theme) => ({
  navMain: {
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid #e2e2e2",
    fontFamily: "Roboto",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  logoImg: {
    width: "65px",
    height: "65px",
    marginRight: "12px",
  },
  logo: {
    marginLeft: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logoText: {
    color: "green",
  },
  logomainH: {
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      fontWeight: "500",
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400",
      fontSize: "16px",
    },
  },
  logomainP: {
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontWeight: "400",
      fontSize: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "100",
      fontSize: "12px",
    },
  },
  menu: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  hamBurger: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  hamMenu: {
    width: "35px",
    height: "35px",
    marginRight: "15px",
  },
  menuLink: {
    textTransform: "capitalize",
    color: "green",
    letterSpacing: "2px",
    marginRight: "15px",
    fontWeight: "bold",
  },
  SocialLinksHover: {
    cursor: "pointer",
    "&:hover": {
      color: "#d5d5d5",
      transition: "0.5s",
    },
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
