import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function About() {
  return (
    <section 
      id="about" 
      className="px-[48px] py-[96px] border-b relative box-border"
      style={{ borderColor: "var(--line)", background: "var(--black)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start max-w-[1280px] mx-auto w-full">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.08 }} 
          variants={revealVariants}
        >
          <div 
            className="uppercase flex items-center gap-[10px] mb-[12px] before:content-['01']"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "var(--orange)",
              letterSpacing: "3px",
            }}
          >
            <style>{`
              #about .before\\:content-\\[\\'01\\'\\]::before {
                color: var(--muted);
                font-size: 10px;
              }
            `}</style>
            About
          </div>
          
          <h2 
            className="mb-[56px] leading-[1]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              color: "var(--white)",
              letterSpacing: "0.5px",
            }}
          >
            Built by engineers. Run with passion.
          </h2>
          
          <div 
            className="font-light leading-[1.9] space-y-[20px]"
            style={{ fontSize: "15px", color: "var(--mid)" }}
          >
            <p className="m-0">
              Founded in 2004, Aditya Technology Partners (ATP) began with a clear mission: 
              to simplify the complex world of enterprise IT infrastructure. What started as a 
              small team of network engineers has grown into a trusted technology partner for 
              some of India's most prominent organizations.
            </p>
            <p className="m-0">
              We specialize in designing, deploying, and maintaining <strong>mission-critical IP voice, 
              data, and video networks</strong>. Our approach is fundamentally different — we don't just sell 
              equipment; we engineer solutions that solve real business problems.
            </p>
            <p className="m-0">
              With deep technical expertise and strong partnerships with global OEM leaders, 
              we deliver resilient, scalable, and secure infrastructure that empowers your business to thrive.
            </p>
          </div>

          <div 
            className="mt-[36px] flex items-center gap-[16px] border p-[20px_24px]"
            style={{ borderColor: "var(--line)" }}
          >
            <div 
              className="w-[44px] h-[44px] flex-shrink-0 flex items-center justify-center border"
              style={{
                background: "var(--orange-lo)",
                borderColor: "var(--orange-md)",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "14px",
                color: "var(--orange)",
                letterSpacing: "1px",
              }}
            >
              ACSE
            </div>
            <div 
              className="leading-[1.5]"
              style={{ fontSize: "12px", color: "var(--dim)" }}
            >
              <strong className="block font-medium mb-[2px]" style={{ color: "var(--silver)", fontSize: "13px" }}>
                Certified Engineering Team
              </strong>
              Alcatel-Lucent Certified System Experts
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="pt-[8px] flex flex-col gap-0"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.08 }} 
          variants={revealVariants}
        >
          {[
            { num: "01", title: "Engineering First", desc: "Our solutions are designed by certified engineers, not sales reps. We build for performance, not just to spec." },
            { num: "02", title: "Vendor Agnostic", desc: "We partner with the best OEMs, but our loyalty is to the solution. We recommend what works best for your specific use case." },
            { num: "03", title: "Turnkey Execution", desc: "From physical cabling to logical configuration and ongoing managed services, we own the entire lifecycle." },
            { num: "04", title: "Uncompromising Quality", desc: "In mission-critical infrastructure, 'good enough' isn't. We adhere strictly to global standards for deployment." }
          ].map((pillar, i) => (
            <div 
              key={i} 
              className="flex items-start gap-[20px] py-[24px] border-b first:border-t"
              style={{ borderColor: "var(--line)" }}
            >
              <div 
                className="pt-[3px] min-w-[24px]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "var(--muted)",
                }}
              >
                {pillar.num}
              </div>
              <div>
                <div 
                  className="font-medium mb-[4px]"
                  style={{
                    fontSize: "14px",
                    color: "var(--silver)",
                    letterSpacing: "0.2px",
                  }}
                >
                  {pillar.title}
                </div>
                <div 
                  className="leading-[1.6]"
                  style={{ fontSize: "13px", color: "var(--dim)" }}
                >
                  {pillar.desc}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
