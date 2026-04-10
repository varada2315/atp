import { motion } from "framer-motion";
import heroBg from "@/assets/hero-datacenter.png";

export function Hero() {
  return (
    <div 
      className="relative min-h-[100vh] flex flex-col justify-end overflow-hidden pb-[72px] px-[48px] box-border"
      style={{
        backgroundColor: "var(--black)",
      }}
    >
      <div 
        className="absolute w-[55vw] h-[130vh] border-l z-0 overflow-hidden"
        style={{
          top: "-10%",
          right: "-5%",
          transform: "skewX(-8deg)",
          borderColor: "var(--line)",
        }}
      >
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ opacity: 0.18, transform: "skewX(8deg) scale(1.15)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--panel) 0%, transparent 60%)" }} />
      </div>
      <div 
        className="absolute top-0 h-full w-[1px] z-[1]"
        style={{
          right: "38%",
          background: "linear-gradient(to bottom, transparent 0%, var(--orange) 40%, var(--orange) 60%, transparent 100%)",
          opacity: 0.25,
        }}
      />

      <div className="relative z-[2] grid grid-cols-1 md:grid-cols-2 gap-[80px] items-end max-w-[1280px] w-full mx-auto">
        <div>
          <div 
            className="flex items-center gap-[12px] uppercase mb-[28px] before:content-[''] before:w-[32px] before:h-[1px] before:bg-[var(--orange)]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "var(--orange)",
              letterSpacing: "2px",
            }}
          >
            IT Infrastructure Solutions
          </div>
          
          <h1 
            className="m-0 mb-[8px] leading-[0.9]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(80px, 10vw, 140px)",
              letterSpacing: "-1px",
              color: "var(--white)",
            }}
          >
            Simplifying
            <span className="block" style={{ color: "var(--orange)" }}>IT.</span>
            <span 
              className="block"
              style={{
                color: "var(--line)",
                WebkitTextStroke: "1px var(--muted)",
                fontSize: "clamp(60px, 8vw, 108px)",
              }}
            >
              Seriously.
            </span>
          </h1>

          <p 
            className="max-w-[360px] m-0 my-[32px] mb-[40px] font-light leading-[1.8]"
            style={{
              fontSize: "15px",
              color: "var(--dim)",
            }}
          >
            18+ years building the networks, voice systems, and security infrastructure that India's enterprises run on.
          </p>

          <div className="flex items-center gap-[14px]">
            <a 
              href="#services" 
              className="inline-flex items-center gap-[10px] border-none no-underline transition-transform duration-200 hover:-translate-y-[2px]"
              style={{
                background: "var(--orange)",
                color: "#000",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                padding: "14px 32px",
                letterSpacing: "0.3px",
                cursor: "none",
              }}
            >
              Explore Solutions →
            </a>
            <a 
              href="#clients" 
              className="inline-flex items-center gap-[8px] no-underline pb-[2px] border-b transition-colors duration-200 hover:text-[var(--white)] hover:border-[var(--mid)]"
              style={{
                color: "var(--mid)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "1px",
                borderColor: "var(--line)",
                cursor: "none",
              }}
            >
              View Clients
            </a>
          </div>
        </div>

        <div className="pb-[8px] hidden md:block">
          {[
            { num: "18", plus: "+", label: "Years of experience" },
            { num: "50", plus: "+", label: "Landmark clients" },
            { num: "10", plus: "+", label: "Industries served" },
          ].map((stat, i) => (
            <div 
              key={i} 
              className="pl-[32px] mb-[28px] border-l last:mb-0"
              style={{ borderColor: "var(--line)" }}
            >
              <div 
                className="leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "52px",
                  color: "var(--white)",
                  letterSpacing: "1px",
                }}
              >
                {stat.num}<span style={{ color: "var(--orange)" }}>{stat.plus}</span>
              </div>
              <div 
                className="uppercase mt-[2px]"
                style={{
                  fontSize: "11px",
                  color: "var(--dim)",
                  letterSpacing: "1.5px",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div 
        className="absolute bottom-0 left-0 right-0 overflow-hidden h-[40px] flex items-center z-[2] border-t"
        style={{
          borderColor: "var(--line)",
          background: "var(--black)",
        }}
      >
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex">
              {["IP Telephony", "Network Security", "Video Surveillance", "Structured Cabling", "Data Centers", "Unified Communications", "Wireless Networks", "Fiber Optics", "Fleet Management"].map((item, j) => (
                <div key={`${i}-${j}`} className="flex items-center">
                  <span 
                    className="uppercase px-[32px] border-r"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: "var(--muted)",
                      letterSpacing: "2px",
                      borderColor: "var(--line)",
                    }}
                  >
                    {item}
                  </span>
                  <span 
                    className="uppercase px-[32px] border-r"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: "var(--orange)",
                      letterSpacing: "2px",
                      borderColor: "var(--line)",
                    }}
                  >
                    —
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
