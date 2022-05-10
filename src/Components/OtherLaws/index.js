import { ServicesHeader } from "../Units/servicesHeader";
import legal from "../../Assets/Images/gst.jpg";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import { Buttons } from "../Units/buttons";
import { useNavigate } from "react-router-dom";

const ServicesMatters = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }
  return (
    <div className={classes.LegalMain}>
      <div>
        <ServicesHeader>Other Laws</ServicesHeader>
      </div>
      <div className={classes.servicesBodyMain}>
        <div className={classes.servicesImgDiv}>
          <img
            src={legal}
            alt="legal Case"
            className={classes.servicesBodyImg}
          />
        </div>
        <div className={classes.servicesBodyTextDiv}>
          <div className={classes.servicesBodyTextH}>
            <Typography variant="h2" className={classes.serviceH}>
              Other Laws
            </Typography>
          </div>
          <div className={classes.servicesbodyTextP}>
            <Typography variant="body2" className={classes.serviceP}>
              Our Law Firm deals with cases of Special Laws relating to: <br />
              Elections, Cyber Crime, Services Metters, Consumer Protection,
              Environmental Protection, Electricity, Gas and Petroleum, Excise
              and Customs, Import & Export, Ejectment of tenant, Fixation of
              fair rent, Recovery of rent amount, Rent Appeals, Recovery of Bad
              Debts and Loan by initiating Civil and Criminal proceeding against
              defaulters in very vigilant and aggressive manner.
            </Typography>
          </div>
          <div style={{ marginTop: "12px", marginLeft: "20px" }}>
            <Buttons
              type="button"
              buttonStyle="btn--primary--outlined"
              buttonSize="btn--medium"
              onClick={() => {
                handleRoute("/contact");
              }}
            >
              Contact Us
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesMatters;
