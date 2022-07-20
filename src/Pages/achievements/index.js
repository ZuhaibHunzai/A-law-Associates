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
          <Slider />
        </Box>
      </Box>
    </>
  );
};
export default Achievements;
