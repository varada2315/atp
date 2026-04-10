import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Network } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute right-0 top-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] opacity-50" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Enterprise IT Solutions
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Simplifying IT.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Powering Business Growth.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              We deliver mission-critical IT infrastructure, networking, and security solutions. Trusted by industry leaders for over 18 years to build resilient, scalable enterprise technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-base shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,107,0,0.23)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                onClick={() => scrollTo('#contact')}
                data-testid="btn-hero-consultation"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                Get Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base border-border hover:bg-muted transition-all duration-300 hover:-translate-y-1"
                onClick={() => scrollTo('#services')}
                data-testid="btn-hero-services"
              >
                Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Secure
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" />
                Scalable
              </div>
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5 text-primary" />
                Connected
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            {/* Abstract Tech Illustration */}
            <div className="relative w-full aspect-square max-w-[600px] ml-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-primary/20 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-primary/30 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-background rounded-2xl shadow-2xl border border-border flex items-center justify-center z-20">
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Server className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Floating Nodes */}
              {[
                { top: '20%', left: '20%', icon: Network, delay: 0 },
                { top: '20%', right: '20%', icon: Shield, delay: 1 },
                { bottom: '20%', left: '20%', icon: Server, delay: 2 },
                { bottom: '20%', right: '20%', icon: Network, delay: 3 },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: node.delay,
                    ease: "easeInOut"
                  }}
                  className="absolute w-16 h-16 bg-background rounded-xl shadow-xl border border-border flex items-center justify-center z-20"
                  style={node as any}
                >
                  <node.icon className="w-6 h-6 text-primary" />
                </motion.div>
              ))}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 50 50 L 20 20 M 50 50 L 80 20 M 50 50 L 20 80 M 50 50 L 80 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
