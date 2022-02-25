import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const ContactNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.ContactNavMain}>
      <div className={classes.email}>
        <div className={classes.ContactNavItemsMain}>
          <div>
            <MailOutlineIcon className={classes.ContactNavIcons} />
          </div>
          <div>
            <Typography variant="p" className={classes.emailText}>
              alawconsultants@gmail.com
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.cell}>
        <div className={classes.ContactNavItemsMain}>
          <div>
            <PhoneIcon className={classes.ContactNavIcons} />
          </div>
          <div>
            <Typography variant="p" className={classes.ContactNavIcon}>
              051-4927179
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.address}>
        <div className={classes.ContactNavItemsMain}>
          <div>
            <LocationOnIcon className={classes.ContactNavIcons} />
          </div>
          <div>
            <Typography variant="p" className={classes.addressText}>
              Office#1 Al Fazal Plaza, Sadiqabad More, Rwp
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.timing}>
        <div className={classes.ContactNavItemsMain}>
          <div>
            <QueryBuilderIcon className={classes.ContactNavIcons} />
          </div>
          <div>
            <Typography variant="p" className={classes.timeText}>
              09:00 AM - 10:00 PM
            </Typography>
          </div>
        </div>
      </div>

      <div>
        <div className={classes.socialLinks}>
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
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <InstagramIcon className={classes.ContactNavIcons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactNav;
