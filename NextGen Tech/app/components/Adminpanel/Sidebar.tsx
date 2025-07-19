import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";

export default function Sidebar() {
  return (
    <div className="p-5 bg-[#4e2fa980] max-w-full w-[280px] h-screen hidden md:block">
      <ul className="list-none py-5">
        <li className="mb-5">
          <Link
            href="/admin-panel"
            className="text-white text-[18px] font-medium leading-5 no-underline flex items-center gap-5 hover:underline"
          >
            <FaHome /> Dashboard
          </Link>
        </li>
        <li className="mb-5">
          <Link
            href="/admin-panel/messages"
            className="text-white text-[18px] font-medium leading-5 no-underline flex items-center gap-5 hover:underline"
          >
            <CiMail /> Responses
          </Link>
        </li>
        <li className="mb-5">
          <Link
            href="/admin-panel/add-blog"
            className="text-white text-[18px] font-medium leading-5 no-underline flex items-center gap-5 hover:underline"
          >
            <FaRegMessage /> Add New Blog
          </Link>
        </li>
        <li>
          <Link
            href="/admin-panel/blogs"
            className="text-white text-[18px] font-medium leading-5 no-underline flex items-center gap-5 hover:underline"
          >
            <TiMessages /> View Blogs
          </Link>
        </li>
      </ul>
    </div>
  );
}
