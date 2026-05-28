import { useState, useEffect } from 'react';
import { Home, Compass, User, Cpu, Briefcase, Mail } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'what-i-do', label: 'Services', icon: <Compass className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Cpu className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'what-i-do', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav 
        className="pointer-events-auto flex items-center gap-2 p-2.5 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.4)] bg-gradient-to-b from-[#0f1112] to-[#1a1d1f] border border-white/10"
      >
        {/* Nav Items */}
        <div className="flex items-center gap-1 sm:gap-2 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300
                ${activeSection === item.id 
                  ? "bg-white/10 text-white" 
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
                }
              `}
            >
              {item.icon}
              <span className="hidden md:inline awb-button-text-transition">
                <span className="awb-button__text">{item.label}</span>
                <span className="awb-button__text">{item.label}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-white/10 mx-1 self-center"></div>

        {/* Action Button & Theme toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollToSection('contact')}
            className={`
              flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300
              ${activeSection === 'contact'
                ? "bg-white text-black"
                : "bg-[#e27500] text-white hover:bg-[#ff8800] shadow-[0_0_10px_rgba(226,117,0,0.3)]"
              }
            `}
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline awb-button-text-transition">
              <span className="awb-button__text">Contact</span>
              <span className="awb-button__text">Contact</span>
            </span>
          </button>

          <div className="flex items-center bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/5">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;