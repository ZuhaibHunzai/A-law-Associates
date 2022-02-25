import { Button, Typography } from "@material-ui/core";
import logoImg from "../../Assets/Images/logo.jpg";
import useStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navMain}>
      <div className={classes.logo}>
        <div>
          <img className={classes.logoImg} src={logoImg} alt="logo"></img>
        </div>
        <div className={classes.logoText}>
          <Typography variant="h5" className={classes.logomainH}>
            A Law Associates
          </Typography>
          <Typography variant="p" className={classes.logomainP}>
            Legal Adviser & Tax Consultant
          </Typography>
        </div>
      </div>
      <div className={classes.menu}>
        <Button variant="outline" className={classes.menuLink}>
          Home
        </Button>
        <Button variant="outline" className={classes.menuLink}>
          Services
        </Button>
        <Button variant="outline" className={classes.menuLink}>
          Contact
        </Button>
        <Button variant="outline" className={classes.menuLink}>
          About
        </Button>
      </div>

      <div className={classes.hamBurger}>
        <MenuIcon className={classes.hamMenu} />
      </div>
    </div>
  );
};

export default Navbar;
