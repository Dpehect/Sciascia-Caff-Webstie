/**
 * About Component
 *
 * Displays company information in a horizontal scrolling section.
 * Features:
 * - GSAP ScrollTrigger for smooth horizontal scroll animation
 * - Three panels: "Our Journey", "Our Promise", "Our Team"
 * - Pinned section during scroll for immersive experience
 * - Responsive layout: text-only on mobile, text+image on desktop
 * - Uses useLayoutEffect to ensure animations run before paint
 */

"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Our Journey",
    description:
      "Founded in 1919, Sciascia Caffè began as a small cafe with a vision for exceptional coffee. Now a beloved name, we're known for quality and warm hospitality. Driven by passion, we create memorable coffee experiences, one cup at a time.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Our Promise",
    description:
      "At Sciascia Caffè, we promise refined coffee with a thoughtful approach. We source beans with care, respecting people and the planet. Our meticulous preparation ensures a rich, satisfying experience rooted in quality, sustainability, and community.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Our Team",
    description:
      "At Sciascia Caffè, our dedicated team is behind every great cup. Our skilled baristas work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup.",
  },
];

const About = () => {
  const scrollableSectionRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <div ref={scrollableSectionRef} className="h-screen w-[300vw] flex relative">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-screen h-screen flex flex-col justify-center items-center relative"
            >
              <div className="container mx-auto">
                <div className="flex gap-[30px] relative">
                  <div className="flex-1 flex flex-col justify-center items-center">
                    <Badge containerStyles="w-[180px] h-[180px]" />
                    <div className="max-w-[560px] text-center">
                      <h2 className="h2 text-white mb-4">
                        <span className="mr-4">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">{item.title.split(" ")[1]}</span>
                      </h2>
                      <div className="mb-8">
                        <Separator />
                      </div>
                      <p className="leading-relaxed mb-16 px-8 xl:px-0">
                        {item.description}
                      </p>
                      <button className="btn">See more</button>
                    </div>
                  </div>
                  <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                    <Image
                      src={item.imgSrc}
                      fill
                      className="object-cover"
                      quality={100}
                      priority
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
