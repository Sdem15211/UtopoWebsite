import React from "react";
import surfImg from "../images/surftripimgjpg.webp";
import utopolightnavy from "../images/utopolightnavy.png";
import parkImg from "../images/parkimgjpg.webp";
import toyotaImg from "../images/Toyotaimg.webp";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Trips = ({ forwardedref }) => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  const sections = useRef([]);
  const texts = useRef([]);
  const images = useRef([]);
  const title = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: "20% 80%",
      animation: gsap.from(title.current, {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
      }),
    });

    let scrollTween = gsap.to(sections.current, {
      xPercent: -100 * (sections.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: 1,
        end: "+=3000",
      },
    });

    gsap.set(texts.current[0], { opacity: 1, y: 0 });

    sections.current.forEach((section, index) => {
      if (index === 0) return;
      let text = texts.current[sections.current.indexOf(section)];
      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "10% center",
        },
      });
    });

    gsap.set(images.current[0], { opacity: 1 });

    sections.current.forEach((section, index) => {
      if (index === 0) return;

      let image = images.current[sections.current.indexOf(section)];
      gsap.from(image, {
        opacity: 0,
        duration: 2,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left 60%",
        },
      });
    });
  });

  return (
    <section ref={forwardedref}>
      <section
        ref={container}
        id="trips"
        className="wrapper relative overflow-x-hidden h-screen"
      >
        <img
          src={utopolightnavy}
          alt="utopologo"
          className="absolute h-[700px] w-auto object-fit left-96 top-8 rotate-[25deg] opacity-20 scale-[0.7]"
        />
        <div className="text-center text-[5.06rem] font-satoshi text-light-beige font-bold mb-32 ">
          <h2 ref={title}>Our trips</h2>
        </div>
        <div className="w-[300vw] flex z-50 h-full">
          <section
            ref={(el) => (sections.current[0] = el)}
            className="w-screen"
          >
            <div className="flex gap-24 px-24">
              <div
                ref={(el) => (images.current[0] = el)}
                className="w-[620px] h-[440px] rounded-3xl shadow-xl"
              >
                <img
                  src={surfImg}
                  alt="surftrip"
                  className="w-full h-full object-cover object-center rounded-3xl"
                />
              </div>
              <div
                ref={(el) => (texts.current[0] = el)}
                className="w-1/2 space-y-8"
              >
                <h3 className="text-[2.25rem] font-bold text-light-beige">
                  Surf trip to Maceda
                </h3>
                <p className="text-[1.125rem] text-light-beige font-light font-grotesk leading-relaxed">
                  Dive into the waves and experience the thrill of surfing on
                  our Maceda surf trip. Whether you're a seasoned surfer or a
                  beginner catching your first wave, join us for an
                  unforgettable day of sun, sea, and surf along Portugal's
                  picturesque coastline. Let the rhythm of the ocean and the
                  warmth of the sun rejuvenate your spirit as you ride the waves
                  with Utopo.
                </p>
                <div className="flex gap-6">
                  <a href='#'>
                    <span className="button-beige-outline font-grotesk text-light-beige  hover:border-light-beige ease-in-out transition-all">More info</span>
                  </a>
                  <a  href='#'>
                    <span className="button-beige font-grotesk text-navy hover:bg-light-beige ease-in-out transition-colors">Book now</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            ref={(el) => (sections.current[1] = el)}
            className="w-screen"
          >
            <div className="z-50 flex gap-24 px-24">
              <div
                ref={(el) => (images.current[1] = el)}
                className="w-[620px] h-[440px] rounded-3xl shadow-xl"
              >
                <img
                  src={parkImg}
                  alt="surftrip"
                  className="w-full h-full object-cover object-center rounded-3xl"
                />
              </div>
              <div
                ref={(el) => (texts.current[1] = el)}
                className="w-1/2 space-y-8"
              >
                <h3 className="text-[2.25rem] font-bold text-light-beige">
                  Peneda-Gerês National Park
                </h3>
                <p className="text-[1.125rem] text-light-beige font-light font-grotesk leading-relaxed">
                  Escape into the heart of nature with our visit to Peneda-Gerês
                  National Park. Explore rugged landscapes, crystal-clear lakes,
                  and ancient forests as you wander through this breathtaking
                  sanctuary. From scenic hikes to tranquil picnics, immerse
                  yourself in the beauty and tranquility of Portugal's oldest
                  national park. Join us for a day of adventure and discovery,
                  and let the wonders of nature inspire your soul with Utopo.
                </p>
                <div className="flex gap-6">
                <a href='#'>
                    <span className="button-beige-outline font-grotesk text-light-beige  hover:border-light-beige ease-in-out transition-all">More info</span>
                  </a>
                  <a  href='#'>
                    <span className="button-beige font-grotesk text-navy hover:bg-light-beige ease-in-out transition-colors">Book now</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            ref={(el) => (sections.current[2] = el)}
            className="w-screen"
          >
            <div className="z-50 flex gap-24 px-24">
              <div
                ref={(el) => (images.current[2] = el)}
                className="w-[620px] h-[440px] rounded-3xl shadow-xl"
              >
                <img
                  src={toyotaImg}
                  alt="surftrip"
                  className="w-full h-full object-cover object-center rounded-3xl"
                />
              </div>
              <div
                ref={(el) => (texts.current[2] = el)}
                className="w-1/2 space-y-8"
              >
                <h3 className="text-[2.25rem] font-bold text-light-beige">
                  Offroad Land Cruiser ride
                </h3>
                <p className="text-[1.125rem] text-light-beige font-light font-grotesk leading-relaxed">
                  Gear up for an adrenaline-fueled adventure with Utopo's
                  off-road Land Cruiser ride. Venture deep into the rugged
                  mountains of Portugal aboard our sturdy 4x4 vehicles, where
                  breathtaking landscapes and thrilling terrain await. Feel the
                  rush of conquering off-road trails while soaking in panoramic
                  views of the untouched wilderness. Join us for an
                  unforgettable journey off the beaten path, where every twist
                  and turn promises excitement and exploration.
                </p>
                <div className="flex gap-6">
                <a href='#'>
                    <span className="button-beige-outline font-grotesk text-light-beige  hover:border-light-beige ease-in-out transition-all">More info</span>
                  </a>
                  <a  href='#'>
                    <span className="button-beige font-grotesk text-navy hover:bg-light-beige ease-in-out transition-colors">Book now</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Trips;
