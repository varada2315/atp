import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const partners = [
  "Alcatel-Lucent",
  "Cisco",
  "HP",
  "Axis Communications",
  "Legrand",
  "Matrix Telecom",
  "Stanley Security",
  "Grandstream",
  "Nexans",
  "Milesight",
  "Orlaco Camera",
  "+ More"
];

export function Partners() {
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
              className="text-center p-[24px_16px] border-b border-r transition-colors duration-250 cursor-default group hover:bg-[var(--panel)]"
              style={{ borderColor: "var(--line)" }}
            >
              <div 
                className="leading-[1.5] transition-colors duration-200 group-hover:text-[var(--orange)]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "var(--muted)",
                  letterSpacing: "0.5px",
                }}
              >
                {p}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
