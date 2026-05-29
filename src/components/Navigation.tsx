import { useState, useEffect } from 'react';
import { Home, Compass, User, Cpu, Briefcase, Mail, Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false); // Close menu after navigation on mobile
    }
  };

  return (
    <>
      <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav 
          className="pointer-events-auto flex items-center gap-1 sm:gap-2 p-2 sm:p-2.5 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.4)] bg-gradient-to-b from-[#0f1112] to-[#1a1d1f] border border-white/10 w-full max-w-md md:max-w-full md:w-auto"
        >
          {/* Hamburger Menu Button (mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-all text-white/60 hover:text-white flex-shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2 px-2">
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
                <span className="hidden lg:inline awb-button-text-transition">
                  <span className="awb-button__text">{item.label}</span>
                  <span className="awb-button__text">{item.label}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="hidden md:block w-px h-6 bg-white/10 mx-1 self-center"></div>

          {/* Action Button & Theme toggle */}
          <div className="flex items-center gap-1 sm:gap-2 ml-auto sm:ml-0 flex-shrink-0">
            <button
              onClick={() => scrollToSection('contact')}
              className={`
                flex items-center gap-1 sm:gap-1.5 rounded-full px-2 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300
                ${activeSection === 'contact'
                  ? "bg-white text-black"
                  : "bg-[#e27500] text-white hover:bg-[#ff8800] shadow-[0_0_10px_rgba(226,117,0,0.3)]"
                }
              `}
            >
              <Mail className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed top-20 left-4 right-4 z-40 md:hidden bg-gradient-to-b from-[#0f1112] to-[#1a1d1f] border border-white/10 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.4)] p-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300
                  ${activeSection === item.id 
                    ? "bg-white/10 text-white" 
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;