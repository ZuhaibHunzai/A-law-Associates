import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "green",
    marginLeft: "25px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "3px",
    },
  },
  logoName: {},
  logo: {
    width: "60px",
    height: "60px",
    borderRadius: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "55px",
      height: "50px",
      marginLeft: "0px",
    },
  },
  logoText: {
    display: "flex",
    width: "auto",
    height: "auto",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "12px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logoTextMainH: {
    display: "flex",
    fontSize: "25px",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      fontSize: "20px",
      flexWrap: "wrap",
    },
  },
  logoTextMainP: {
    display: "flex",
    fontSize: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  headerMidData: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "12vh",
    backgroundColor: "#162275",
  },
  bookingBtn: {
    marginRight: "45px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  HeaderData: {},
  LogoData: {},
}));
export default useStyles;
