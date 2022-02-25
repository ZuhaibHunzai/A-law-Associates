import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import form from "../../Assets/Images/form.jpg";
import gst from "../../Assets/Images/gst.jpg";
import legal from "../../Assets/Images/legal.jpg";
import society from "../../Assets/Images/society.jpg";

const Slider = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div
          style={{
            height: 700,
            backgroundImage: `url(${legal})`,
          }}
        >
          First card
        </div>
        <div style={{ height: 700, backgroundImage: `url(${society})` }}>
          Second card
        </div>
        <div style={{ height: 700, backgroundImage: `url(${form})` }}>
          Third card
        </div>
        <div style={{ height: 700, backgroundImage: `url(${gst})` }}>
          Fourth card
        </div>
      </ItemsCarousel>
    </div>
  );
};

export default Slider;
