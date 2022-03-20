import { ServicesHeader } from "../Units/servicesHeader";
import profile from "../../Assets/Images/profile.jpeg";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import Location from "../Location";

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <ServicesHeader>About Us</ServicesHeader>
      </div>
      <div className={classes.servicesBodyMain}>
        <div className={classes.servicesImgDiv}>
          <img
            src={profile}
            alt="legal Case"
            className={classes.servicesBodyImg}
          />
        </div>
        <div className={classes.servicesBodyTextDiv}>
          <div className={classes.servicesBodyTextH}>
            <Typography variant="h2" className={classes.serviceH}>
              A Law Associates
            </Typography>
          </div>
          <div className={classes.servicesBodyTextH}>
            <Typography variant="h2" className={classes.serviceH2}>
              Legal Adviser & Tax Consultant
            </Typography>
          </div>
          <div className={classes.servicesbodyTextP}>
            <Typography variant="body2" className={classes.serviceP}>
              A Law Associates is located in Islamabad/ Rawalpindi, Pakistan,
              and offers a wide variety of legal services to clients. Practice
              Areas mainly includes Taxation, as well as Corporate, Company,
              Services Metters, Constitutional Metters, Civil, Family, and
              Criminal Litigations, Property Disputes (Selling/Buying and
              Letting), etc.<br></br>
              <br></br>A Law Associates, are committed to clients’ interests.
              They have vast experience working with individuals, corporations,
              civil society organizations including NGOs, governmental bodies,
              and public sector organizations, offering document preparation,
              advice, and representation in trials, appeal courts, and/or
              tribunal.<br></br>
              <br></br>A Law Associates provides comprehensive legal services
              based on clients’ specific needs. Our legal team is dedicated to
              the highest levels of service and client satisfaction, working to
              provide solutions that resolve clients’ legal concerns.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.location}>
        <Location />
      </div>
    </div>
  );
};

export default About;
