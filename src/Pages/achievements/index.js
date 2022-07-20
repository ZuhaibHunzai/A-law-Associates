import { Box } from "@material-ui/core";
import Slider from "../../Components/Carousal";
import { ServicesHeader } from "../../Components/Units/servicesHeader";

const Achievements = () => {
  return (
    <>
      <Box>
        <Box>
          <ServicesHeader>
            Achievements of The A Law Associates Team
          </ServicesHeader>
        </Box>
        <Box>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa laborum. Perspiciatis minima nesciunt dolorem!
            Officiis iure rerum voluptates a cumque velit.
          </p>
        </Box>
        <Box>
          <Slider />
        </Box>
      </Box>
    </>
  );
};
export default Achievements;
