'use client';
import React, { useEffect, useState } from 'react';
import { IoMdEye } from "react-icons/io";
import { useRouter } from 'next/navigation';

const Blogs = () => {
  const [data, setData] = useState<any>([]);
  const router = useRouter();

  const activeBlogs = data?.filter((blog: any) => blog.status === "active");

  const handleUpdateView = async (id: string) => {
    try {
      const response = await fetch(`/api/update-views/${id}`, {
        method: "PATCH"
      });
      if (response?.ok) {
        router.push("/blogs/" + id);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsData = await fetch('/api/blogs', {
        cache: "no-store"
      });
      const data = await blogsData.json();
      setData(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="py-8 px-4" id="blogs">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[40px] font-semibold leading-[48px] text-[#292929] text-center mb-5 sm:text-[28px] sm:leading-[36px]">Our Blogs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeBlogs?.map((blog: any, index: number) => (
            <div key={index} className="bg-white shadow-md rounded-[20px] transition-transform duration-300 hover:-translate-y-1 p-6 flex gap-5">
              <img
                src={`/images/blogs/${blog.image}`}
                alt={blog.title}
                className="w-[120px] h-[120px] object-cover rounded-md"
              />
              <div className="flex-1">
                <button
                  onClick={() => handleUpdateView(blog._id)}
                  className="text-[22px] font-semibold leading-[32px] text-[#292929] text-left"
                >
                  {blog.title}
                </button>
                <p className="text-[16px] font-normal leading-[26px] text-[#292929] mt-2">
                  {blog?.shortDescription?.length > 30
                    ? blog?.shortDescription?.slice(0, 30) + "..."
                    : blog?.shortDescription}
                </p>
                <small className="text-[12px] font-normal leading-[18px] text-[#292929] flex items-center gap-1 mt-1">
                  <IoMdEye className="w-[18px] h-[18px]" /> {blog.views} views
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
