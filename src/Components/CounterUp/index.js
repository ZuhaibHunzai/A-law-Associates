import useStyles from "./styles";
import CountUp from "react-countup";
import { Typography } from "@material-ui/core";

const CounterUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.counterMain}>
      <div className={classes.counter}>
        <div>
          <CountUp
            useEasing={true}
            end={2763}
            duration={5}
            className={classes.couterup}
          />
        </div>
        <Typography variant="subtitle2" className={classes.counterP}>
          No of Clients
        </Typography>
      </div>
      <div className={classes.counter}>
        <div>
          <CountUp
            useEasing={true}
            end={91537}
            duration={5}
            className={classes.couterup}
          />
        </div>
        <Typography variant="subtitle2" className={classes.counterP}>
          Projects Completed
        </Typography>
      </div>
      <div className={classes.counter}>
        <div>
          <CountUp
            useEasing={true}
            end={15}
            duration={8}
            className={classes.couterup}
          />
        </div>
        <Typography variant="subtitle2" className={classes.counterP}>
          Years of Experience
        </Typography>
      </div>
    </div>
  );
};

export default CounterUp;
