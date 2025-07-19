import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { SiIndeed } from "react-icons/si";

const Footer = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat mt-16 py-16 px-4 sm:px-6"
      style={{ backgroundImage: 'url("/images/footer-bg.jpg")' }}
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="text-white">
              <h3 className="text-2xl font-medium leading-[40px] mb-4">
                Tech Startup
              </h3>
              <p className="text-sm font-light leading-6">
                Tech Startup is a content management platform built for growing businesses. 
                Manage blog posts, handle customer contacts, and scale your 
                startup's digital presence with ease and flexibility.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  target="_blank"
                  className="bg-white text-[#292929] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#fbf349] transition duration-300"
                >
                  <GrFacebookOption />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-white text-[#292929] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#fbf349] transition duration-300"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-white text-[#292929] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#fbf349] transition duration-300"
                >
                  <IoLogoInstagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-white text-[#292929] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#fbf349] transition duration-300"
                >
                  <SiIndeed />
                </a>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="w-full md:w-1/6 px-4 mb-8 md:mb-0">
            <div className="text-white">
              <h3 className="text-2xl font-medium mb-4">Features</h3>
              <ul className="flex flex-col gap-2 text-sm font-light">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#fbf349] hover:pl-1 transition-all duration-300"
                  >
                    Timeline Review
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#fbf349] hover:pl-1 transition-all duration-300"
                  >
                    Custom fields
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#fbf349] hover:pl-1 transition-all duration-300"
                  >
                    Custom Templates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#fbf349] hover:pl-1 transition-all duration-300"
                  >
                    Task dependencies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div className="w-full md:w-1/6 px-4 mb-8 md:mb-0">
            <div className="text-white">
              <h3 className="text-2xl font-medium mb-4">Company</h3>
              <ul className="flex flex-col gap-2 text-sm font-light">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#fbf349] hover:pl-1 transition-all duration-300"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#fbf349] hover:pl-1 transition-all duration-300"
                  >
                    Pricing plan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#fbf349] hover:pl-1 transition-all duration-300"
                  >
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#fbf349] hover:pl-1 transition-all duration-300"
                  >
                    Latest news
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3 px-4">
            <div className="text-white">
              <h3 className="text-2xl font-medium mb-4">Get in touch</h3>
              <ul className="flex flex-col gap-2 text-sm font-light">
                <li>
                  <a
                    href="tel:+923066698696"
                    className="hover:text-[#fbf349] hover:pl-1 transition-all duration-300"
                  >
                    Call on: +92 306 6698696
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/923066698696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#fbf349] hover:pl-1 transition-all duration-300"
                  >
                    WA: +92 306 6698696
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:infotexh@gmail.com"
                    className="hover:text-[#fbf349] hover:pl-1 transition-all duration-300"
                  >
                    Email: infotexh@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
