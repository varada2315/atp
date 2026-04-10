import { motion } from "framer-motion";

const placeholderLogos = [
  "Cisco", "Fortinet", "HP Enterprise", "Dell", "Juniper Networks", "Palo Alto", "Avaya", "Microsoft", "VMware"
];

export function Partners() {
  return (
    <section className="py-16 bg-muted/50 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Trusted Technology Partners & Clients</h3>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        {/* Left/Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/50 to-transparent z-10" />
        
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap min-w-max items-center">
          {[...placeholderLogos, ...placeholderLogos].map((logo, idx) => (
            <div 
              key={idx} 
              className="mx-12 sm:mx-16 text-xl sm:text-2xl font-bold text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-default uppercase tracking-tight select-none"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
