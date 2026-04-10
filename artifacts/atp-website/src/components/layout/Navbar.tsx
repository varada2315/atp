import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Why Us", href: "#why-us" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-home">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl tracking-tighter group-hover:shadow-[0_0_15px_rgba(255,107,0,0.5)] transition-all">
              ATP
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? "text-foreground" : "text-foreground"}`}>
              Aditya Technology Partners
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-muted-foreground" : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-primary hover:bg-primary/90 text-white shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,107,0,0.23)] hover:-translate-y-0.5 transition-all duration-200"
              onClick={(e) => {
                const ev = e as unknown as React.MouseEvent<HTMLAnchorElement>;
                handleNavClick(ev, "#contact");
              }}
              data-testid="button-nav-contact"
            >
              Get Consultation
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="w-full mt-4 bg-primary text-white"
                onClick={(e) => {
                  const ev = e as unknown as React.MouseEvent<HTMLAnchorElement>;
                  handleNavClick(ev, "#contact");
                }}
              >
                Get Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
