import Navigation from '@/components/Navigation';
import HeroAndWhatIDo from '@/components/HeroAndWhatIDo';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

/* ─── Brand-colour SVG logos ───────────────────────────────────────────── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.435 22 12.017 22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

/* ─── Marquee items ─────────────────────────────────────────────────────── */
const marqueeItems = [
  'Available for Work',
  '✦',
  'Full-Stack Developer',
  '✦',
  'UI / UX Designer',
  '✦',
  'Computer Engineer',
  '✦',
  'Based in Philippines',
  '✦',
  'Open to Collaborate',
  '✦',
  'React · Next.js · Flutter',
  '✦',
];

const FooterMarquee = () => {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="footer-marquee-wrap">
      <div className="footer-marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="footer-marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─── Portfolio page ────────────────────────────────────────────────────── */
const Portfolio = () => {
  const [preloaderActive, setPreloaderActive] = useState(true);
  const footerRef = useRef<HTMLElement>(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    // Always start from the top on load / refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    document.documentElement.classList.add('lenis');

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => setPreloaderActive(false), 1500);

    // Observe footer for entrance animation
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFooterVisible(true); },
      { threshold: 0.05 }
    );
    if (footerRef.current) obs.observe(footerRef.current);

    return () => {
      document.documentElement.classList.remove('lenis');
      lenis.destroy();
      clearTimeout(timer);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <div id="custom-preloader" className={preloaderActive ? '' : 'hidden'}>
        <div id="custom-preloader-text">
          {"RENZ REBOGIO".split('').map((char, index) => (
            <span
              key={index}
              className="preloader-text-char font-heading tracking-tighter"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>

      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navigation />

        <main>
          {/* AboutSection is rendered inside HeroAndWhatIDo so the sticky
              profile image card remains active through the entire About section */}
          <HeroAndWhatIDo />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* ── Premium Editorial Footer ─────────────────────────────── */}
        <footer
          ref={footerRef}
          className={`w-full bg-background border-t border-border/40 overflow-hidden transition-all duration-1000 ${footerVisible ? 'footer-revealed' : 'footer-hidden'}`}
        >
          {/* ── Top bar: copyright + nav links ── */}
          <div className="container mx-auto px-6 max-w-7xl pt-14 pb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-border/30">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                © 2024 Renz Rebogio · All rights reserved
              </p>
            </div>

            {/* Contact icons row */}
            <div className="flex items-center gap-4">
              {[
                {
                  href: 'mailto:renzmartinrebogio@gmail.com',
                  label: 'Email',
                  icon: <MailIcon />,
                  color: 'hover:text-[#e27500]',
                },
                {
                  href: 'https://github.com/renzrebogio',
                  label: 'GitHub',
                  icon: <GithubIcon />,
                  color: 'hover:text-foreground',
                  external: true,
                },
                {
                  href: 'https://linkedin.com/in/renz-martin-rebogio-3916ab364',
                  label: 'LinkedIn',
                  icon: <LinkedinIcon />,
                  color: 'hover:text-[#0077b5]',
                  external: true,
                },
              ].map(({ href, label, icon, color, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  aria-label={label}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/50 text-muted-foreground ${color} hover:border-current hover:bg-foreground/5 transition-all duration-300 text-xs font-bold uppercase tracking-wider`}
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Marquee strip ── */}
          <div className="border-b border-border/20 py-4">
            <FooterMarquee />
          </div>

          {/* ── Big name ── */}
          <div className="w-full py-10 sm:py-16 select-none overflow-hidden">
            <h2
              className="footer-name-text font-black font-heading leading-none tracking-tighter text-center uppercase whitespace-nowrap"
              style={{ fontSize: 'clamp(3.5rem, 15vw, 14rem)' }}
            >
              RENZ REBOGIO
            </h2>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;