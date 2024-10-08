import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Buttons } from "../Units/buttons";
import Logo from "../../Assets/Images/logo.jpg";
import HamBurger from "../HamBurger/index";
// import "./Header.css";
import useStyles from "./Style";
import { useNavigate } from "react-router-dom";

const ScrollHeader = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }
  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar
          className={classes.AppBar}
          position="static"
          style={{ backgroundColor: "red" }}
        >
          <Toolbar className={classes.Toolbar}>
            <div className={classes.logoDiv} onClick={() => handleRoute("/")}>
              <div className={classes.logoName}>
                <img
                  width="140px"
                  className={classes.logo}
                  src={Logo}
                  alt="logo"
                />
              </div>
              <div className={classes.logoText}>
                <div style={{ display: "flex" }}>
                  <Typography
                    variant="subtitle2"
                    className={classes.logoTextMainH}
                    style={{ color: "#fff" }}
                  >
                    A Law Associates
                  </Typography>
                </div>
                <div style={{ display: "flex" }}>
                  <Typography variant="subtitle2" style={{ color: "#fff" }}>
                    Legal Adviser & Tax Consultant
                  </Typography>
                </div>
              </div>
            </div>
            <div className={classes.headerMidData}>
              <Buttons
                type="button"
                buttonStyle="btn--white--solid"
                buttonSize="btn--medium"
                onClick={() => handleRoute("/")}
              >
                Home
              </Buttons>

              <Buttons
                type="button"
                buttonStyle="btn--white--solid"
                buttonSize="btn--medium"
                onClick={() => handleRoute("/services")}
              >
                Services
              </Buttons>
              <Buttons
                type="button"
                buttonStyle="btn--white--solid"
                buttonSize="btn--medium"
                onClick={() => handleRoute("/team")}
              >
                Team
              </Buttons>
              <Buttons
                type="button"
                buttonStyle="btn--white--solid"
                buttonSize="btn--medium"
                onClick={() => handleRoute("/a-law-associates-achievements")}
              >
                Achievements
              </Buttons>
              <Buttons
                type="button"
                buttonStyle="btn--white--solid"
                buttonSize="btn--medium"
                onClick={() => handleRoute("/about")}
              >
                About
              </Buttons>
              <Buttons
                type="button"
                buttonStyle="btn--white--solid"
                buttonSize="btn--medium"
                onClick={() => handleRoute("/new-updates")}
              >
                Updates
              </Buttons>
              <Buttons
                type="button"
                buttonStyle="btn--white--solid"
                buttonSize="btn--medium"
                onClick={() => handleRoute("/new-updates")}
              >
                Aqib
              </Buttons>
            </div>
            <div className="walletDiv">
              <Buttons
                type="button"
                buttonStyle="btn--white--outlined"
                buttonSize="btn-large"
                onClick={() => handleRoute("/contact")}
                className={classes.bookingBtn}
              >
                Book Consultant
              </Buttons>

              <HamBurger />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default ScrollHeader;
