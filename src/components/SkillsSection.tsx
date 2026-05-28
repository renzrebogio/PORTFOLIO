import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Code2, Database, Smartphone, Settings } from 'lucide-react';

/* ── High-Quality SVG Paths with Default Brand Colors ───────────────── */
const getTechInfo = (name: string): { icon: React.ReactNode; role: string } => {
  switch (name.toLowerCase()) {
    case 'html':
      return {
        role: 'HTML5',
        icon: (
          <svg className="w-full h-full text-[#e34c26]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.582 9.51-.004.23-2.584H5.406l.696 7.75h7.625l-.273 2.777-2.454.664-2.454-.664-.15-1.75H5.807l.26 3.017L12 19.34l5.935-1.633.77-8.625H8.531z" />
          </svg>
        )
      };
    case 'css':
      return {
        role: 'CSS3',
        icon: (
          <svg className="w-full h-full text-[#264de4]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.03 5H5.405l.23 2.588h11.16l-.23 2.58H6.536l.23 2.584h8.318l-.63 6.35-2.477.67-2.478-.67-.158-1.75H6.848l.264 3.019L12 19.34l5.938-1.633.82-9.13H8.383L8.15 6.2H18.72L18.53 5z" />
          </svg>
        )
      };
    case 'javascript':
      return {
        role: 'JavaScript',
        icon: (
          <svg className="w-full h-full text-[#f7df1e]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0zm22.034 18.062c-.014-1.63-.984-2.693-2.782-3.367-1.225-.465-1.64-.707-1.64-1.272 0-.465.412-.767 1.003-.767.66 0 1.02.26 1.193.77h2.93c-.172-1.96-1.698-3.07-3.95-3.07-2.31 0-4.038 1.307-4.038 3.324 0 1.947 1.272 2.842 3.195 3.568 1.245.477 1.627.792 1.627 1.373 0 .546-.48.895-1.162.895-.818 0-1.32-.382-1.545-1.01h-2.94c.22 2.11 1.76 3.09 4.316 3.09 2.63 0 4.316-1.295 4.316-3.416z" />
          </svg>
        )
      };
    case 'typescript':
      return {
        role: 'TypeScript',
        icon: (
          <svg className="w-full h-full text-[#3178c6]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0zm22.034 18.062c-.014-1.63-.984-2.693-2.782-3.367-1.225-.465-1.64-.707-1.64-1.272 0-.465.412-.767 1.003-.767.66 0 1.02.26 1.193.77h2.93c-.172-1.96-1.698-3.07-3.95-3.07-2.31 0-4.038 1.307-4.038 3.324 0 1.947 1.272 2.842 3.195 3.568 1.245.477 1.627.792 1.627 1.373 0 .546-.48.895-1.162.895-.818 0-1.32-.382-1.545-1.01h-2.94c.22 2.11 1.76 3.09 4.316 3.09 2.63 0 4.316-1.295 4.316-3.416zM11.666 11.236H8.384v7.838c0 1.706.945 2.658 2.658 2.658.536 0 1.053-.092 1.57-.276v-2.31a3.5 3.5 0 0 1-1.15.161c-.69 0-1.077-.384-1.077-1.15v-6.921h3.28v-2.228z" />
          </svg>
        )
      };
    case 'react':
      return {
        role: 'React',
        icon: (
          <svg className="w-full h-full text-[#61dafb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="11" ry="4.2" />
            <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        )
      };
    case 'next.js':
      return {
        role: 'Next.js',
        icon: (
          <svg className="w-full h-full text-foreground dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.892 18.253L9.22 8.722v9.531H7.32V6.247h1.9l8.672 9.531V6.247h1.9v12.006z" />
          </svg>
        )
      };
    case 'angular':
      return {
        role: 'Angular',
        icon: (
          <svg className="w-full h-full text-[#dd0031]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2.5 5.5l1.4 12.3 8.1 4.7 8.1-4.7 1.4-12.3L12 2zm0 3.3l5.8 10h-2.1l-1.1-2.9h-5.2l-1.1 2.9H6.2l5.8-10zm-1.8 5.7h3.6L12 7.7 10.2 11z" />
          </svg>
        )
      };
    case 'tailwind css':
      return {
        role: 'Tailwind CSS',
        icon: (
          <svg className="w-full h-full text-[#38bdf8]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 6.036c-2.278 0-3.797 1.139-4.557 3.417 1.139-.76 2.278-.38 3.418.76 1.139 1.139 2.278 1.52 3.418 1.139.76-.38 1.139-1.139 1.139-2.279.038-.76-.38-1.52-1.139-2.278-.76-.76-1.52-.76-2.279-.76zm-6.076 6.076c-2.278 0-3.797 1.14-4.557 3.418 1.139-.76 2.278-.38 3.418.76 1.139 1.139 2.278 1.52 3.418 1.139.76-.38 1.139-1.14 1.139-2.279.038-.76-.38-1.52-1.139-2.278-.76-.76-1.52-.76-2.279-.76z" />
          </svg>
        )
      };
    case 'bootstrap':
      return {
        role: 'Bootstrap',
        icon: (
          <svg className="w-full h-full text-[#7952b3]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 13.5h-3v-7h3c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5zm0-3h-1v-2h1c.55 0 1 .45 1 1s-.45 1-1 1zm-1 3.5v-2.5h1c.55 0 1 .45 1 1s-.45 1-1 1h-1z" />
          </svg>
        )
      };
    case 'vite':
      return {
        role: 'Vite',
        icon: (
          <svg className="w-full h-full text-[#646cff]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.852 5.89l-7.227-4.99a1.09 1.09 0 0 0-1.25 0L4.148 5.89A1.085 1.085 0 0 0 3.65 6.8v10.4a1.085 1.085 0 0 0 .498.91l7.227 4.99a1.09 1.09 0 0 0 1.25 0l7.227-4.99a1.085 1.085 0 0 0 .498-.91V6.8a1.085 1.085 0 0 0-.498-.91z M12.87 18.23l-3.32-4.58h2.38l-.68 3.49l4.58-5.32h-2.91l1.52-4.21z" />
          </svg>
        )
      };
    case 'npm':
      return {
        role: 'npm',
        icon: (
          <svg className="w-full h-full text-[#cb3837]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M0 0v24h24V0H0zm18 18h-3v-9h-3v9H6V6h12v12z" />
          </svg>
        )
      };
    case 'java':
      return {
        role: 'Java',
        icon: (
          <svg className="w-full h-full text-[#f89820]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.024 0c-.06 0-.12.003-.18.009-.434.03-.847.168-1.233.402a3.864 3.864 0 0 0-1.464 1.839c-.198.513-.234 1.063-.12 1.603.267 1.272 1.074 2.373 2.115 3.099l.063.042c-.522.18-.948.51-1.23.957-.453.723-.519 1.626-.183 2.478.36 1.011.897 1.773 1.572 2.484.582.615 1.23 1.155 1.932 1.614.732.483 1.488.942 2.298 1.35.48.243.987.453 1.5.63.858.297 1.767.438 2.673.414.708-.018 1.413-.15 2.088-.396.6-.216 1.155-.54 1.638-.96.66-.57 1.14-1.317 1.344-2.163.261-1.077.069-2.223-.558-3.15-.39-.579-.933-1.026-1.572-1.302-1.089-.474-2.295-.495-3.411-.135-.873.282-1.662.774-2.316 1.434l-.066.066c-.465-.411-.906-.855-1.317-1.332-.579-.672-1.053-1.428-1.422-2.238.648-.282 1.2-.72 1.587-1.275.453-.648.642-1.434.525-2.208-.093-.615-.363-1.185-.78-1.638-.729-.792-1.782-1.206-2.859-1.137zm1.884 18.237c-.366 0-.717.069-1.05.207-.573.237-.999.684-1.182 1.254-.15.474-.135.981.042 1.446.222.585.666.993 1.242 1.161.423.123.873.123 1.293.003.57-.162 1.011-.564 1.236-1.137.186-.468.204-.984.057-1.464-.177-.576-.594-1.035-1.161-1.272a2.418 2.418 0 0 0-.477-.207v.009z" />
          </svg>
        )
      };
    case 'python':
      return {
        role: 'Python',
        icon: (
          <svg className="w-full h-full text-[#3776ab]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.956 0c-3.235 0-3.036 1.4-3.036 1.4H12c1.722 0 3.125 1.403 3.125 3.125v2.5H19.5s3.125.102 3.125-3.036c0-3.138-3.036-3.989-6.073-3.989h-4.596z M4.5 4.875C1.362 4.875.5 5.726.5 8.864c0 3.138 1.4 3.036 1.4 3.036v-4.4c0-1.722 1.403-3.125 3.125-3.125H12V3.125H7.535C5.813 3.125 4.5 4.536 4.5 4.875zm9.5 4.625c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4 4.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z M19.5 12.125c1.722 0 3.125-1.411 3.125-3.125V6.75H12v1.25h4.465c1.722 0 3.035 1.411 3.035 3.125v1z M12 20.875c-1.722 0-3.125-1.403-3.125-3.125v-2.5H4.5S1.375 15.148 1.375 18.286c0 3.138 3.036 3.989 6.073 3.989h4.596c3.235 0 3.036-1.4 3.036-1.4H12z" />
          </svg>
        )
      };
    case 'c++':
      return {
        role: 'C++',
        icon: (
          <svg className="w-full h-full text-[#00599c]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-3H8v-2h3V8h2v3h3v2h-3v3z" />
          </svg>
        )
      };
    case 'sql':
      return {
        role: 'SQL',
        icon: (
          <svg className="w-full h-full text-[#f29111]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
          </svg>
        )
      };
    case 'firebase':
      return {
        role: 'Firebase',
        icon: (
          <svg className="w-full h-full text-[#ffca28]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3.877 17.72L2.105 6.353a.53.53 0 0 1 .843-.497l3.856 3.65 6.945-6.945a.53.53 0 0 1 .876.242l1.921 11.23-7.668 4.316a1.06 1.06 0 0 1-1.02 0L3.877 17.72z" />
          </svg>
        )
      };
    case 'mongodb':
      return {
        role: 'MongoDB',
        icon: (
          <svg className="w-full h-full text-[#47a248]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c-.17 0-.32.07-.44.18L6.44 7.3c-.63.63-1.02 1.48-1.02 2.42 0 1.25.68 2.34 1.7 2.92l4.44 2.56c.12.07.27.1.44.1.17 0 .32-.03.44-.1l4.44-2.56c1.02-.58 1.7-1.67 1.7-2.92 0-.94-.39-1.79-1.02-2.42l-5.12-5.12c-.12-.11-.27-.18-.44-.18z" />
          </svg>
        )
      };
    case 'postgresql':
      return {
        role: 'PostgreSQL',
        icon: (
          <svg className="w-full h-full text-[#336791]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.012 2c-.172 0-.342.015-.51.042-4.148.666-6.84 4.417-6.84 8.784v1.89h1.89c.17 0 .34-.015.51-.042 4.148-.666 6.84-4.417 6.84-8.784V2h-1.89zm2.464 12.012H12.59v2.464h1.886v-2.464zm-4.928 0H7.662v2.464H9.55v-2.464zm4.928-4.928H12.59v2.464h1.886v-2.464zm-4.928 0H7.662v2.464H9.55v-2.464z" />
          </svg>
        )
      };
    case 'express.js':
      return {
        role: 'Express.js',
        icon: (
          <svg className="w-full h-full text-foreground dark:text-neutral-300" viewBox="0 0 24 24" fill="currentColor">
            <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="black" fontFamily="monospace">Ex</text>
          </svg>
        )
      };
    case 'node.js':
      return {
        role: 'Node.js',
        icon: (
          <svg className="w-full h-full text-[#339933]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L2.35 5.57v11.13L12 22.27l9.65-5.57V5.57L12 0zm7.65 15.6l-7.65 4.41-7.65-4.41V6.84l7.65-4.41 7.65 4.41v8.76z" />
          </svg>
        )
      };
    case 'flutter':
      return {
        role: 'Flutter',
        icon: (
          <svg className="w-full h-full text-[#02569b]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM11.684 12.316L6.5 17.5l5.184 5.184h7.37L13.868 12.316h-2.184z" />
          </svg>
        )
      };
    case 'dart':
      return {
        role: 'Dart',
        icon: (
          <svg className="w-full h-full text-[#00a3e0]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm8.5 16.5L12 21.5l-8.5-5V7.5L12 2.5l8.5 5v9z" />
          </svg>
        )
      };
    case 'git':
      return {
        role: 'Git',
        icon: (
          <svg className="w-full h-full text-[#f05032]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.384 11.41L12.59.616c-.82-.82-2.15-.82-2.97 0L8.51 1.73l3.14 3.14c.83-.28 1.77-.09 2.44.58.68.68.87 1.62.58 2.45l3.14 3.14c.83-.29 1.77-.1 2.45.58.91.91.91 2.39 0 3.3-.91.91-2.39.91-3.3 0-.68-.68-.87-1.62-.58-2.45L13.25 9.34c-.29.29-.68.45-1.1.45-.42 0-.81-.16-1.1-.45-.68-.68-.87-1.62-.58-2.45L7.33 3.75 1.25 9.83c-.82.82-.82 2.15 0 2.97l10.79 10.79c.82.82 2.15.82 2.97 0l8.37-8.37c.83-.83.83-2.16 0-2.97zM18.8 13.91c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z" />
          </svg>
        )
      };
    case 'github':
      return {
        role: 'GitHub',
        icon: (
          <svg className="w-full h-full text-foreground dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.435 22 12.017 22 6.484 17.522 2 12 2z" />
          </svg>
        )
      };
    case 'docker':
      return {
        role: 'Docker',
        icon: (
          <svg className="w-full h-full text-[#2496ed]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.763 9.932c-.303-.07-.727-.145-1.135-.214-1.255-.223-2.616-.486-3.279-1.21-.082-.09-.168-.189-.252-.297.382-1.4.112-2.721-1.045-3.398-.147-.086-.312-.132-.486-.132-.824 0-1.583.565-1.921 1.432-.089.23-.135.474-.135.727v.29c-.066.02-.134.037-.2.052-.781.182-1.469.742-1.745 1.5l-.048.132H.186c-.102 0-.186.084-.186.186v4.636c0 4.148 3.376 7.523 7.523 7.523h8.347c3.271 0 6.079-2.113 7.039-5.11 1.055-.562 1.341-2.222.854-3.52-.3-.802-.924-1.32-1.928-1.503z M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.906c0-.102-.084-.186-.186-.186h-2.119c-.103 0-.186.084-.186.186v1.987c0 .102.083.185.186.185m-2.954-5.43h2.118c.103 0 .185-.083.185-.186V3.475c0-.103-.082-.186-.185-.186h-2.118c-.103 0-.186.083-.186.186v1.987c0 .103.083.186.186.186m0 2.715h2.118c.103 0 .185-.083.185-.186V6.191c0-.103-.082-.186-.185-.186h-2.118c-.103 0-.186.083-.186.186v1.987c0 .103.083.186.186.186m-2.953 2.715h2.119c.102 0 .185-.083.185-.185V8.906c0-.102-.083-.186-.185-.186h-2.119c-.103 0-.186.084-.186.186v1.987c0 .102.083.185.186.185m0-2.715h2.119c.102 0 .185-.083.185-.186V6.191c0-.103-.083-.186-.185-.186h-2.119c-.103 0-.186.083-.186.186v1.987c0 .103.083.186.186.186m-2.955 2.715h2.119c.102 0 .185-.083.185-.185V8.906c0-.102-.083-.186-.185-.186h-2.119c-.103 0-.185.084-.185.186v1.987c0 .102.082.185.185.185m0-2.715h2.119c.102 0 .185-.083.185-.186V6.191c0-.103-.083-.186-.185-.186h-2.119c-.103 0-.185.083-.185.186v1.987c0 .103.082.186.185.186m-2.954 2.715h2.119c.102 0 .186-.083.186-.185V8.906c0-.102-.084-.186-.186-.186H5.218c-.103 0-.186.084-.186.186v1.987c0 .102.083.185.186.185z" />
          </svg>
        )
      };
    case 'arduino':
      return {
        role: 'Arduino',
        icon: (
          <svg className="w-full h-full text-[#00979d]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.5 7C5 7 3 9 3 11.5S5 16 7.5 16c1.6 0 3-.8 3.8-2.1C12.1 15.2 13.5 16 15.1 16c2.5 0 4.5-2 4.5-4.5S17.6 7 15.1 7c-1.6 0-3 .8-3.8 2.1C10.5 7.8 9.1 7 7.5 7zm0 1.5c1.4 0 2.6.9 3.1 2.2-.5 1.3-1.7 2.2-3.1 2.2-1.9 0-3.5-1.6-3.5-3.5S5.6 8.5 7.5 8.5zm7.6 0c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5c-1.4 0-2.6-.9-3.1-2.2.5-1.3 1.7-2.2 3.1-2.2zM6 11h3v1H6v-1zm10 0h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1z" />
          </svg>
        )
      };
    case 'vercel':
      return {
        role: 'Vercel',
        icon: (
          <svg className="w-full h-full text-foreground dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
        )
      };
    case 'netlify':
      return {
        role: 'Netlify',
        icon: (
          <svg className="w-full h-full text-[#00c7b7]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c-.17 0-.32.07-.44.18l-5.12 5.12c-.12.12-.18.27-.18.44V16c0 .17.07.32.18.44l5.12 5.12c.12.12.27.18.44.18s.32-.07.44-.18l5.12-5.12c.12-.12.18-.27.18-.44V7.74c0-.17-.07-.32-.18-.44l-5.12-5.12c-.12-.11-.27-.18-.44-.18zm0 2.5l3.5 3.5H8.5L12 4.5zm-3.5 5h7v5h-7v-5z" />
          </svg>
        )
      };
    case 'stripe':
      return {
        role: 'Stripe',
        icon: (
          <svg className="w-full h-full text-[#6772e5]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.962 10.435c0-1.124-.916-1.573-2.457-1.573-1.892 0-3.328.79-3.328 2.052 0 2.766 7.644 1.185 7.644 5.922 0 3.255-2.906 4.316-6.177 4.316-2.585 0-4.992-.81-5.748-1.523v-3.704c.854.767 3.018 1.48 4.793 1.48 1.637 0 2.502-.68 2.502-1.745 0-2.825-7.644-1.295-7.644-5.845 0-3.056 2.656-4.228 5.762-4.228 2.25 0 4.154.58 4.953 1.124v3.724z" />
          </svg>
        )
      };
    case 'postman':
      return {
        role: 'Postman',
        icon: (
          <svg className="w-full h-full text-[#ff6c37]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5zm4 4h-2v-5h2v5zm0-7h-2V7h2v2z" />
          </svg>
        )
      };
    default:
      return {
        role: name,
        icon: (
          <svg className="w-full h-full text-[#e27500]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M21 12H3M12 3v18" />
          </svg>
        )
      };
  }
};

/* ── Data ──────────────────────────────────────────────────────────── */
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="w-5 h-5 text-[#e27500]" />,
    speedClass: 'marquee-scroll-left',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'Tailwind CSS', 'Bootstrap', 'Vite', 'npm']
  },
  {
    title: 'Backend Development',
    icon: <Database className="w-5 h-5 text-[#e27500]" />,
    speedClass: 'marquee-scroll-right',
    skills: ['Node.js', 'Express.js', 'Java', 'Python', 'C++', 'SQL', 'PostgreSQL', 'MongoDB', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="w-5 h-5 text-[#e27500]" />,
    speedClass: 'marquee-scroll-left',
    skills: ['Flutter', 'Dart', 'Android Studio', 'Firebase', 'VS Code']
  },
  {
    title: 'DevOps, Hardware & Tools',
    icon: <Settings className="w-5 h-5 text-[#e27500]" />,
    speedClass: 'marquee-scroll-right',
    skills: ['Git', 'GitHub', 'Docker', 'Arduino', 'Vercel', 'Netlify', 'Stripe', 'Postman']
  }
];

const softSkills = [
  'Problem Solving',
  'Analytical Skills', 
  'Team Collaboration',
  'Communication',
  'Adaptability',
  'Eagerness to Learn',
  'Time Management',
  'Organization',
  'Attention to Detail'
];

/* ── Main component ────────────────────────────────────────────────── */
const SkillsSection = () => {
  const headerRef = useScrollReveal({ threshold: 0.2 });
  const trackRef = useScrollReveal({ threshold: 0.1, delay: 100 });
  const softRef = useScrollReveal({ threshold: 0.1, delay: 200 });

  return (
    <section id="skills" className="py-24 md:py-32 bg-background border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="section-reveal mb-16 md:mb-24">
          <span className="text-[#e27500] text-xs font-bold uppercase tracking-widest block mb-3">Skills & Toolkit</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tighter text-foreground">
            My Expertise
          </h2>
        </div>

        {/* Technical Marquee Tracks */}
        <div ref={trackRef as React.RefObject<HTMLDivElement>} className="section-reveal space-y-12">
          {skillCategories.map((category, catIdx) => {
            // Duplicate the list of skills to support seamless looping transition
            const duplicatedSkills = [...category.skills, ...category.skills, ...category.skills];
            
            return (
              <div key={catIdx} className="space-y-4">
                <div className="flex items-center gap-2 px-1">
                  <div className="bg-[#e27500]/10 border border-[#e27500]/20 p-1.5 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="marquee-container">
                  <div className={`marquee-content ${category.speedClass}`}>
                    {duplicatedSkills.map((skill, idx) => {
                      const info = getTechInfo(skill);
                      return (
                        <div key={idx} className="tech-pill group">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                            {info.icon}
                          </div>
                          <span className="font-semibold text-xs sm:text-sm tracking-wide">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <div ref={softRef as React.RefObject<HTMLDivElement>} className="section-reveal mt-20">
          <div className="rounded-[2rem] bg-card border border-border/40 p-8 shadow-sm relative overflow-hidden">

            <h3 className="text-lg font-bold font-heading tracking-tight mb-8 text-center text-foreground uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e27500] animate-pulse" />
              Auxiliary Cores // Soft Skills & Qualities
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 border border-border/60 bg-background text-foreground hover:bg-[#e27500]/5 hover:border-[#e27500] transition-all duration-300 py-2.5 px-5 text-xs font-bold uppercase tracking-wider rounded-full hover:shadow-[0_0_10px_rgba(226,117,0,0.1)] group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e27500]/40 group-hover:bg-[#e27500] transition-colors" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;