import React from "react";
import utopofoto from "../images/utopofoto.webp";
import landscape from "../icons/landscape.png";
import surf from "../icons/surfboard.png";
import van from "../icons/van.png";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const About = () => {
  const aboutRef = useRef(null);
  const title = useRef(null);
  const text = useRef(null);
  const icons = useRef([]);
  const image = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: aboutRef.current,
      start: "top center",
      animation: gsap
      .timeline()
      .from(title.current, {y: 100, opacity: 0, duration: 1.5, ease: "power3.out"})
      .from(text.current, {x: -100, opacity: 0, duration: 1.5, ease: "power3.out"}, 0.2)
      .from(icons.current, {x: -100, opacity: 0, duration: 1.5, ease: "power3.out", stagger: 0.2}, 0.2)
      .from(image.current, {x: 100, opacity: 0, duration: 1.5, ease: "power3.out"}, 0.2),
      toggleActions: "play none none none",
    })
  });
    




  return (
    <div ref={aboutRef} id="about" className="h-screen w-full">
      <div className="w-full h-1/4 bg-light-navy flex justify-center items-center">
        <h2 ref={title} className="text-[5.06rem] font-satoshi text-light-beige font-bold">
          Who are we?
        </h2>
      </div>
      <div className="w-full h-3/4 flex justify-between items-center px-24 py-24 gap-16">
        <div className="w-1/2 flex flex-col min-h-[375px] justify-between">
          <p ref={text} className="text-[1.125rem] text-navy font-light font-grotesk leading-relaxed">
            At the heart of Utopo are Maarten and Tobias, two spirited founders
            whose love for Portugal's landscapes and surfing culture inspired
            the creation of our company. With a shared passion for exploration
            and a commitment to sustainable tourism, we invite you to join us on
            unforgettable adventures across Portugal's rugged terrain and
            pristine coastlines. Through Utopo, we seek to not only provide
            thrilling experiences but also to foster a deeper connection to
            nature and community, ensuring every journey leaves a lasting
            impression.
          </p>
          <div className="flex justify-between items-center">
            <img ref={(el) => (icons.current[0] = el)} src={landscape} alt="landscape" loading="lazy" width="100px" height="100x" />
            <img ref={(el) => (icons.current[1] = el)} src={surf} alt="surf" loading="lazy" width="100px" height="100px" />
            <img ref={(el) => (icons.current[2] = el)} src={van} alt="van" loading="lazy" width="100px" height="100px" />
          </div>
        </div>
        <div ref={image} className="w-1/2 flex items-center justify-center relative">
          <div className="absolute w-[550px] h-[400px] right-6 -bottom-4 bg-navy rounded-[30px] shadow-md"></div>
          <img
            src={utopofoto}
            alt="utopofoto"
            width="550px"
            loading="lazy"
            className="rounded-[30px] z-10 item-center object-cover saturate-[0.75]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
