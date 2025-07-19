"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Make Your Own Online Store",
    description:
      "Easily manage your startup's content with our intuitive platform. Create engaging blog posts, handle customer contact entries, and streamline your digital presence — all from a modern, responsive dashboard.",
    image: "/images/slide1bannerbg.png",
  },
  {
    id: 2,
    title: "Product Ratings & Reviews",
    description:
      "Empower your startup to collect and manage customer feedback effectively. Our dashboard lets you handle product reviews and insights with ease—improving trust, transparency, and growth.",
    image: "/images/plug-f1.png",
  },
  {
    id: 3,
    title: "Start Using Analyze To Grow",
    description:
      "Use built-in analytics to monitor blog traffic and contact trends. Track interactions, gain insights, and make smarter business decisions with our intuitive web platform.",
    image: "/images/plug-f2.png",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[620px] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url("/plugin-banner-bg.jpg")' }}
      id="home"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="flex flex-col md:flex-row h-full items-center justify-between px-7 md:px-20">
            <div
              className={`text-wrapper flex flex-col justify-center transition-all duration-700 ${
                current === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <h2 className="text-[#fbf349] text-[32px] md:text-[54px] leading-[40px] md:leading-[64px] font-semibold mb-4 text-left">
                {slide.title}
              </h2>
              <p className="text-white text-[18px] md:text-[22px] leading-[24px] md:leading-[28px] font-normal text-left">
                {slide.description}
              </p>
            </div>

            <div
              className={`relative w-[90%] max-w-[530px] h-[350px] md:h-[500px] transition-all duration-700 ${
                current === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-yellow-400" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Footer White Bar */}
    </div>
  );
}
