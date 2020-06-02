import React, { useEffect } from "react";
import "./styles/app.scss";
import gsap from "gsap";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Cases from "./components/Cases";
import IntroOverlay from "./components/IntroOverlay";

function App() {
  useEffect(() => {
    let vw = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vw}px`);
  }, []);

  useEffect(() => {
    //prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });

    //timeline
    const tl = gsap.timeline();

    tl.from(".line span", 1.5, {
      y: 100,
      ease: "power4out",
      delay: 1,
      skewY: 7, //for tilt
      stagger: {
        amount: 0.3, //allows same animation with oher components after this amount of time
      },
    })
      .to(".overlay-top", 1.3, {
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4,
      })
      .to(".overlay-bottom", 1.3, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .to(".intro-overlay", 0, { css: { display: "none" } })
      .from(".case-image", 1.3, {
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2.5,
        stagger: {
          amount: 0.4,
        },
      });
  }, []);
  return (
    <>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </>
  );
}

export default App;
