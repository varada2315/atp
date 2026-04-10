import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const services = [
  {
    idx: "01 / 06",
    title: "Voice Solutions",
    description: "Enterprise IP telephony, unified communications, and contact center solutions. We design robust voice networks that ensure seamless collaboration across your organization.",
    tags: ["IP PBX", "Unified Comms", "Contact Center"]
  },
  {
    idx: "02 / 06",
    title: "Data Networking",
    description: "Scalable, high-performance LAN and WAN architectures. From core routing to edge switching, we build networks that handle massive data loads without compromising speed.",
    tags: ["Routing", "Switching", "SD-WAN"]
  },
  {
    idx: "03 / 06",
    title: "Video Surveillance",
    description: "Advanced IP CCTV and intelligent video analytics. Protect your assets with high-definition surveillance systems integrated with centralized monitoring.",
    tags: ["IP CCTV", "Analytics", "NVR/VMS"]
  },
  {
    idx: "04 / 06",
    title: "Security & Automation",
    description: "Comprehensive physical security and building automation. We integrate access control, biometrics, and alarm systems for total environmental control.",
    tags: ["Access Control", "Biometrics", "Automation"]
  },
  {
    idx: "05 / 06",
    title: "Passive Infrastructure",
    description: "The physical foundation of your IT. We provide expert structured cabling, fiber optic deployments, and data center physical infrastructure.",
    tags: ["Structured Cabling", "Fiber Optics", "Racks"]
  },
  {
    idx: "06 / 06",
    title: "Professional Services",
    description: "Beyond deployment, we offer ongoing managed services, annual maintenance contracts (AMC), and expert IT consulting to keep your operations flawless.",
    tags: ["Managed Services", "AMC", "Consulting"]
  }
];

export function Services() {
  return (
    <section 
      id="services" 
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
              className="uppercase flex items-center gap-[10px] mb-[12px] before:content-['02']"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "var(--orange)",
                letterSpacing: "3px",
              }}
            >
              <style>{`
                #services .before\\:content-\\[\\'02\\'\\]::before {
                  color: var(--muted);
                  font-size: 10px;
                }
              `}</style>
              Capabilities
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
              Our Solutions
            </h2>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.08 }} 
          variants={revealVariants}
        >
          {services.map((svc, i) => (
            <div 
              key={i} 
              className="relative overflow-hidden p-[36px_32px] border-b border-r transition-colors duration-300 hover:bg-[var(--panel)] group"
              style={{ borderColor: "var(--line)" }}
            >
              {/* Top border highlight on hover */}
              <div 
                className="absolute top-0 left-0 h-[2px] transition-[right] duration-400 ease-in-out group-hover:right-0 right-[100%]" 
                style={{ background: "var(--orange)" }}
              />

              <div 
                className="mb-[20px]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "var(--muted)",
                  letterSpacing: "1px",
                }}
              >
                {svc.idx}
              </div>

              <h3 
                className="mb-[10px] leading-[1.1]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "22px",
                  color: "var(--white)",
                  letterSpacing: "0.5px",
                }}
              >
                {svc.title}
              </h3>

              <div 
                className="leading-[1.7]"
                style={{ fontSize: "12px", color: "var(--dim)" }}
              >
                {svc.description}
              </div>

              <div className="flex flex-wrap gap-[6px] mt-[18px]">
                {svc.tags.map((tag, j) => (
                  <div 
                    key={j}
                    className="border px-[8px] py-[3px] transition-colors duration-200 group-hover:text-[var(--orange)] group-hover:border-[var(--orange-md)]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "9px",
                      color: "var(--muted)",
                      borderColor: "var(--line)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
