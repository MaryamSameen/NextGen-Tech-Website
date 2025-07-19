"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header({ user, customClass = "" }: any) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isNoTransparent = customClass.includes("no-transparent");
  console.log("isNoTransparent", isNoTransparent);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setHidden(currentY > lastScrollY && currentY > 100);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[102] transition-all duration-300 ${
          isNoTransparent ? "!bg-[#4e2fa9] mb-[30px]" : ""
        } ${
          scrolled
            ? "bg-white shadow-md text-black [&_a]:text-black [&_.hamburger_div]:bg-black"
            : "bg-transparent"
        } ${hidden ? "-translate-y-full" : ""}`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div
            onClick={handleLogoClick}
            className="text-xl font-semibold cursor-pointer text-[#fbf349]"
          >
            NextGen Tech
          </div>

          <ul className="hidden md:flex gap-6 text-white">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#blogs" className="hover:underline">Blogs</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>

          {user ? (
            <div className="flex items-center gap-4">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      height: "40px",
                      width: "40px",
                    },
                  },
                }}
              />
              {user?.publicMetadata?.role === "admin" && (
                <Link href="/admin-panel" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                  Admin Panel
                </Link>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <Link href="/sign-in" className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                Login
              </Link>
              <Link href="/sign-up" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                Signup
              </Link>
            </div>
          )}

          <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={toggleMobileMenu}>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[101]"
          onClick={toggleMobileMenu}
        ></div>
      )}

      <ul
        className={`fixed top-0 right-0 h-full w-64 bg-white z-[102] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col gap-6 p-6 shadow-lg md:hidden`}
      >
        <li onClick={toggleMobileMenu}><a href="#home">Home</a></li>
        <li onClick={toggleMobileMenu}><a href="#about">About</a></li>
        <li onClick={toggleMobileMenu}><a href="#services">Services</a></li>
        <li onClick={toggleMobileMenu}><a href="#blogs">Blog</a></li>
        <li onClick={toggleMobileMenu}><a href="#contact">Contact</a></li>
      </ul>
    </>
  );
}
