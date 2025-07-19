"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaHome, FaRegImage } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { IoIosMenu } from "react-icons/io";
import { TiMessages } from "react-icons/ti";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleShowMenu = () => setShow(!show);

  return (
    <div className="flex justify-between items-center px-6 py-5 bg-[#4e2fa9]">
      <div className="text-[#fbf349] text-[30px] font-semibold leading-9">
        NextGen Tech
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:block">
          <UserButton />
        </div>

        <div className="block sm:hidden">
          <button onClick={handleShowMenu}>
            <IoIosMenu size={30} className="text-white" />
          </button>

          {show && (
            <div className="fixed top-0 left-0 w-full h-[300px] bg-[#4e2fa9cc] px-5 py-4 mt-[70px] z-[1000] transition-transform duration-300 ease-in-out">
              <ul className="flex flex-col items-center gap-5">
                <li>
                  <Link
                    href="/admin-panel"
                    className="flex items-center gap-3 text-white text-[18px] font-medium hover:underline"
                  >
                    <FaHome /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin-panel"
                    className="flex items-center gap-3 text-white text-[18px] font-medium hover:underline"
                  >
                    <CiMail /> Responses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin-panel"
                    className="flex items-center gap-3 text-white text-[18px] font-medium hover:underline"
                  >
                    <FaRegMessage /> Add New Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin-panel"
                    className="flex items-center gap-3 text-white text-[18px] font-medium hover:underline"
                  >
                    <TiMessages /> View Blogs
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleShowMenu}
                    className="p-2 flex justify-center items-center hover:bg-[#4e2fa9] rounded-full text-white"
                  >
                    <ImCross />
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
