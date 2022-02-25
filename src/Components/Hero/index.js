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
          <Typography variant="p" className={classes.heroMainH2}>
            Legal Adviser And Tax Consultants
          </Typography>
        </div>
        <div className={classes.heroPara}>
          <Typography variant="p" className={classes.heroMainP}>
            A law Associates is one of the best law consultants Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut aboris nisi ut aliquip ex ea commodo consequat.
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
