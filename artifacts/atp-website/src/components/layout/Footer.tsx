import { Link } from "wouter";
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl tracking-tighter">
                ATP
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Aditya Technology<br />Partners
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Simplifying IT. Powering Business Growth. Delivering cutting-edge enterprise infrastructure and networking solutions for over 18 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Services', 'Industries', 'Why Choose Us', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {['Voice Solutions', 'Data Networking', 'Video Surveillance', 'IT Infrastructure', 'Automation & Security', 'IT Consulting'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Enterprise Tech Park, Phase 2<br />Innovation Hub, Suite 400</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:feedback.atp@live.com" className="hover:text-primary transition-colors">feedback.atp@live.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Aditya Technology Partners. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
