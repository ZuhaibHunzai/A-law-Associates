import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  teamMAin: {
    backgroundColor: "#F7F7F7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  membersMain: {
    display: "grid",

    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "50px",
    paddingTop: "20px",
    paddingBottom: "50px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "20px",
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "20px",
      gridTemplateColumns: "1fr",
    },
  },
  membersMainMap: {
    width: "340px",
    borderRadius: "20px",
    background: "#fff",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    color: "#162275",
    boxShadow: "0px 0px 10px #162275",
  },
  members: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyItem: "center",
    alignItems: "center",
    marginTop: "20px",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginLeft: "0px",
      width: "auto",
    },
  },
  membersName: {
    width: "290px",
    paddingLeft: "12px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0px",
      textAlign: "center",
    },
  },
  memberPic: {
    display: "flex",
    width: "100%",
    height: "250px",
  },
  membersDes: {
    display: "flex",
    textAlign: "justify",
    padding: "12px",
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
      marginTop: "12px",
    },
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
