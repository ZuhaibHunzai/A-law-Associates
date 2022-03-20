import { Typography } from "@material-ui/core";
import { Buttons } from "../Units/buttons";
import { useNavigate } from "react-router-dom";

import useStyles from "./styles";

const Hero = () => {
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }
  const classes = useStyles();
  return (
    <div className={classes.heroMain}>
      <div className={classes.HeroTextArea}>
        <div className={classes.heroHeading}>
          <Typography variant="h2" className={classes.heroMainH}>
            A Law Associates
          </Typography>
        </div>
        <div className={classes.heroHeading}>
          <Typography variant="subtitle2" className={classes.heroMainH2}>
            Legal Adviser And Tax Consultants
          </Typography>
        </div>
        <div className={classes.heroPara}>
          <Typography variant="subtitle2" className={classes.heroMainP}>
            A Law Associates is located in Islamabad/ Rawalpindi, Pakistan, and
            offers a wide variety of legal services to clients. Practice Areas
            mainly includes Taxation, as well as Corporate...
          </Typography>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Buttons
            type="button"
            buttonStyle="btn--primary--outlined"
            buttonSize="btn--medium"
            onClick={() => {
              handleRoute("/about");
            }}
          >
            Read More
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default Hero;
