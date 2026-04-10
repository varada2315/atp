import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const clients = [
  "Visakha Container Terminal",
  "Vizag Seaport Private Ltd",
  "Visakha Container Terminal CFS",
  "LV Prasad Eye Institute",
  "Lansum Estates LLP",
  "Radisson Blu",
  "Tessolve Semiconductor",
  "ALBA",
  "Bothra Group",
  "MK Builders Visakhapatnam",
  "MVV Builders",
  "GCON"
];

export function Clients() {
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
              className="uppercase flex items-center gap-[10px] mb-[12px] before:content-['04']"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "var(--orange)",
                letterSpacing: "3px",
              }}
            >
              <style>{`
                #clients .before\\:content-\\[\\'04\\'\\]::before {
                  color: var(--muted);
                  font-size: 10px;
                }
              `}</style>
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
              className="text-center p-[30px_20px] border-b border-r transition-colors duration-250 cursor-default group hover:bg-[var(--panel)]"
              style={{ borderColor: "var(--line)" }}
            >
              <div 
                className="font-normal leading-[1.4] transition-colors duration-200 group-hover:text-[var(--white)]"
                style={{
                  fontSize: "12px",
                  color: "var(--dim)",
                }}
              >
                {c}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
