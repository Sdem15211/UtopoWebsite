import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { utopologonavy } from "../images/index.js";

const Navbar = () => {
  const nav = useRef(null);
  const links = useRef([]);
  const logo = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline();
    tl.from(nav.current, { y: -100, duration: 1, ease: "power4.out", delay: 5 })
      .from(logo.current, { opacity: 0, duration: 1.5, ease: "power4.out" }, ">")
      .from(links.current, { opacity: 0, duration: 1.5, ease: "power4.out" }, "<")
  })



  return (
    <header
      ref={nav}
      className="absolute z-10 top-0 w-full flex justify-between items-center bg-light-beige border-b-[1px] border-light-navy px-6 py-2"
    >
      <a ref={logo} href="#welcome" className="z-50">
        <img
          src={utopologonavy}
          alt="logo"
          className="h-12"
          aria-label="Logo"
        />
      </a>
      <nav className="space-x-7 font-grotesk font-regular">
        <a ref={(el) => (links.current[0] = el)} href="#trips" className="group relative text-navy">
          <span>Trips</span>
          <span className="absolute bottom-0 left-0 h-[0.1rem] w-0 rounded-full bg-light-navy transition-all ease-in-out group-hover:w-full"></span>
        </a>
        <a ref={(el) => (links.current[1] = el)} href="#about" className="group relative text-navy">
          <span>Who are we?</span>
          <span className="absolute bottom-0 left-0 h-[0.1rem] w-0 rounded-full bg-light-navy transition-all ease-in-out group-hover:w-full"></span>
        </a>
        <a ref={(el) => (links.current[2] = el)} href="#questions" className="group relative text-navy">
          <span>Contact</span>
          <span className="absolute bottom-0 left-0 h-[0.1rem] w-0 rounded-full bg-light-navy transition-all ease-in-out group-hover:w-full"></span>
        </a>
        <a ref={(el) => (links.current[3] = el)} href="#" className="button-navy group relative">
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.1rem] w-0 rounded-full bg-light-navy duration-300 ease-in-out group-hover:w-full"></span>
            <span>Book your trip</span>
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
