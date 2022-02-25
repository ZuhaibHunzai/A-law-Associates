import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import { membersData } from "../../Assets/Data/cardsData";

const TeamMembers = () => {
  const classes = useStyles();
  return (
    <div className={classes.teamMAin}>
      <div className={classes.membersMain}>
        {membersData.map((item, index) => {
          return (
            <div className={classes.membersMainMap}>
              <div className={classes.members}>
                <div className={classes.membersName}>
                  <div>
                    <Typography variant="h4" className={classes.memberName}>
                      {item.name}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className={classes.memberSpeciality}
                    >
                      {item.speciality}
                    </Typography>
                  </div>
                </div>
                <div>
                  <img
                    src={item.src}
                    alt="profile-pic"
                    className={classes.memberPic}
                  />
                </div>

                <div style={{ paddingBottom: "20px" }}>
                  <Typography variant="p" className={classes.membersDes}>
                    {item.desc}
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMembers;
