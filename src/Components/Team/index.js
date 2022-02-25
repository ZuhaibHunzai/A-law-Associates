import Slider from "../Carousal";
import TeamMembers from "../TeamMembers";
import { ServicesHeader } from "../Units/servicesHeader";

const Team = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div>
        <ServicesHeader>Our Team</ServicesHeader>
      </div>
      <div>
        <TeamMembers />
      </div>
    </div>
  );
};

export default Team;
