import { useState } from "react";
import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

type Client = {
  name: string;
  logo?: string;
};

const clients: Client[] = [
  { name: "Visakha Container Terminal", logo: "/client-logos/visakha-container-terminal.jpg" },
  { name: "Vizag Seaport Private Ltd", logo: "/client-logos/vizag-seaport.png" },
  { name: "Visakha Container Terminal CFS", logo: "/client-logos/visakha-container-terminal.jpg" },
  { name: "LV Prasad Eye Institute", logo: "/client-logos/lvpei.png" },
  { name: "Lansum Estates LLP", logo: "/client-logos/lansum-properties.svg" },
  { name: "Radisson Blu", logo: "/client-logos/radisson-blu.png" },
  { name: "Tessolve Semiconductor", logo: "/client-logos/tessolve.svg" },
  { name: "ALBA", logo: "/client-logos/alba.png" },
  { name: "Bothra Group", logo: "/client-logos/bothra-group.png" },
  { name: "Imperial Developers", logo: "/client-logos/imperial-developers.png" },
  { name: "MVV Builders", logo: "/client-logos/mvv-builders.png" },
  { name: "GCON Group", logo: "/client-logos/gcon.png" },
];

export function Clients() {
  const [brokenLogos, setBrokenLogos] = useState<Record<string, boolean>>({});

  return (
    <section 
      id="clients" 
      className="px-[48px] py-[96px] border-b relative box-border"
      style={{ borderColor: "var(--line)", background: "var(--ink)" }}
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
              Trust
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
              Selected Clients
            </h2>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.08 }} 
          variants={revealVariants}
        >
          {clients.map((c, i) => (
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
                {c.logo && !brokenLogos[c.name] ? (
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    className="max-h-[44px] w-auto max-w-full object-contain"
                    onError={() =>
                      setBrokenLogos((current) => ({ ...current, [c.name]: true }))
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
                    {c.name}
                  </span>
                )}
              </div>

              <div
                className="font-normal leading-[1.4] transition-colors duration-200 group-hover:text-[var(--white)]"
                style={{
                  fontSize: "12px",
                  color: "var(--dim)",
                }}
              >
                {c.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
