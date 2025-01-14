import React from "react";
import HeroSlider, { Slide } from "react-hero-slider";

import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";

const App = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      intialSlide={1}
      onBeforeChange={(previousSlide, nextslide) =>
        console.log("onBeforeChange", previousSlide, nextslide)
      }
      onChange={(nextslide) => console.log("onChange", nextslide)}
      onAfterChange={(nextslide) => console.log("onAfterChange", nextslide)}
      style={{
        backgroundColor: "rgba(0,0,0,0.33)",
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoPlayDuration: 5000,
        height: "100vh",
      }}
    >
      <Slide
        background={{
          backgroundImage: r1,
          backgroundAttachment: "fixed",
        }}
      />
      <Slide
        background={{
          backgroundImage: r2,
          backgroundAttachment: "fixed",
        }}
      />
    </HeroSlider>
  );
};
export default App;
