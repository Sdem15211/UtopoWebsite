import React, { useRef } from "react";
import heroImg from "../images/heroimgjpg.webp";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const title = useRef(null);
  const section = useRef(null);
  const body = useRef(null);
  const button = useRef(null);
  const text = SplitType.create(title.current, { type: "chars" });

  useGSAP(() => {
    gsap.from(text.chars, {
      opacity: 0.2,
      stagger: 0.1,
      scrollTrigger: {
        trigger: section.current,
        start: "top 80%",
        end: "center 60%",
        scrub: true,
        markers: false,
        toggleActions: "play play reverse reverse",
      },
    });

    ScrollTrigger.create({
      trigger: section.current,
      start: "top center",
      animation: gsap
        .timeline()
        .from(body.current, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        })
        .from(
          button.current,
          { y: 100, opacity: 0, duration: 1.5, ease: "power3.out" },
          0.2
        ),
    });
  });

  return (
    <section ref={section} id="hero" className="w-full h-screen mb-32">
      <div className="mt-24 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2 flex flex-col gap-6">
          <h2
            ref={title}
            className="text-[3.37rem] text-navy font-bold leading-normal"
          >
            Discover unforgettable day trips with Utopo
          </h2>
          <p
            ref={body}
            className="font-grotesk text-[1.25rem] leading-tight text-navy"
          >
            Escape the hustle and bustle of everyday life and embark on exciting
            day trips that will leave you refreshed and rejuvenated with Utopo.
          </p>
          <a ref={button} href="#trips" className="mt-8">
            <span className="button-light-navy text-light-beige font-grotesk drop-shadow-lg hover:bg-navy hover:ease-out duration-300">
              Explore our trips
            </span>
          </a>
        </div>
        <div className="w-1/2 max-h-[650px] rounded-3xl shadow-xl overflow-hidden">
          <img
            src={heroImg}
            alt="hero"
            className="object-cover object-center rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
