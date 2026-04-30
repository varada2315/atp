import { useState } from "react";
import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

type Partner = {
  name: string;
  logo?: string;
};

const partners: Partner[] = [
  { name: "Alcatel-Lucent Enterprise", logo: "https://logo.clearbit.com/al-enterprise.com" },
  { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
  { name: "HPE", logo: "https://logo.clearbit.com/hpe.com" },
  { name: "Axis Communications", logo: "https://logo.clearbit.com/axis.com" },
  { name: "Legrand", logo: "https://logo.clearbit.com/legrand.com" },
  { name: "Matrix Comsec", logo: "https://logo.clearbit.com/matrixcomsec.com" },
  { name: "Stanley Security", logo: "https://logo.clearbit.com/stanleyblackanddecker.com" },
  { name: "Grandstream", logo: "https://logo.clearbit.com/grandstream.com" },
  { name: "Nexans", logo: "https://logo.clearbit.com/nexans.com" },
  { name: "Milesight", logo: "https://logo.clearbit.com/milesight.com" },
  { name: "Orlaco", logo: "https://logo.clearbit.com/orlaco.com" },
];

export function Partners() {
  const [brokenLogos, setBrokenLogos] = useState<Record<string, boolean>>({});

  return (
    <section 
      id="partners" 
      className="px-[48px] py-[96px] border-b relative box-border"
      style={{ borderColor: "var(--line)", background: "var(--black)" }}
    >
      <div className="max-w-[1280px] mx-auto w-full">
        <motion.div 
          className="flex items-end justify-between mb-[56px]"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.08 }} 
          variants={revealVariants}
        >
          <div>
            <div
              className="uppercase flex items-center gap-[10px] mb-[12px]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "var(--orange)",
                letterSpacing: "3px",
              }}
            >
              Alliances
            </div>
            
            <h2 
              className="m-0 leading-[1]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(40px, 5vw, 64px)",
                color: "var(--white)",
                letterSpacing: "0.5px",
              }}
            >
              Technology Partners
            </h2>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.08 }} 
          variants={revealVariants}
        >
          {partners.map((p, i) => (
            <div 
              key={i} 
              className="text-center p-[18px_14px] border-b border-r transition-colors duration-250 cursor-default group hover:bg-[var(--panel)]"
              style={{ borderColor: "var(--line)" }}
            >
              <div
                className="h-[72px] rounded-[10px] border flex items-center justify-center p-[10px] mb-[12px]"
                style={{
                  borderColor: "var(--line)",
                  background: "rgba(255, 255, 255, 0.96)",
                }}
              >
                {p.logo && !brokenLogos[p.name] ? (
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    loading="lazy"
                    className="max-h-[44px] w-auto max-w-full object-contain"
                    onError={() =>
                      setBrokenLogos((current) => ({ ...current, [p.name]: true }))
                    }
                  />
                ) : (
                  <span
                    className="leading-[1.3]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: "var(--ink)",
                      letterSpacing: "0.4px",
                    }}
                  >
                    {p.name}
                  </span>
                )}
              </div>

              <div
                className="leading-[1.5] transition-colors duration-200 group-hover:text-[var(--orange)]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "var(--muted)",
                  letterSpacing: "0.5px",
                }}
              >
                {p.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
