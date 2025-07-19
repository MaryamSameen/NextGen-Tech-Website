"use client";
import React from 'react';
import Image from 'next/image';

const LoginComp = () => {
  return (
    <div className="relative mb-10 py-[140px] px-10 bg-[#4e2fa9] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <Image
        src="/images/cta-line.png"
        alt="line 1"
        fill
        className="!w-auto !h-auto max-w-full absolute left-[5%] top-1/2 -translate-y-1/2 hidden sm:block"
        style={{ objectFit: "contain" }}
      />
      <Image
        src="/images/cta-line2.png"
        alt="line 2"
        fill
        className="!w-auto !h-auto max-w-full absolute right-[5%] top-1/2 -translate-y-1/2 hidden sm:block"
        style={{ objectFit: "contain" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl w-full">
        <h2 className="text-white text-[46px] leading-[50px] font-medium mb-11 sm:text-[26px] sm:leading-8">
          Start Using Analyze To Grow Your Reach, <br />
          Engagement and Sales.
        </h2>

        <div className="flex justify-center gap-5 flex-wrap">
          <a href="" className="anchor-1">
            <button className="py-[9px] px-[22px] text-[#4e2fa9] bg-[#fbf349] rounded-lg font-medium text-sm leading-[26px] hover:bg-[#5dd9c1] hover:text-white transition-all duration-500">
              Login account
            </button>
          </a>
          <a href="" className="anchor-2">
            <button className="py-[9px] px-[22px] text-white border border-[#5dd9c1] rounded-lg font-medium text-sm leading-[26px] bg-transparent hover:bg-[#5dd9c1] hover:text-white transition-all duration-500">
              Try as Guest
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
