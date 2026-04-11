import { useEffect, useState } from "react";
import { Link } from "wouter";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[48px] h-[64px] border-b transition-all duration-400 ${
        scrolled
          ? "bg-[rgba(8,8,8,0.92)] border-[var(--line)] backdrop-blur-[16px]"
          : "bg-transparent border-transparent"
      }`}
    >
      <Link href="/" className="flex items-center gap-[14px] no-underline">
        <img
          src="/WhatsApp_Image_2026-04-11_at_5.33.01_PM-removebg-preview.png"
          alt="Aditya Technology Partners Logo"
          className="w-[272px] h-[272px] flex-shrink-0"
        />
      </Link>
      
      <ul className="flex items-center gap-[36px] list-none m-0 p-0">
        {["About", "Services", "Verticals", "Clients", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative text-[11px] no-underline transition-colors duration-200 group"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--dim)",
                letterSpacing: "1px",
                cursor: "none",
              }}
            >
              {item}
              <span
                className="absolute bottom-[-2px] left-0 right-[100%] h-[1px] transition-[right] duration-300 ease-in-out group-hover:right-0"
                style={{ background: "var(--orange)" }}
              />
            </a>
          </li>
        ))}
      </ul>

      <button
        className="border-none px-[22px] py-[9px] cursor-none font-medium transition-opacity duration-200 hover:opacity-85"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          color: "var(--black)",
          background: "var(--orange)",
          letterSpacing: "0.5px",
        }}
      >
        Get in Touch
      </button>
    </nav>
  );
}
