import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const verticals = [
  { num: "01", name: "Corporate & Enterprise" },
  { num: "02", name: "Healthcare & Hospitals" },
  { num: "03", name: "Education & Universities" },
  { num: "04", name: "Hospitality & Hotels" },
  { num: "05", name: "Manufacturing & Industrial" },
  { num: "06", name: "Government & Public Sector" },
  { num: "07", name: "Ports & Logistics" },
  { num: "08", name: "Real Estate & Construction" },
];

export function Verticals() {
  return (
    <section 
      id="verticals" 
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
              className="uppercase flex items-center gap-[10px] mb-[12px] before:content-['03']"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "var(--orange)",
                letterSpacing: "3px",
              }}
            >
              <style>{`
                #verticals .before\\:content-\\[\\'03\\'\\]::before {
                  color: var(--muted);
                  font-size: 10px;
                }
              `}</style>
              Sectors
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
              Industries We Empower
            </h2>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-0"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.08 }} 
          variants={revealVariants}
        >
          {verticals.map((v, i) => {
            const isOdd = i % 2 === 0; // 0-indexed, so 0 is first (odd in UI)
            return (
              <div 
                key={i} 
                className="flex items-center gap-[20px] py-[20px] border-b transition-[padding-left] duration-300 group hover:pl-[12px]"
                style={{ 
                  borderColor: "var(--line)",
                  paddingRight: isOdd ? "48px" : "0",
                  paddingLeft: !isOdd ? "48px" : "0",
                  borderRight: isOdd ? "1px solid var(--line)" : "none",
                }}
              >
                <div 
                  className="min-w-[20px]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  {v.num}
                </div>
                <div 
                  className="w-[20px] h-[1px] flex-shrink-0 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: "var(--orange)" }}
                />
                <div 
                  className="font-normal transition-colors duration-200 group-hover:text-[var(--white)]"
                  style={{
                    fontSize: "14px",
                    color: "var(--silver)",
                    letterSpacing: "0.2px",
                  }}
                >
                  {v.name}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
