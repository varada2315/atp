import { motion } from "framer-motion";
import { useState } from "react";

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("feedback.atp@live.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="px-[48px] py-[120px] relative box-border flex flex-col items-center text-center"
      style={{ background: "var(--black)" }}
    >
      <motion.div 
        className="max-w-[1280px] mx-auto w-full flex flex-col items-center"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.08 }} 
        variants={revealVariants}
      >
        <div 
          className="uppercase mb-[20px]"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            color: "var(--orange)",
            letterSpacing: "3px",
          }}
        >
          Get in touch
        </div>
        
        <h2 
          className="m-0 mb-[8px] leading-[0.95]"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(52px, 8vw, 100px)",
            color: "var(--white)",
            letterSpacing: "-1px",
          }}
        >
          Let's build
          <span 
            className="block"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px var(--muted)",
            }}
          >
            something.
          </span>
        </h2>

        <button 
          onClick={handleCopy}
          className={`bg-transparent m-[48px_0_32px] p-[12px_28px] border cursor-none transition-colors duration-200 ${copied ? 'text-[var(--orange)] border-[var(--orange)]' : 'text-[var(--dim)] border-[var(--line)] hover:text-[var(--orange)] hover:border-[var(--orange-md)]'}`}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            letterSpacing: "0.5px",
          }}
        >
          {copied ? "Copied ✓" : "feedback.atp@live.com"}
        </button>

        <a 
          href="mailto:feedback.atp@live.com" 
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
          Send a Message →
        </a>
      </motion.div>
    </section>
  );
}
