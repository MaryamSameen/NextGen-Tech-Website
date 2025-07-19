'use client';
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  { name: "Muhammad Abdullah", role: "UX Designer", img: "/images/member2.png" },
  { name: "Maryam Sameen", role: "Head of Marketting", img: "/images/member1.png" },
  { name: "Muhammad Kaif", role: "SEO Specialist", img: "/images/member4.png" },
  { name: "Amy Jackson", role: "Creative Director", img: "/images/member3.png" },
  { name: "Eva Green", role: "Creative developer", img: "/images/member6.png" },
  { name: "Frank White", role: "Managing Director", img: "/images/member7.png" },
];

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold text-[#333] mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 flex justify-center">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover w-[120px] h-[120px]"
                />
              </div>
              <h3 className="text-lg font-medium text-[#292929] mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-[#666] mb-3">{member.role}</p>
              <div className="flex justify-center gap-4 text-[#707070] text-base">
                {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                  <Icon
                    key={i}
                    className="cursor-pointer transition-colors duration-300 hover:text-blue-500"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
