import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Questions = () => {
  const questionsRef = useRef(null);
  const title = useRef(null);
  const form = useRef([]);
  const button = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: questionsRef.current,
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
          form.current,
          {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.2,
          },
          "<0.5"
        )
        .from(
          button.current,
          { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" },
          "<1"
        ),
      toggleActions: "play none none none",
    });
  });

  return (
    <div ref={questionsRef} id="questions" className="h-screen w-full">
      <div className="text-center text-[5.06rem] font-satoshi text-navy font-bold mb-6">
        <h2 ref={title}>Questions? Shoot.</h2>
      </div>
      <div className="flex justify-center items-center mt-24">
        <form className="flex flex-col gap-12 w-[600px]">
          <div ref={(el) => (form.current[0] = el)} className="relative z-0">
            <input
              required
              type="text"
              id="name"
              name="name"
              className="peer block w-full appearance-none border-0 border-b border-navy bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-[1rem] font-grotesk text-light-navy duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Your name
            </label>
          </div>
          <div ref={(el) => (form.current[1] = el)} className="relative z-0">
            <input
              required
              type="text"
              id="name"
              name="name"
              className="peer block w-full appearance-none border-0 border-b border-navy bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-[1rem] font-grotesk text-light-navy duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Your email
            </label>
          </div>
          <div ref={(el) => (form.current[2] = el)} className="relative z-0">
            <textarea
              required
              id="message"
              name="message"
              rows="5"
              className="peer block w-full appearance-none border-0 border-b border-navy bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="font-grotesk absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-[1rem] text-light-navy duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
            >
              Your message
            </label>
          </div>
          <div className="button-light-navy font-grotesk text-center hover:bg-navy transition-colors" ref={button}>
            <button
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questions;
