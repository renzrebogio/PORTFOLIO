import { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AboutSection from './AboutSection';

const services = [
  {
    label: 'Top performing',
    title: '01. Full-Stack Web Development',
    description:
      'Building robust, scalable end-to-end web applications using modern frameworks. Every app is built for performance, accessibility, and clean code.',
    tools: ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Cross-platform',
    title: '02. Mobile App Development',
    description:
      'Creating seamless cross-platform mobile experiences backed by real-time data and authentication for smooth, native-feeling apps.',
    tools: ['Flutter', 'Dart', 'Firebase', 'Android Studio'],
  },
  {
    label: 'User focused',
    title: '03. UI/UX Design',
    description:
      'Crafting intuitive, user-centered designs with a focus on aesthetics and usability. I turn complex problems into elegant, accessible interfaces.',
    tools: ['Figma', 'Responsive Design', 'Wireframing', 'Prototyping'],
  },
  {
    label: 'Scalable systems',
    title: '04. Backend & APIs',
    description:
      'Designing secure and efficient RESTful APIs, managing database architecture, and integrating third-party services for payments and more.',
    tools: ['Express.js', 'Node.js', 'REST APIs', 'Stripe', 'Firebase'],
  },
];

/* ─── Pill shared component ──────────────────────────────────────── */
const ToolPill = ({ tool, dark = true }: { tool: string; dark?: boolean }) => (
  <span
    className="text-xs px-3 py-1 rounded-full font-semibold"
    style={
      dark
        ? { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', border: '0.5px solid rgba(255,255,255,0.14)' }
        : { background: 'rgba(0,0,0,0.06)', color: 'rgba(0,0,0,0.7)', border: '0.5px solid rgba(0,0,0,0.12)' }
    }
  >
    {tool}
  </span>
);

/* ══════════════════════════════════════════════════════════════════
   CARD 1 — Browser Window  (Full-Stack Web Dev)
═══════════════════════════════════════════════════════════════════ */
const BrowserCard = ({ service }: { service: typeof services[0] }) => (
  <div className="rounded-[1.4rem] overflow-hidden" style={{ background: '#1e1e1e', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
    {/* Browser chrome */}
    <div className="px-4 py-3 flex items-center gap-3" style={{ background: '#2d2d2d', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Traffic-light dots */}
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
      </div>
      {/* Fake tabs */}
      <div className="flex gap-1 ml-2">
        <div className="px-3 py-1 rounded-t-md text-[10px] font-semibold" style={{ background: '#1e1e1e', color: 'rgba(255,255,255,0.8)' }}>portfolio.tsx</div>
        <div className="px-3 py-1 rounded-t-md text-[10px]" style={{ background: 'transparent', color: 'rgba(255,255,255,0.3)' }}>api.ts</div>
      </div>
      {/* Address bar */}
      <div className="flex-1 mx-2 px-3 py-1 rounded-md text-[10px] font-mono flex items-center gap-2" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.35)' }}>
        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
        renzrebogio.dev
      </div>
      {/* Label badge */}
      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full flex-shrink-0" style={{ background: 'rgba(226,117,0,0.15)', color: '#e27500', border: '0.5px solid rgba(226,117,0,0.3)' }}>
        {service.label}
      </span>
    </div>

    {/* Page content area */}
    <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-5" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
      {/* Fake nav bar mockup */}
      <div className="flex items-center justify-between px-4 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.07)' }}>
        <div className="w-16 h-2 rounded-full" style={{ background: 'rgba(226,117,0,0.5)' }} />
        <div className="flex gap-3">
          {[40, 32, 36, 28].map((w, i) => <div key={i} className="h-1.5 rounded-full" style={{ width: w, background: 'rgba(255,255,255,0.2)' }} />)}
          <div className="w-12 h-5 rounded-full" style={{ background: '#e27500', opacity: 0.8 }} />
        </div>
      </div>

      {/* Title & description */}
      <div className="rounded-xl p-4 sm:p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)' }}>
        {/* FIX: text-base on mobile, scales up on larger screens */}
        <h3 className="text-base sm:text-xl md:text-2xl font-black font-heading tracking-tight mb-2" style={{ color: '#eaeaea' }}>{service.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{service.description}</p>
      </div>

      {/* Code snippet decorative */}
      <div className="rounded-xl px-4 py-3 font-mono text-[11px] leading-relaxed" style={{ background: 'rgba(0,0,0,0.35)', border: '0.5px solid rgba(255,255,255,0.07)' }}>
        <span style={{ color: '#569cd6' }}>const</span>{' '}
        <span style={{ color: '#4ec9b0' }}>App</span>{' '}
        <span style={{ color: '#d4d4d4' }}>= () =&gt; {'{'}</span>
        <br />
        <span style={{ color: '#d4d4d4' }}>&nbsp;&nbsp;</span>
        <span style={{ color: '#569cd6' }}>return</span>{' '}
        <span style={{ color: '#4ec9b0' }}>&lt;Portfolio /&gt;</span>
        <br />
        <span style={{ color: '#d4d4d4' }}>{'}'}</span>
      </div>

      {/* Stack pills */}
      <div>
        <p className="font-mono text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>// stack</p>
        <div className="flex flex-wrap gap-2">{service.tools.map((t, i) => <ToolPill key={i} tool={t} />)}</div>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════
   CARD 2 — Landscape Phone Frame  (Mobile App Dev)
═══════════════════════════════════════════════════════════════════ */
const PhoneCard = ({ service }: { service: typeof services[0] }) => (
  <div
    className="rounded-[2.2rem] overflow-hidden relative"
    style={{
      background: '#111',
      border: '6px solid #2a2a2a',
      boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 60px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.04)',
    }}
  >
    {/* Left-side buttons */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 -ml-[10px]">
      <div className="w-[4px] h-8 rounded-r-sm" style={{ background: '#2a2a2a' }} />
      <div className="w-[4px] h-8 rounded-r-sm" style={{ background: '#2a2a2a' }} />
    </div>
    <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-[10px]">
      <div className="w-[4px] h-12 rounded-l-sm" style={{ background: '#2a2a2a' }} />
    </div>

    {/* Screen */}
    <div className="flex flex-col" style={{ background: '#0f0f1a' }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 py-2" style={{ borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full" style={{ background: '#e27500' }} />
          <span className="font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.4)' }}>9:41 AM</span>
        </div>
        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(226,117,0,0.12)', color: '#e27500', border: '0.5px solid rgba(226,117,0,0.3)' }}>{service.label}</span>
        <div className="flex items-center gap-1.5">
          {[3, 5, 7, 9].map((h, i) => (
            <div key={i} className="w-1 rounded-sm" style={{ height: h, background: i < 3 ? '#e27500' : 'rgba(255,255,255,0.2)' }} />
          ))}
          <div className="w-7 h-3.5 rounded-sm border flex items-center px-0.5" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
            <div className="h-2 rounded-sm flex-1" style={{ background: '#28c840' }} />
          </div>
        </div>
      </div>

      {/* App content */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-3 sm:gap-4">
        {/* App header */}
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e27500, #ff9500)' }}>
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.39.07 2.35.77 3.17.83.94-.18 1.84-.9 3.33-.77 1.42.13 2.48.77 3.16 1.96-3.05 1.96-2.34 5.86.68 7.24-.54 1.14-1.26 2.28-2.34 3.6zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
          </div>
          <div>
            <p className="text-xs font-bold" style={{ color: '#eaeaea' }}>RenzApp Studio</p>
            <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Flutter · Dart</p>
          </div>
        </div>

        {/* Title & description */}
        <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.08)' }}>
          {/* FIX: responsive title */}
          <h3 className="text-base sm:text-xl md:text-2xl font-black font-heading tracking-tight mb-2" style={{ color: '#eaeaea' }}>{service.title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{service.description}</p>
        </div>

        {/* Fake bottom nav */}
        <div className="flex items-center justify-around px-4 py-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.07)' }}>
          {['Home', 'Explore', 'Notif', 'Profile'].map((tab, i) => (
            <div key={tab} className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 rounded-md" style={{ background: i === 0 ? '#e27500' : 'rgba(255,255,255,0.1)' }} />
              <span className="text-[8px]" style={{ color: i === 0 ? '#e27500' : 'rgba(255,255,255,0.3)' }}>{tab}</span>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div>
          <p className="font-mono text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>// stack</p>
          <div className="flex flex-wrap gap-2">{service.tools.map((t, i) => <ToolPill key={i} tool={t} />)}</div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center pb-3 pt-1">
        <div className="w-24 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════
   CARD 3 — Figma Canvas  (UI/UX Design)
═══════════════════════════════════════════════════════════════════ */
const FigmaCard = ({ service }: { service: typeof services[0] }) => (
  <div className="rounded-[1.2rem] overflow-hidden" style={{ background: '#1e1e1e', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
    {/* Figma toolbar */}
    <div className="flex items-center gap-3 px-4 py-2.5" style={{ background: '#2c2c2c', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
      </svg>
      <span className="text-[11px] font-semibold" style={{ color: 'rgba(255,255,255,0.8)' }}>portfolio-design.fig</span>
      {/* FIX: hide menu items on mobile to save space */}
      <div className="hidden sm:flex gap-1 ml-2">
        {['File', 'Edit', 'View', 'Insert', 'Object'].map(m => (
          <span key={m} className="text-[10px] px-1.5 py-0.5 rounded" style={{ color: 'rgba(255,255,255,0.45)' }}>{m}</span>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: 'rgba(226,117,0,0.15)', color: '#e27500', border: '0.5px solid rgba(226,117,0,0.3)' }}>{service.label}</span>
        <div className="w-6 h-6 rounded-full" style={{ background: 'linear-gradient(135deg,#e27500,#ff9500)' }} />
      </div>
    </div>

    {/* FIX: hide left layers panel on mobile — too narrow to be useful */}
    <div className="flex overflow-hidden" style={{ height: 'auto' }}>
      <div className="hidden sm:flex w-28 flex-shrink-0 p-3 flex-col gap-2" style={{ background: '#1e1e1e', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Layers</p>
        {['Frame 1', '  Header', '  Hero', '  Section', 'Components', '  Button', '  Card'].map((l, i) => (
          <div key={i} className="flex items-center gap-1.5 px-1.5 py-0.5 rounded" style={{ background: i === 0 ? 'rgba(226,117,0,0.12)' : 'transparent' }}>
            <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: i === 0 ? '#e27500' : 'rgba(255,255,255,0.15)' }} />
            <span className="text-[9px] truncate" style={{ color: i === 0 ? '#e27500' : 'rgba(255,255,255,0.4)' }}>{l}</span>
          </div>
        ))}
      </div>

      {/* Canvas area — FIX: min-w-0 prevents overflow, reduced padding on mobile */}
      <div
        className="flex-1 p-3 sm:p-5 relative min-w-0"
        style={{
          background: '#2c2c2c',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        {/* Ruler top */}
        <div className="absolute top-0 left-0 right-0 h-5 flex items-end px-1 gap-4" style={{ background: 'rgba(30,30,30,0.9)', borderBottom: '0.5px solid rgba(255,255,255,0.07)' }}>
          {[0, 80, 160, 240, 320, 400].map(n => (
            <span key={n} className="font-mono text-[7px]" style={{ color: 'rgba(255,255,255,0.2)' }}>{n}</span>
          ))}
        </div>
        {/* Ruler left */}
        <div className="absolute top-0 left-0 bottom-0 w-5 flex flex-col items-end py-6 gap-6" style={{ background: 'rgba(30,30,30,0.9)', borderRight: '0.5px solid rgba(255,255,255,0.07)' }}>
          {[0, 50, 100, 150, 200].map(n => (
            <span key={n} className="font-mono text-[7px] rotate-180" style={{ writingMode: 'vertical-lr', color: 'rgba(255,255,255,0.2)' }}>{n}</span>
          ))}
        </div>

        {/* Design frame with selection handles */}
        <div className="relative mt-5 ml-5">
          <div className="absolute -inset-2 rounded-sm pointer-events-none" style={{ border: '1.5px solid #0d99ff', boxShadow: '0 0 0 1px rgba(13,153,255,0.15)' }}>
            {['-top-1.5 -left-1.5', '-top-1.5 -right-1.5', '-bottom-1.5 -left-1.5', '-bottom-1.5 -right-1.5'].map(pos => (
              <div key={pos} className={`absolute ${pos} w-3 h-3 rounded-sm`} style={{ background: '#fff', border: '1.5px solid #0d99ff' }} />
            ))}
          </div>

          <div className="rounded-xl p-4 sm:p-5" style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)' }}>
            {/* FIX: responsive title, no word-break weirdness */}
            <h3 className="text-base sm:text-xl md:text-2xl font-black font-heading tracking-tight mb-2 break-words" style={{ color: '#eaeaea' }}>{service.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{service.description}</p>
          </div>
        </div>

        {/* Stack pills */}
        <div className="mt-4 ml-5">
          <p className="font-mono text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>// stack</p>
          <div className="flex flex-wrap gap-2">{service.tools.map((t, i) => <ToolPill key={i} tool={t} />)}</div>
        </div>
      </div>

      {/* FIX: hide right inspect panel on mobile */}
      <div className="hidden sm:flex w-28 flex-shrink-0 p-3 flex-col gap-3" style={{ background: '#1e1e1e', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="text-[9px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>Inspect</p>
        {[['W', '100%'], ['H', 'auto'], ['X', '0'], ['Y', '0'], ['R', '12px'], ['Opacity', '100%']].map(([k, v]) => (
          <div key={k} className="flex justify-between">
            <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{k}</span>
            <span className="text-[9px] font-mono" style={{ color: 'rgba(255,255,255,0.6)' }}>{v}</span>
          </div>
        ))}
        <div className="mt-1 pt-2" style={{ borderTop: '0.5px solid rgba(255,255,255,0.07)' }}>
          <p className="text-[9px] uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Fill</p>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-sm" style={{ background: '#e27500' }} />
            <span className="font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.5)' }}>E27500</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════
   CARD 4 — Terminal / Server  (Backend & APIs)
═══════════════════════════════════════════════════════════════════ */
const TerminalCard = ({ service }: { service: typeof services[0] }) => {
  const [tick, setTick] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setTick(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  const lines = [
    { prompt: '$ ', cmd: 'node server.js', out: null },
    { prompt: null, cmd: null, out: '✓ Express listening on :3000' },
    { prompt: null, cmd: null, out: '✓ Connected to PostgreSQL' },
    { prompt: '$ ', cmd: 'curl /api/health', out: null },
    { prompt: null, cmd: null, out: '{ "status": "ok", "uptime": "99.9%" }' },
    { prompt: '$ ', cmd: '_', out: null },
  ];

  return (
    <div className="rounded-[1.4rem] overflow-hidden" style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
      {/* Terminal chrome */}
      <div className="flex items-center gap-3 px-4 py-3" style={{ background: '#161b22', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>zsh — renz@api-server</span>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', border: '0.5px solid rgba(34,197,94,0.3)' }}>{service.label}</span>
      </div>

      <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-4">
        {/* Terminal output */}
        <div className="rounded-xl p-4 font-mono text-[11px] leading-relaxed flex flex-col gap-1" style={{ background: 'rgba(0,0,0,0.4)', border: '0.5px solid rgba(255,255,255,0.07)' }}>
          {lines.map((line, i) => (
            <div key={i} className="flex gap-1">
              {line.prompt && <span style={{ color: '#22c55e' }}>{line.prompt}</span>}
              {line.cmd && (
                <span style={{ color: '#eaeaea' }}>
                  {line.cmd === '_'
                    ? <span style={{ borderRight: `2px solid ${tick ? '#22c55e' : 'transparent'}` }}>&nbsp;</span>
                    : line.cmd}
                </span>
              )}
              {line.out && <span style={{ color: '#6b7280' }}>{line.out}</span>}
            </div>
          ))}
        </div>

        {/* API endpoint cards */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { method: 'GET', path: '/api/users', color: '#22c55e' },
            { method: 'POST', path: '/api/orders', color: '#3b82f6' },
            { method: 'PUT', path: '/api/profile', color: '#f59e0b' },
            { method: 'DEL', path: '/api/session', color: '#ef4444' },
          ].map(({ method, path, color }) => (
            <div key={path} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.07)' }}>
              <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded-sm flex-shrink-0" style={{ background: `${color}22`, color }}>{method}</span>
              <span className="text-[10px] font-mono truncate" style={{ color: 'rgba(255,255,255,0.4)' }}>{path}</span>
            </div>
          ))}
        </div>

        {/* Title & description */}
        <div className="rounded-xl p-4 sm:p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.07)' }}>
          {/* FIX: responsive title */}
          <h3 className="text-base sm:text-xl md:text-2xl font-black font-heading tracking-tight mb-2" style={{ color: '#eaeaea' }}>{service.title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{service.description}</p>
        </div>

        {/* Stack */}
        <div>
          <p className="font-mono text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>// stack</p>
          <div className="flex flex-wrap gap-2">{service.tools.map((t, i) => <ToolPill key={i} tool={t} />)}</div>
        </div>
      </div>
    </div>
  );
};

/* ── Card renderer ────────────────────────────────────────────────── */
const THEMED_CARDS = [BrowserCard, PhoneCard, FigmaCard, TerminalCard];

// FIX: updated mobile runway config — lower CARD_TOP_PX so cards aren't clipped by navbar,
// taller SLIDE_FROM_PX for a more dramatic entry, and increased STACK_OFFSET_PX
const getRunwayConfig = (isMobile: boolean) => ({
  RUNWAY_PX: isMobile ? 600 : 800,
  CARD_TOP_PX: isMobile ? 180 : 260,      // was 80 — pushes settled position down
  SLIDE_FROM_PX: isMobile ? 300 : 400,
  STACK_OFFSET_PX: isMobile ? 8 : 10,
  ENTER_FRACTION: isMobile ? 0.5 : 0.45,
});

const WhatIDoCards = ({ isMobile }: { isMobile: boolean }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrolledIn, setScrolledIn] = useState(0);
  const config = getRunwayConfig(isMobile);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      setScrolledIn(Math.max(0, -top));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const total = services.length;

  return (
    <div
      ref={sectionRef}
      style={{ height: `${config.RUNWAY_PX * total + 300}px` }}
      className="relative"
    >
      <div className="sticky" style={{ top: `${config.CARD_TOP_PX}px` }}>
        {/* FIX: height increased on mobile so full card is visible without clipping */}
        <div className="relative" style={{ height: isMobile ? '480px' : '500px' }}>
          {services.map((service, index) => {
            const windowStart = index * config.RUNWAY_PX;
            const windowEnd = (index + 1) * config.RUNWAY_PX;

            const rawProgress = (scrolledIn - windowStart) / config.RUNWAY_PX;
            const progress = Math.max(0, Math.min(1, rawProgress));

            const isFuture = scrolledIn < windowStart;
            const isPast = scrolledIn >= windowEnd;
            const isActive = !isFuture && !isPast;

            let translateY: number;
            let scale: number;
            let opacity: number;
            let zIndex: number;
            let transition: string;

            if (isFuture) {
              translateY = config.SLIDE_FROM_PX;
              opacity = 0;
              scale = 1;
              zIndex = index;
              transition = 'none';
            } else if (isActive) {
              const t = Math.min(1, progress / config.ENTER_FRACTION);
              const eased = 1 - Math.pow(1 - t, 3);
              translateY = config.SLIDE_FROM_PX * (1 - eased);
              opacity = Math.min(1, t * 2);
              scale = 1;
              zIndex = total + 1;
              transition = 'none';
            } else {
              const depth = Math.round((scrolledIn - windowEnd) / config.RUNWAY_PX) + 1;
              const clampedDepth = Math.min(depth, total - 1 - index);
              translateY = -(clampedDepth * config.STACK_OFFSET_PX);
              scale = Math.max(0.91, 1 - clampedDepth * 0.03);
              opacity = Math.max(0.4, 1 - clampedDepth * 0.18);
              zIndex = index;
              transition = 'transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease';
            }

            return (
              <div
                key={index}
                className="absolute inset-x-0 px-4 sm:px-6 md:px-0"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition,
                  transformOrigin: 'top center',
                  willChange: 'transform, opacity',
                  // FIX: removed explicit left/right/maxWidth overrides — let px-4 handle gutters
                }}
              >
                {(() => {
                  const ThemedCard = THEMED_CARDS[index];
                  return <ThemedCard service={service} />;
                })()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────
const HeroAndWhatIDo = () => {
  const [time, setTime] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.querySelectorAll('.hero-element').forEach((el) =>
          el.classList.add('revealed')
        );
      }
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      let r = 0;
      if (latest > 0.08 && latest < 0.18) {
        r = ((latest - 0.08) / 0.10) * 180;
      } else if (latest >= 0.18 && latest < 0.68) {
        r = 180;
      } else if (latest >= 0.68 && latest <= 0.78) {
        r = 180 + ((latest - 0.68) / 0.10) * 180;
      } else if (latest > 0.78) {
        r = 360;
      }
      setRotation(r);
    });
  }, [scrollYProgress]);


  // FIX: mobile — image sits top-center, text lives below it naturally
const imageLeft = useTransform(
  scrollYProgress,
  [0, 0.08, 0.18, 0.68, 0.78, 1.0],
  isMobile
    ? ['50%', '50%', '150%', '150%', '150%', '150%']  // slides off right, never comes back
    : ['78%', '78%', '88%', '88%', '88%', '88%']
);
const imageX = useTransform(
  scrollYProgress,
  [0, 0.08, 0.18, 0.68, 0.78, 1.0],
  isMobile
    ? ['-50%', '-50%', '-50%', '-50%', '-50%', '-50%']
    : ['-50%', '-50%', '-100%', '-100%', '-100%', '-100%']
);
const imageTop = useTransform(
  scrollYProgress,
  [0, 0.08, 0.18, 0.68, 0.78, 1.0],
  isMobile
    ? ['35%', '35%', '35%', '35%', '35%', '35%']
    : ['50%', '50%', '55%', '55%', '55%', '55%']
);

  return (
    <div ref={containerRef} className="relative w-full bg-background">

      {/* ── Floating profile image ─────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-50">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <motion.div
            className="absolute"
            style={{ left: imageLeft, x: imageX, top: imageTop, y: '-50%', perspective: '1200px' }}
          >
            <div
              className="w-[200px] h-[270px] sm:w-[240px] sm:h-[320px] md:w-[270px] md:h-[365px] lg:w-[330px] lg:h-[445px] relative"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${rotation}deg)`,
                pointerEvents: isMobile ? 'none' : 'auto',
                transition: 'transform 0.1s linear',
              }}
            >
              <div
                className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-background bg-muted/20"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <img
                  src="/profile.png"
                  alt="Renz Martin Rebogio"
                  className="w-full h-full object-cover select-none"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/1x1.png'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
              <div
                className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-border/30 bg-gradient-to-br from-[#1a1c1e] to-[#0a0a0a] flex flex-col items-center justify-center"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="absolute inset-0 grid grid-cols-2 gap-1.5 p-3 opacity-25">
                  {['pixelbot_thumbnail.jpg', 'zeeaisaas_thumbnail.jpg', 'bastebookmart_thumbnail.jpg', 'casalasa_thumbnail.jpg'].map((thumb, i) => (
                    <div key={i} className="rounded-xl overflow-hidden bg-white/5">
                      <img src={`/${thumb}`} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="relative z-10 text-center px-8">
                  <h3 className="text-white text-2xl md:text-3xl font-bold font-heading tracking-tight leading-tight">
                    Renz Martin<br />Rebogio
                  </h3>
                  <p className="text-white/70 text-sm font-medium mt-2">Developer & Designer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      {/* NO CHANGES BELOW THIS LINE — hero section, What I Do section, AboutSection are unchanged */}
      <section
        id="hero"
        ref={heroRef}
        className="relative w-full h-screen flex items-center overflow-hidden pointer-events-auto"
      >
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="hero-hex-grid" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-end h-full pb-16 sm:pb-0 sm:justify-center">
  <p
    className="text-muted-foreground text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-5 md:mb-7 hero-element section-reveal"
    style={{ transitionDelay: '0.05s' }}
  >
    Full-Stack Developer & UI Designer
  </p>
  <h1
    className="text-[11vw] md:text-[9vw] lg:text-[8.5vw] font-black font-heading leading-[0.85] tracking-tighter text-foreground uppercase whitespace-nowrap hero-element section-reveal"
    style={{ transitionDelay: '0.15s' }}
  >
    RENZ MARTIN
  </h1>
  <h1
    className="text-[14vw] md:text-[9.5vw] lg:text-[8.8vw] font-black font-heading leading-[0.85] tracking-tighter text-foreground uppercase hero-element section-reveal"
    style={{ transitionDelay: '0.35s' }}
  >
    REBOGIO
  </h1>
  <p
    className="text-muted-foreground text-sm font-medium mt-8 md:mt-10 inline-flex items-center gap-2 hero-element section-reveal"
    style={{ transitionDelay: '0.5s' }}
  >
    <MapPin className="w-3.5 h-3.5 text-[#e27500] flex-shrink-0" />
    Cavite, Philippines —&nbsp;{time} GMT+8
  </p>
</div>
      </section>

      {/* ── What I Do Section ────────────────────────────────────────────── */}
      <section
        id="what-i-do"
        className="relative w-full border-t border-border/50 pointer-events-auto bg-section-bg pb-24"
      >
        <div className="sticky top-0 z-20 pt-12 sm:pt-16 pb-4 sm:pb-6 bg-section-bg/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="text-[#e27500] text-xs font-bold uppercase tracking-widest block mb-3">
              My Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tighter text-foreground mb-3">
              What I do{' '}
              <span className="italic font-light text-muted-foreground">best?</span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-lg font-medium leading-relaxed">
              I deliver comprehensive digital solutions across the entire tech stack — from
              planning and design to deployment and beyond.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7 xl:col-span-6">
              <WhatIDoCards isMobile={isMobile} />
            </div>
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <AboutSection />

    </div>
  );
};

export default HeroAndWhatIDo;