'use client';
import React from "react";
import { CiMonitor, CiCloud, CiShoppingCart } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { SiMusicbrainz } from "react-icons/si";

const serviceCard = [
  { title: "Software Development", icon: <CiMonitor /> },
  { title: "Cloud & DevOps Services", icon: <CiCloud /> },
  { title: "Cybersecurity", icon: <MdOutlineSecurity /> },
  { title: "AI & Data Science", icon: <GiMaterialsScience /> },
  { title: "E-commerce Solutions", icon: <CiShoppingCart /> },
  { title: "Iot-based Water Level monitoring system", icon: <SiMusicbrainz /> },
];

const Services = () => {
  return (
    <div id="services" className="py-10">
      <h2 className="text-[40px] sm:text-[28px] leading-[48px] sm:leading-[36px] font-semibold text-[#292929] text-center mb-5">
        Services you get
      </h2>
      <div
        className="max-w-[930px] mx-auto bg-cover bg-center bg-no-repeat rounded-[20px] py-10 px-4 bg-[#4e2fa9]"
        style={{ backgroundImage: 'url("/images/dpf-bg.png")' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {serviceCard.map((data, index) => (
            <div key={index} className="flex flex-col items-center gap-2 text-center">
              <div className="w-[150px] h-[150px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-[20px] flex items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-[#f7dc6f] group">
                <div className="text-[60px] sm:text-[36px] md:text-[50px] group-hover:text-white transition-colors duration-300">
                  {data.icon}
                </div>
              </div>
              <strong className="text-white text-[16px] sm:text-[14px] leading-[22px] sm:leading-[20px] font-medium">
                {data.title}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
