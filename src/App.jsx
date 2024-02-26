import React from "react";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

import Navbar from "./assets/components/Navbar";
import Welcome from "./assets/components/Welcome";
import Hero from "./assets/components/Hero";
import Trips from "./assets/components/Trips";
import Testimonials from "./assets/components/Testimonials";
import About from "./assets/components/About";
import Questions from "./assets/components/Questions";
import Footer from "./assets/components/Footer";
import utopolightnavy from "./assets/images/utopolightnavy.png";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  const tripsRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".bg-light-beige", {
      backgroundColor: "#213555",
      scrollTrigger: {
        trigger: tripsRef.current,
        start: "top 375px",
        end: "bottom 500px",
        toggleActions: "restart reverse restart reverse",
      },
    });
  });

  return (
    <div className="bg-light-beige">
      <div className="absolute z-0">
        <img
          src={utopolightnavy}
          alt="utopo-background-image"
          className="h-[700px] w-auto object-fit -translate-x-72 translate-y-72 rotate-[35deg] opacity-30"
        />
      </div>
      <Navbar />
      <Welcome />
      <section className="px-24">
        <Hero />
      </section>
      <Trips forwardedref={tripsRef} />
      <section className="px-24 mb-24">
        <Testimonials />
      </section>
      <section className="mb-24">
        <About />
      </section>
      <section className="mb-24">
        <Questions />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
