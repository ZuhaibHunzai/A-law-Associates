import { Typography } from "@material-ui/core";

import Cards from "../Cards";
import useStyles from "./styles";

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.servicesMain}>
      <div className={classes.serviceMainH}>
        <Typography variant="h1" className={classes.serviceH}>
          Our Services
        </Typography>
      </div>
      <div className={classes.serviceCards}>
        <Cards />
      </div>
    </div>
  );
};

export default Services;
