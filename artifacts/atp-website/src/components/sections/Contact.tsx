import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We will get back to you shortly.",
        className: "bg-primary text-white border-none",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Let's Build Your <span className="text-primary">Future</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">
              Ready to transform your IT infrastructure? Reach out to our experts for a comprehensive consultation tailored to your business needs.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <a href="mailto:feedback.atp@live.com" className="text-muted-foreground hover:text-primary transition-colors">
                    feedback.atp@live.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">
                    Enterprise Tech Park, Phase 2<br />
                    Innovation Hub, Suite 400
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                  <p className="text-muted-foreground">
                    +1 (800) 123-4567<br />
                    Mon-Fri, 9am - 6pm
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 relative group">
                <Input 
                  id="name" 
                  required 
                  className="h-14 bg-background border-border focus:border-primary peer pt-4"
                  placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className="absolute text-muted-foreground transition-all duration-200 
                             peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-primary
                             peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:text-xs
                             left-3 top-4 pointer-events-none"
                >
                  Full Name
                </label>
              </div>
              
              <div className="space-y-2 relative group">
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  className="h-14 bg-background border-border focus:border-primary peer pt-4"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute text-muted-foreground transition-all duration-200 
                             peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-primary
                             peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:text-xs
                             left-3 top-4 pointer-events-none"
                >
                  Email Address
                </label>
              </div>
              
              <div className="space-y-2 relative group">
                <Textarea 
                  id="message" 
                  required 
                  className="min-h-[150px] resize-none bg-background border-border focus:border-primary peer pt-6"
                  placeholder=" "
                />
                <label 
                  htmlFor="message" 
                  className="absolute text-muted-foreground transition-all duration-200 
                             peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-primary
                             peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:text-xs
                             left-3 top-4 pointer-events-none"
                >
                  How can we help?
                </label>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-base font-medium shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,107,0,0.23)] transition-all group"
                disabled={isSubmitting}
                data-testid="btn-submit-contact"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">Sending...</span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
