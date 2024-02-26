import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import loadingImg from "../images/LoadingImgUtopo.webp";
import utopolightnavy from "../images/utopolightnavy.png";
import utopolightbeige from "../images/utopolightbeige.png";

const Welcome = () => {
  const titles = useRef([]);
  const loadingtext = useRef(null);
  const logo = useRef(null);
  const text = SplitType.create(loadingtext.current, { type: "words" });
  const [isLoading, setIsLoading] = useState(true);


  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      }
    });

    tl
    .from(text.words, {
      opacity: 0,
      y: "100%",
      stagger: 0.1,
      duration: 1,
      ease: "back.out",
      delay:0.5
    })
    .from(logo.current, {
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      ease: "power4.out",
    })
    .to(".loading-overlay", {
      y: -1600,
      duration: 1.5,
      ease: "power4.in",
    }, ">0.5")
    .to(titles.current, {
      opacity: 1,
      y: 0,
      stagger: 0.5,
      duration: 3,
      ease: "power4.out",
    }, ">0.5");
    });

  useEffect(() => {
    // Disable scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <section
      id="welcome"
      className="h-screen w-full select-none flex justify-center items-center relative"
    >
      {isLoading && (
        <div className="loading-overlay fixed inset-0 bg-black opacity-100 z-50 flex justify-center items-center">
          <p ref={loadingtext} className="absolute z-30 text-light-beige text-[3.375rem] font-satoshi font-bold top-56">Find Your Wave</p>
          <img ref={logo} src={utopolightbeige} alt="utopo logo" className="h-[130px] w-auto object-fit z-30 translate-y-4" />
          <img src={loadingImg} alt="surfing image" className="absolute top-0 left-0 z-20 brightness-[0.2] object-bottom" />
        </div>
      )}
      <div className="mt-8 z-10 flex flex-col w-full items-center justify-center text-[7.6rem] gap-0">
        <div className="italic font-light text-navy">
          <h1
            ref={(el) => (titles.current[0] = el)}
            className="translate-y-24 opacity-0"
          >
            Welcome
          </h1>
        </div>
        <div className="font-semibold text-light-navy">
          <h1
            ref={(el) => (titles.current[1] = el)}
            className="translate-y-24 opacity-0"
          >
            To
          </h1>
        </div>
        <div className="font-light text-navy">
          <h1
            ref={(el) => (titles.current[2] = el)}
            className="translate-y-24 opacity-0"
          >
            Utopo
          </h1>
        </div>
      </div>
      <div className="absolute right-0 top-0 z-0 overflow-hidden">
        <img
          src={utopolightnavy}
          alt="utopologo"
          className="h-[700px] w-auto object-fit translate-x-72 -translate-y-64 rotate-[35deg] opacity-30"
        />
      </div>
    </section>
  );
};

export default Welcome;
