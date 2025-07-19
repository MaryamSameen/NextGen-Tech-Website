import React from 'react';

const statusCard = [
  { title: "5k+", subtitle: "Active users" },
  { title: "500+", subtitle: "downloads" },
  { title: "4.9", subtitle: "Satisfaction" },
  { title: "5.2", subtitle: "Versions" }
];

const StatusCards = () => {
  return (
    <div className="max-w-4xl mx-auto my-24 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {statusCard.map((data, index) => {
          // Define dynamic styles
          let bgColor = "bg-[#dff5ff]";
          let textColor = "text-[#21bcff]";

          if (index === 1) {
            bgColor = "bg-[#fff3eb]";
            textColor = "text-[#f99c5e]";
          } else if (index === 2) {
            bgColor = "bg-[#dffff6]";
            textColor = "text-[#2dcea5]";
          } else if (index === 3) {
            bgColor = "bg-[#e9f3ff]";
            textColor = "text-[#0472fa]";
          }

          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center ${bgColor} rounded-2xl p-12`}
            >
              <h2 className={`font-medium text-[60px] leading-[64px] mb-1 ${textColor} sm:text-[38px]`}>
                {data.title}
              </h2>
              <p className="text-[20px] leading-[28px] font-normal capitalize text-[#292929]">
                {data.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusCards;
