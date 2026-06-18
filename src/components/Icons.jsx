export const OysterIcon = ({ className = "w-8 h-8 text-[#4DEEEA] transition-transform duration-500 hover:scale-110 hover:rotate-3 drop-shadow-[0_0_6px_#4DEEEA] animate-pulse" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="oysterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4DEEEA" />
        <stop offset="100%" stopColor="#00FFFF" />
      </linearGradient>
    </defs>
    <path d="M12 3c-4.5 0-8 3-8 9 0 4 2 7 5 9 1 .5 2 1 3 1s2-.5 3-1c3-2 5-5 5-9 0-6-3.5-9-8-9z" stroke="url(#oysterGrad)" />
    <path d="M12 6c-3 0-5 2-5 6 0 3 1.5 5 3.5 6.5.5.3 1 .5 1.5.5s1-.2 1.5-.5c2-1.5 3.5-3.5 3.5-6.5 0-4-2-6-5-6z" opacity="0.7" fill="url(#oysterGrad)" />
    <path d="M12 9c-1.5 0-2.5 1-2.5 3 0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-2-1-3-2.5-3z" fill="url(#oysterGrad)" fillOpacity="0.2" />
    <circle cx="12" cy="12" r="1.5" fill="url(#oysterGrad)" />
  </svg>
);

export const Facebook = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Instagram = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Youtube = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);
