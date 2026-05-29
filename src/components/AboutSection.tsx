import { useState } from 'react';
import { Eye, X, Github, Linkedin, Mail, MapPin, Cpu, Award } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';

/* ── PCB Chip Pin Decorations ───────────────────────────────────────── */
const ChipPins = () => (
  <>
    <div className="pcb-chip-pin-container-left">
      <div className="pcb-chip-pin" />
      <div className="pcb-chip-pin" />
      <div className="pcb-chip-pin" />
      <div className="pcb-chip-pin" />
      <div className="pcb-chip-pin" />
    </div>
    <div className="pcb-chip-pin-container-right">
      <div className="pcb-chip-pin" />
      <div className="pcb-chip-pin" />
      <div className="pcb-chip-pin" />
      <div className="pcb-chip-pin" />
      <div className="pcb-chip-pin" />
    </div>
  </>
);

/* ── Data ──────────────────────────────────────────────────────────── */
const timelineEntries = [
  {
    year: '2022 - 2026',
    title: 'BS in Computer Engineering',
    subtitle: 'San Sebastian College – Recoletos de Cavite',
    highlight: "Dean's Lister",
    active: true,
  },
];

const certificates = [
  {
    id: 1,
    title: 'Introduction to Frontend Development',
    issuer: 'Simplilearn',
    year: '2025',
    image: '/E-Certificate (Introduction to Frontend Development).jpg',
  },
];

/* ── Main component ────────────────────────────────────────────────── */
const AboutSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);
  const headerRef = useScrollReveal({ threshold: 0.2 });

  // Framer Motion Variants for Staggered PCB Entrance
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
        staggerChildren: 0.15
      }
    }
  };

  const chipVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-section-bg dashboard-dot-grid border-t border-border/50 relative z-40">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* ── Section header ──────────────────────────────────── */}
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="section-reveal mb-12 sm:mb-16 md:mb-24">
          <span className="text-[#e27500] text-xs font-bold uppercase tracking-widest block mb-3">About me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tighter text-foreground">
            My Journey
          </h2>
        </div>

        {/* ── Dashboard grid ──────────────────────────────────── */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 xl:col-span-7">
            
            {/* ── Unified PCB Container ────────────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="pcb-board p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 relative"
            >
              {/* Mounting Holes */}
              <div className="pcb-mounting-hole top-left" />
              <div className="pcb-mounting-hole top-right" />
              <div className="pcb-mounting-hole bottom-left" />
              <div className="pcb-mounting-hole bottom-right" />

              {/* Responsive Circuit Traces on left/right borders */}
              <div className="absolute left-3 top-10 bottom-10 w-6 pointer-events-none opacity-25 dark:opacity-40 select-none">
                <svg className="w-full h-full" viewBox="0 0 24 800" preserveAspectRatio="none">
                  <path d="M 12,0 L 12,200 L 2,215 L 2,450 L 22,475 L 22,800" fill="none" className="pcb-trace-line" />
                  <path d="M 12,0 L 12,200 L 2,215 L 2,450 L 22,475 L 22,800" fill="none" className="pcb-trace-pulse" />
                </svg>
              </div>
              <div className="absolute right-3 top-10 bottom-10 w-6 pointer-events-none opacity-25 dark:opacity-40 select-none">
                <svg className="w-full h-full" viewBox="0 0 24 800" preserveAspectRatio="none">
                  <path d="M 12,0 L 12,150 L 22,165 L 22,500 L 2,525 L 2,800" fill="none" className="pcb-trace-line" />
                  <path d="M 12,0 L 12,150 L 22,165 L 22,500 L 2,525 L 2,800" fill="none" className="pcb-trace-pulse" />
                </svg>
              </div>

              {/* PCB Silkscreen Annotations & Decorative Elements */}
              <div className="absolute top-4 left-10 sm:left-12 pcb-silkscreen font-mono text-[8px] sm:text-[9px]">
                MAIN_BOARD // COMP_ENG_REV_2.0 // DEPT: ABOUT_ME
              </div>
              <div className="absolute top-4 right-10 sm:right-12 pcb-silkscreen font-mono text-[8px] sm:text-[9px] flex items-center gap-1.5">
                <span className="pcb-test-point pulse" style={{ width: 6, height: 6 }} />
                STATUS: ACTIVE
              </div>
              <div className="absolute bottom-4 left-10 sm:left-12 pcb-silkscreen font-mono text-[7px] sm:text-[8px]">
                R12 C44 L8 Q3 // GND VCC TX RX
              </div>
              <div className="absolute bottom-4 right-10 sm:right-12 pcb-silkscreen font-mono text-[7px] sm:text-[8px]">
                MADE_IN_PH // SYSTEM_ACTIVE
              </div>

              {/* Unified Contents with vertical spacing */}
              <div className="relative z-10 space-y-5 sm:space-y-6 md:space-y-8 py-2 sm:py-4 px-1 sm:px-4">
                
                {/* ── Section 1: Profile ──────────────────────── */}
                <motion.div variants={chipVariants} className="pcb-chip">
                  <ChipPins />
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="font-mono text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: '#e27500' }}>
                      <Cpu size={14} className="sm:w-4 sm:h-4" />
                      <span>U1 // Profile</span>
                    </h3>
                    <span className="font-mono text-[7px] sm:text-[8px] md:text-[9px] text-[#e27500]/60 uppercase tracking-widest hidden sm:inline">
                      8-Bit MCU
                    </span>
                  </div>
                  
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white/70 mb-4 sm:mb-6">
                    Full-stack developer and UI/UX designer with a BS in Computer Engineering.
                    I build performant, scalable web and mobile applications from the ground up —
                    from database architecture and RESTful APIs to polished, accessible frontends.
                    I thrive in fast-paced, collaborative environments where engineering meets design.
                  </p>

                  {/* Location & Social Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-white/50 font-mono text-[9px] sm:text-[10px] md:text-[11px]">
                      <MapPin size={10} className="sm:w-3 sm:h-3 text-[#e27500]" />
                      <span>LOCATION:</span>
                      <span className="text-white/80">Cavite, PH</span>
                    </div>
                    
                    {/* Social media links with brand logos */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-mono text-[8px] sm:text-[9px] text-white/30 uppercase tracking-widest mr-0.5 sm:mr-1">socials:</span>
                      
                      <a
                        href="https://github.com/renzrebogio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border border-white/10 text-white/60 hover:text-[#e27500] hover:border-[#e27500] hover:bg-[#e27500]/5 transition-all duration-300 hover:shadow-[0_0_10px_rgba(226,117,0,0.15)] group"
                        title="GitHub"
                      >
                        <Github size={14} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                      </a>

                      <a
                        href="https://linkedin.com/in/renz-martin-rebogio-3916ab364"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border border-white/10 text-white/60 hover:text-[#e27500] hover:border-[#e27500] hover:bg-[#e27500]/5 transition-all duration-300 hover:shadow-[0_0_10px_rgba(226,117,0,0.15)] group"
                        title="LinkedIn"
                      >
                        <Linkedin size={14} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                      </a>

                      <a
                        href="mailto:renzmartinrebogio@gmail.com"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border border-white/10 text-white/60 hover:text-[#e27500] hover:border-[#e27500] hover:bg-[#e27500]/5 transition-all duration-300 hover:shadow-[0_0_10px_rgba(226,117,0,0.15)] group"
                        title="Email"
                      >
                        <Mail size={14} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* ── Section 2: Education ────────────────────── */}
                <motion.div variants={chipVariants} className="pcb-chip">
                  <ChipPins />
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h3 className="font-mono text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: '#e27500' }}>
                      <Award size={14} className="sm:w-4 sm:h-4" />
                      <span>U2 // Education</span>
                    </h3>
                    <span className="font-mono text-[7px] sm:text-[8px] md:text-[9px] text-[#e27500]/60 uppercase tracking-widest hidden sm:inline">
                      ROM_MODULE
                    </span>
                  </div>

                  <div className="relative pl-6 sm:pl-8">
                    {/* PCB trace timeline connector */}
                    <div className="absolute left-[5px] sm:left-[7px] top-2 bottom-2 bg-gradient-to-b from-[#e27500]/60 to-[#e27500]/10"
                         style={{ width: '2px' }} />

                    <div className="space-y-4 sm:space-y-6">
                      {timelineEntries.map((entry, i) => (
                        <div key={i} className="relative flex items-start gap-3 sm:gap-4">
                          {/* Solder point terminal dot */}
                          <div className="absolute -left-5 sm:-left-6 top-1 w-[10px] sm:w-[12px] h-[10px] sm:h-[12px] rounded-full bg-[#e27500] border-2 border-white/20 shadow-[0_0_6px_rgba(226,117,0,0.6)]" />

                          <div>
                            <span className="font-mono text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-wider block mb-1 text-[#e27500]">
                              {entry.year}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-white/90 leading-snug">{entry.title}</h4>
                            <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] mt-0.5 text-white/50">
                              {entry.subtitle}
                            </p>
                            {entry.highlight && (
                              <span className="inline-block mt-2 sm:mt-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-2.5 py-0.5 rounded-full"
                                style={{ background: 'rgba(226, 117, 0, 0.12)', color: '#e27500', border: '0.5px solid rgba(226, 117, 0, 0.25)' }}>
                                {entry.highlight}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* ── Section 3: Certifications ───────────────── */}
                <motion.div variants={chipVariants} className="pcb-chip">
                  <ChipPins />
                  <div className="flex items-center justify-between mb-3 sm:mb-5">
                    <h3 className="font-mono text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: '#e27500' }}>
                      <Award size={14} className="sm:w-4 sm:h-4" />
                      <span>U3 // Certifications</span>
                    </h3>
                    <span className="font-mono text-[7px] sm:text-[8px] md:text-[9px] text-[#e27500]/60 uppercase tracking-widest hidden sm:inline">
                      EEPROM_BLOCK
                    </span>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {certificates.map((cert) => (
                      <div
                        key={cert.id}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl transition-all duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '0.5px solid rgba(255, 255, 255, 0.05)',
                        }}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          {/* Verified checkmark badge styled as solder terminal */}
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-3 sm:h-3">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs sm:text-sm font-bold text-white/85 leading-snug">{cert.title}</h4>
                            <p className="font-mono text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider text-white/40">
                              {cert.issuer} • {cert.year}
                            </p>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => setSelectedCertificate(cert)}
                          className="self-start sm:self-center flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest group whitespace-nowrap"
                          style={{
                            background: 'transparent',
                            border: '1px solid rgba(226, 117, 0, 0.3)',
                            color: '#e27500',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(226, 117, 0, 0.1)';
                            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(226, 117, 0, 0.6)';
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 10px rgba(226, 117, 0, 0.2)';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(226, 117, 0, 0.3)';
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                          }}
                        >
                          <Eye size={10} className="sm:w-3 sm:h-3" />
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>

          {/* Right side — empty space for the sticky image card on desktop */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5" aria-hidden="true" />
        </div>
      </div>

      {/* ── Certificate Modal ────────────────────────────────── */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <div className="pcb-board p-6 md:p-8 max-h-[90vh] overflow-auto relative">
              <div className="pcb-mounting-hole top-left" />
              <div className="pcb-mounting-hole top-right" />
              <div className="pcb-mounting-hole bottom-left" />
              <div className="pcb-mounting-hole bottom-right" />
              
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-5 right-5 z-20 p-2 rounded-full transition-colors hover:bg-white/10"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                <X size={18} />
              </button>
              <div className="relative z-10">
                <div className="mb-6 pr-12">
                  <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2 mb-2" style={{ color: '#e27500' }}>
                    <Cpu size={16} />
                    <span>PORT_01 // CERTIFICATE_READER</span>
                  </h3>
                  <h3 className="text-xl font-bold text-white/90 mb-1">{selectedCertificate.title}</h3>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-white/40">
                    {selectedCertificate.issuer} • {selectedCertificate.year}
                  </p>
                </div>
                <div className="flex justify-center rounded-xl overflow-hidden p-2"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '0.5px solid rgba(255,255,255,0.05)' }}>
                  <img
                    src={selectedCertificate.image}
                    alt={`${selectedCertificate.title} Certificate`}
                    className="max-w-full h-auto rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const fallback = target.nextSibling as HTMLElement;
                      target.style.display = 'none';
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-64 rounded-lg items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <p className="font-mono text-sm text-white/30">
                      Certificate image not found
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;