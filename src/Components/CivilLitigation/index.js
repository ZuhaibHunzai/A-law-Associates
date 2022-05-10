import { ServicesHeader } from "../Units/servicesHeader";
import legal from "../../Assets/Images/income.jpg";
import { Buttons } from "../Units/buttons";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const CivilLitigation = () => {
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }

  const classes = useStyles();
  return (
    <div className={classes.LegalMain}>
      <div>
        <ServicesHeader>Civil Litigation</ServicesHeader>
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
              Civil Litigation
            </Typography>
          </div>
          <div className={classes.servicesbodyTextP}>
            <Typography variant="body2" className={classes.serviceP}>
              Our Law Firm knows how to face challenges arising out of difficult
              and complex civil cases. We are a well-trained team, working
              collaboratively in order to win lawsuits. We are confident that we
              can achieve the needs and best interests of our clients. We have a
              team of widely known Advocates and Lawyers specializing in all
              areas of civil litigation, who practice in Civil Courts, and High
              Courts. Our Lawyers keep fully engage with clients at all stages
              of their cases that occur during litigation. Our team is highly
              experienced and has dealt with hundreds of cases in Pakistan with
              a proven record of accomplishment. Our specialized team studies
              all available options in relation to cases and then advises client
              on the best legal option before the courts. We are sufficiently
              experienced and professionally equipped to fight in order to
              achieve the success. Our professional team deals with all aspects
              of juridical administrations facing our clients. We work hard to
              utilize effective measures in order to shun and avoid problems. We
              take aggressive legal approach to protect clients’ rights and
              business plans from others’ aggression. We have very vigilant and
              approach in dealing with Civil Litigation including: Partition of
              Properties, Cancellation of Documents, Specific Performance of
              Contracts, Restoration of Possession of Properties, Permanent
              Injunctions, Suits for Dissolution of Partnerships, Rendition of
              Accounts, Recovery of Money and Mesne Profits, Declaration of
              Rights with Consequential Relief, Benami Transactions, Recovery of
              Damages, Succession Certificates, Stay Orders, etc.
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
export default CivilLitigation;
