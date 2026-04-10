import { motion } from "framer-motion";
import { PhoneCall, Network, Video, Server, ShieldCheck, UserCog } from "lucide-react";

const services = [
  {
    title: "Voice Solutions",
    description: "Enterprise-grade IP PBX, IVR systems, and Call Center infrastructure designed for crystal-clear communication and reliability.",
    icon: PhoneCall,
  },
  {
    title: "Data Networking",
    description: "Robust LAN/WAN architectures, MPLS networks, and advanced security protocols to keep your business connected and protected.",
    icon: Network,
  },
  {
    title: "Video Surveillance",
    description: "State-of-the-art CCTV, ANPR, and intelligent monitoring systems for comprehensive physical security.",
    icon: Video,
  },
  {
    title: "Infrastructure",
    description: "High-performance structured cabling and fiber optic networks providing the backbone for modern digital enterprises.",
    icon: Server,
  },
  {
    title: "Automation & Security",
    description: "Smart systems including RFID, biometric access control, and integrated building automation.",
    icon: ShieldCheck,
  },
  {
    title: "IT Consulting",
    description: "Strategic advisory and IT staffing services to align your technology investments with business objectives.",
    icon: UserCog,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide end-to-end technology solutions tailored to modernize your operations, enhance security, and drive unprecedented efficiency.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 min-h-[280px] flex flex-col overflow-hidden"
              data-testid={`card-service-${index}`}
            >
              {/* Top border highlight on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
