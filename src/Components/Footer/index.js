import { Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Logo from "../../Assets/Images/logo.jpg";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.FooterMain}>
      <div className={classes.FooterData}>
        <div className={classes.footerData1}>
          <div>
            <img src={Logo} alt="logo" className={classes.footerlogoImg} />
          </div>
          <div className={classes.footerP}>
            <Typography variant="h5">A Law Associates</Typography>
          </div>
          <div className={classes.footerP}>
            <Typography variant="body2">
              Legal Advisor and Tax Consultants
            </Typography>
          </div>
        </div>
        <div className={classes.footerText}>
          <div>
            <Typography
              variant="subtitle2"
              className={classes.lawAsscoiatesT}
              style={{ fontSize: "22px" }}
            >
              Contact Us
            </Typography>
          </div>
          <div>
            <div
              className={classes.lawAsscoiatesText}
              style={{ paddingTop: "12px" }}
            >
              <Typography variant="subtitle2" className={classes.lawAsscoiates}>
                <ul>
                  <li>alaw.associates@yahoo.com</li>
                </ul>
              </Typography>
            </div>
            <div className={classes.lawAsscoiatesText}>
              <Typography variant="subtitle2" className={classes.lawAsscoiates}>
                <ul>
                  <li>+98-3235119763</li>
                </ul>
              </Typography>
            </div>
            <div className={classes.lawAsscoiatesText}>
              <Typography variant="subtitle2" className={classes.lawAsscoiates}>
                <ul>
                  <li>
                    Office#1, 1st Floor, 64-C, Al Fazal Plaza, Block C,
                    Satellite Town, Sadiqabad More, Rwp
                  </li>
                </ul>
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.SocialMediaIcons}>
          <div>
            <Typography
              variant="subtitle2"
              className={classes.lawAsscoiatesT}
              style={{ fontSize: "22px" }}
            >
              Follow Us
            </Typography>
          </div>
          <div className={classes.iocons}>
            <div>
              <a
                href="https://facebook.com/A-Law-Associates-104632361646740/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FacebookIcon className={classes.ContactNavIcons} />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/alawassociates/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <InstagramIcon className={classes.ContactNavIcons} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.FooterTextCopyRight}>
        <div>
          <Typography
            variant="subtitle2"
            className={classes.lawAsscoiates}
            style={{ fontSize: "16px" }}
          >
            Copyright 2022 © A Law Associates
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
