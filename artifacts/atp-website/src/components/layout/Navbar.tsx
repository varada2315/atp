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
      <Link href="/" className="no-underline">
        <div className="relative group">
          <div className="absolute inset-0 bg-[var(--orange)] opacity-20 blur-[12px] rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
          <div className="relative h-[42px] w-[42px] flex items-center justify-center bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-transparent border border-[rgba(255,255,255,0.12)] rounded-[10px] overflow-hidden backdrop-blur-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            <img
              src="/WhatsApp_Image_2026-04-11_at_5.33.01_PM-removebg-preview.png"
              alt="ATP Icon"
              className="h-[150%] w-auto max-w-none object-contain"
              style={{ transform: "translateX(-2px)" }}
            />
          </div>
        </div>
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
        className="border-none px-[22px] py-[9px] font-medium transition-opacity duration-200 hover:opacity-85"
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
