"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState<any>(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/dashboard-data", {
        cache: "no-store",
      });
      const res = await data.json();
      setData(res);
    };
    fetchData();
  }, []);
  const cards = [
    {
      title: "Responses",
      count: data?.messagesCount || 0, // Replace with dynamic value later
      route: "/admin-panel/messages",
    },
    {
      title: "Blogs",
      count: data?.blogsCount || 0, // Replace with dynamic value later
      route: "/admin-panel/blogs",
    },
  ];
  return (
    <div className="p-8 w-full max-w-full">
      <h1 className="text-[28px] mb-6 text-[#333]">Dashboard</h1>
      <div className="flex flex-wrap gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => router.push(card.route)}
            className="bg-white border border-[#ddd] rounded-[12px] p-6 cursor-pointer transition-all duration-200 ease-in-out text-center max-w-[250px] w-full hover:-translate-y-1 hover:shadow-md hover:border-[#4e2fa9]"
          >
            <h2 className="text-[18px] font-semibold mb-2 text-[#4e2fa9]">
              {card.title}
            </h2>
            <p className="text-[32px] font-bold text-[#4e2fa9]">{card.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
