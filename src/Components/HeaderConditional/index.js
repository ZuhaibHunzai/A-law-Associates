import { Toolbar } from "@material-ui/core";
import { useState, useEffect } from "react";
import ConAndHeader from "../ConAndHeader";
import Header from "../Header/Header";
import useStyles from "./styles";

const HeaderCon = () => {
  const classes = useStyles();
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 5));
    }
  }, []);
  return (
    <div className={classes.headers}>
      {!small ? (
        <>
          <ConAndHeader />
        </>
      ) : (
        <>
          <Header />
          <Toolbar />
        </>
      )}
    </div>
  );
};

export default HeaderCon;
