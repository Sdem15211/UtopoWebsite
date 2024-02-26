import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialCard from "./UI-elements/TestimonialCard";
import hannahschmitt from "../images/hannahschmitt.webp";
import diegosantos from "../images/diegosantos.webp";
import sarahlopez from "../images/sarahlopez.webp";

const Testimonials = () => {
  const testimonialpage = useRef(null);
  const title = useRef(null);
  const subtitle = useRef(null);
  const cards = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: testimonialpage.current,
      start: "top 80%",
      animation: gsap
        .timeline()
        .from(title.current, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        })
        .from(
          subtitle.current,
          {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
          },
          "<0.5"
        )
        .from(
          cards.current,
          {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.3,
          },
          "<0.5"
        ),
    })
  });



  return (
    <div
      ref={testimonialpage}
      className="h-screen w-full relative overflow-hidden"
    >
      {/* <img src={utopolightnavy} alt="utopologo" className="z-0 absolute h-[400px] w-auto object-fit opacity-30" /> */}
      <div className="text-center text-[5.06rem] font-satoshi text-navy font-bold mt-12 mb-6">
        <h2 ref={title}>Happy Customers</h2>
      </div>
      <div className="text-[1.125rem] font-regular text-light-navy text-center mb-16">
        <h3 ref={subtitle}>
          Read what our customers have to say about their Utopo experiences
        </h3>
      </div>
      <div className="flex justify-around items-center mt-12">
        <TestimonialCard
          forwardedref={(el) => (cards.current[0] = el)}
          name="Hannah Schmitt"
          role="Hiker"
          imgUrl={hannahschmitt}
          review="I had a fantastic time exploring the national park with Utopo. The scenery was breathtaking and the guides were friendly and informative."
        />
        <TestimonialCard
          forwardedref={(el) => (cards.current[1] = el)}
          name="Diego Santos"
          role="Surfer"
          imgUrl={diegosantos}
          review="Utopo's surf trip was an incredible experience! The instructors were knowledgeable and supportive, and the waves were amazing."
        />
        <TestimonialCard
          forwardedref={(el) => (cards.current[2] = el)}
          name="Sarah Lopez"
          role="Adventurer"
          imgUrl={sarahlopez}
          review="Offroading with Utopo was an adrenaline rush! The trails were challenging and the views were worth every bump."
        />
      </div>
    </div>
  );
};

export default Testimonials;
