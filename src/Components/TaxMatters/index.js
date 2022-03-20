import { ServicesHeader } from "../Units/servicesHeader";
import tax from "../../Assets/Images/salesTax.jpg";
import { Buttons } from "../Units/buttons";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const TaxMatters = () => {
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }
  const classes = useStyles();
  return (
    <div className={classes.LegalMain}>
      <div>
        <ServicesHeader>Taxation Matters</ServicesHeader>
      </div>

      <div className={classes.servicesBodyMain}>
        <div className={classes.servicesImgDiv}>
          <img src={tax} alt="legal Case" className={classes.servicesBodyImg} />
        </div>
        <div className={classes.servicesBodyTextDiv}>
          <div className={classes.servicesBodyTextH}>
            <Typography variant="h2" className={classes.serviceH}>
              Taxation Matters
            </Typography>
          </div>
          <div className={classes.servicesbodyTextP}>
            <Typography variant="body2" className={classes.serviceP}>
              A Law Associates is well-placed to advise on a wide spectrum of
              contentious and non-contentious tax matters under the able
              leadership of Raja Abid Hussain, who has particular strength in
              contentious tax matters and advises on issues such as income tax,
              Property tax, Capital Value Tax, Sales Tax, Federal Excise Duty,
              Custom Duty TAX IN PAKISTAN A Law Associates works with a variety
              of major industrial and financial services conglomerates in
              Pakistan and as a result often represents them in high-profile tax
              litigation. The team has particular expertise in different cases.
              The agile team is adept at handling a broad range of disputes.
            </Typography>
          </div>
          <div style={{ marginTop: "12px" }}>
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
export default TaxMatters;
