import { Buttons } from "../Units/buttons";
import { useNavigate } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";

const ServicesPageDesign = ({ image, name, description, btnText, path }) => {
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }

  const classes = useStyles();
  return (
    <div className={classes.LegalMain}>
      <div className={classes.servicesBodyMain}>
        <div className={classes.servicesImgDiv}>
          <img
            src={image}
            alt="legal Case"
            className={classes.servicesBodyImg}
          />
        </div>
        <div className={classes.servicesBodyTextDiv}>
          <br />
          <div className={classes.servicesBodyTextH}>
            <Typography variant="h2" className={classes.serviceH}>
              {name}
            </Typography>
          </div>
          <br />
          <div className={classes.servicesbodyTextP}>
            <Typography variant="body2" className={classes.serviceP}>
              {description}
            </Typography>
          </div>
          <div style={{ marginTop: "12px" }}>
            <Buttons
              type="button"
              buttonStyle="btn--primary--outlined"
              buttonSize="btn--medium"
              onClick={() => {
                handleRoute(`${path}`);
              }}
            >
              {btnText}
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesPageDesign;

const useStyles = makeStyles((theme) => ({
  servicesBodyMain: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  servicesImgDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  servicesBodyImg: {
    width: "55%",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  servicesBodyTextDiv: {
    width: "55%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: "30px",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  serviceH: {
    fontSize: "35px",
    fontWeight: "bold",
  },
  serviceP: {
    display: "flex",
    fontSize: "22px",
    textAlign: "justify",
  },
}));
