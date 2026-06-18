import React, { useState, useEffect } from 'react';
import {
  Dumbbell,
  Flame,
  Play,
  ArrowRight,
  Send,
  Menu,
  Trophy,
  Activity,
  HeartPulse,
  ChevronRight,
  ChevronDown,
  X
} from 'lucide-react';
import RightSlideIndicator from './components/RightSlideIndicator';
import { OysterIcon, Facebook, Instagram, Youtube } from './components/Icons';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [activeSlide, setActiveSlide] = useState('slide3');
  const [hoveredProgram, setHoveredProgram] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [contactTarget, setContactTarget] = useState('增肌與力量突破');
  const [showBookingModal, setShowBookingModal] = useState(false);

  const navLinks = [
    { name: 'MAIN', href: '#main' },
    { name: 'ABOUT COACH', href: '#about' },
    { name: 'PROGRAMS', href: '#programs' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'REVIEWS', href: '#reviews' }
  ];

  const slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        const currentIndex = slides.indexOf(prev);
        const nextIndex = (currentIndex + 1) % slides.length;
        return slides[nextIndex];
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  const features = [
    {
      id: 'coaching',
      title: 'ONE-ON-ONE COACHING',
      desc: '針對動作細節精準指導，確保安全與最大化訓練效益。',
      icon: <Dumbbell className="w-6 h-6 text-[#4DEEEA]" />,
      href: '#about',
      linkLabel: 'MEET COACH',
    },
    {
      id: 'nutrition',
      title: 'NUTRITION & PLAN',
      desc: '客製化飲食方針。追蹤每日宏量營養素，讓飲食與訓練達到完美協同。',
      icon: <Flame className="w-6 h-6 text-[#4DEEEA]" />,
      href: '#programs',
      linkLabel: 'VIEW PROGRAM',
    },
    {
      id: 'strength',
      title: 'STRENGTH & PR BREAK',
      desc: '力量與體能整合。突破你的 swing, lift 和 push 動作極限。',
      icon: <Trophy className="w-6 h-6 text-[#4DEEEA]" />,
      href: '#programs',
      linkLabel: 'VIEW PROGRAM',
    }
  ];

  const programs = [
    {
      id: 1,
      title: '重量力量訓練',
      sub: 'STRENGTH TRAINING',
      img: './images/2.jpg',
      desc: '專注於多關節複合動作（深蹲、硬舉、臥推），打下堅實的力量基礎。',
      tag: 'YOU CAN.'
    },
    {
      id: 2,
      title: '體能與核心突破',
      sub: 'CORE & CONDITIONING',
      img: './images/3.jpg',
      desc: '結合高強度間歇與核心抗阻，全面提升體能，穩固下肢與核心力量。',
      tag: 'YOU DO YOUR THING. WE\'LL DO OURS.',
      featured: true // 帶有發光邊框
    },
    {
      id: 3,
      title: '專注心流訓練',
      sub: 'HYPER FOCUS WORKOUT',
      img: './images/4.jpg',
      desc: '排除一切外界雜音，在教練引導下進入極致心流，完全專注於每一次的肌肉收縮。',
      tag: 'FOCUS'
    },
    {
      id: 4,
      title: '減脂與體態雕塑',
      sub: 'FAT LOSS & BODY SCULPT',
      img: './images/6.jpg',
      desc: '結合燃脂訓練與體態塑形，打造流暢線條與更堅實的核心穩定性。',
      tag: 'SCULPT'
    }
  ];

  const galleryVideos = [
    {
      id: 1,
      title: 'Deadlift Mastery',
      duration: '03:45',
      bg: './images/2.jpg',
      size: 'col-span-2 row-span-2',
      url: 'https://www.youtube.com/embed/M7lc1UVf-VE?rel=0'
    },
    {
      id: 2,
      title: 'Kettlebell Flow',
      duration: '02:15',
      bg: './images/3.jpg',
      size: 'col-span-1 row-span-1',
      url: 'https://www.youtube.com/embed/M7lc1UVf-VE?rel=0'
    },
    {
      id: 3,
      title: 'Gym Atmosphere',
      duration: '05:00',
      bg: './images/1.jpg',
      size: 'col-span-1 row-span-2',
      url: 'https://www.youtube.com/embed/M7lc1UVf-VE?rel=0'
    },
    {
      id: 4,
      title: 'Mindset & Focus',
      duration: '01:30',
      bg: './images/4.jpg',
      size: 'col-span-1 row-span-1',
      url: 'https://www.youtube.com/embed/M7lc1UVf-VE?rel=0'
    },
    {
      id: 5,
      title: 'Squat Technique',
      duration: '04:10',
      bg: './images/3.jpg',
      size: 'col-span-1 row-span-1',
      url: 'https://www.youtube.com/embed/M7lc1UVf-VE?rel=0'
    },
    {
      id: 6,
      title: 'Barbell Setup',
      duration: '02:50',
      bg: './images/2.jpg',
      size: 'col-span-1 row-span-1',
      url: 'https://www.youtube.com/embed/M7lc1UVf-VE?rel=0'
    }
  ];

  const handlePlayVideo = (video) => {
    setSelectedVideo(video);
    setShowVideoModal(true);
  };

  const handleJoinProgram = (programTitle) => {
    const targetMap = {
      '重量力量訓練': '增肌與力量突破',
      '體能與核心突破': '體能與核心強化',
      '專注心流訓練': '專注與極致訓練',
      '減脂與體態雕塑': '減脂與體態雕塑'
    };

    if (targetMap[programTitle]) {
      setContactTarget(targetMap[programTitle]);
    }

    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#4DEEEA] selection:text-black">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-header transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#main" className="flex items-center gap-2 group">
            <OysterIcon className="w-8 h-8 text-[#4DEEEA] transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold tracking-wider font-display text-white group-hover:text-[#4DEEEA] transition-colors">
              OYSTER<span className="text-[#4DEEEA]">FITNESS</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-widest text-gray-300 hover:text-[#4DEEEA] font-semibold transition-colors duration-250"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowBookingModal(true)}
              className="hidden md:inline-block px-5 py-2 border border-[#4DEEEA]/50 text-[#4DEEEA] text-xs font-bold tracking-widest hover:bg-[#4DEEEA] hover:text-black hover:shadow-neon hover:border-[#4DEEEA] transition-all duration-300 uppercase cursor-pointer"
            >
              Book Now
            </button>
            <button
              className="md:hidden text-gray-300 hover:text-[#4DEEEA] transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0A0A0A]/95 border-b border-white/5 backdrop-blur-lg px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base tracking-widest text-gray-300 hover:text-[#4DEEEA] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="main" className="relative min-h-screen flex flex-col justify-between pt-20 overflow-hidden">
        {/* Background Image with Dark Overlays */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide) => {
            const isCurrent = activeSlide === slide;
            return (
              <img
                key={slide}
                src={`./images/slides/${slide}.jpg`}
                alt={`Gym Slide ${slide}`}
                className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-75 contrast-125 transition-all duration-1000 ease-in-out ${isCurrent ? 'opacity-80 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                  }`}
              />
            );
          })}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-[#050505]/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-[#050505]/30"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow flex items-center py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <Activity className="w-4 h-4 text-[#4DEEEA] animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-gray-300">PROFESSIONAL COACHING</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-[#4DEEEA] leading-none uppercase">
                  TIME TO TRAIN
                </h1>
                <p className="text-2xl sm:text-3xl font-bold font-display tracking-widest text-white/90">
                  YOU CAN.
                </p>
              </div>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed font-light">
                我們不只鍛鍊身體，更重塑你的意志。無論你的目標是增肌、減脂還是突破力量極限，生蠔教練課程將為你量身打造專屬的訓練與營養方案，帶領你突破每一次個人最佳紀錄 (PR)。
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="px-8 py-4 bg-[#4DEEEA] text-black font-bold tracking-widest rounded-none shadow-neon hover:shadow-neon-strong hover:bg-white transition-all duration-300 uppercase flex items-center gap-2 group"
                >
                  Get Started Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => handlePlayVideo({ title: 'Flash Fitness Intro' })}
                  className="px-8 py-4 border border-white/20 hover:border-[#4DEEEA]/50 hover:bg-white/5 text-white font-bold tracking-widest transition-all duration-300 uppercase flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white text-white" /> Watch Intro
                </button>
              </div>
            </div>

            {/* Right Slide Indicator */}
            <RightSlideIndicator
              slides={slides}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="relative z-10 w-full border-t border-white/5 bg-[#050505]/80 backdrop-blur-md py-8">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat) => (
              <div key={feat.id} className="flex gap-5 group items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-[#4DEEEA]/10 group-hover:border-[#4DEEEA]/30 transition-all duration-300">
                  {feat.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold tracking-widest font-display text-white group-hover:text-[#4DEEEA] transition-colors uppercase">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {feat.desc}
                  </p>
                  <a href={feat.href} className="inline-flex items-center gap-1 text-[11px] text-[#4DEEEA] hover:underline pt-1">
                    {feat.linkLabel} <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Coach Section ── */}
      <section id="about" className="relative py-28 bg-[#050505] overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#4DEEEA]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center space-y-3 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-2">
              <HeartPulse className="w-4 h-4 text-[#4DEEEA] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-gray-300">MEET YOUR COACH</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-wider text-[#4DEEEA] uppercase">
              ABOUT COACH
            </h2>
            <div className="w-16 h-[2px] bg-[#4DEEEA] mx-auto" />
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left — Photo & Stats */}
            <div className="lg:col-span-5 flex flex-col items-center gap-8">
              {/* Photo Frame */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#4DEEEA]/40 via-transparent to-[#4DEEEA]/10 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-[#4DEEEA]/20">
                  <img
                    src="./images/me.png"
                    alt="Coach Oyster"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                  {/* Name Tag */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-md border border-[#4DEEEA]/20 rounded-xl px-4 py-3">
                      <p className="text-lg font-bold font-display tracking-widest text-white">COACH OYSTER</p>
                      <p className="text-xs text-[#4DEEEA] tracking-widest">認證私人健身教練</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                {[
                  { num: '8+', label: '年執教經驗' },
                  { num: '200+', label: '成功學員' },
                  { num: '95%', label: '學員續課率' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center p-4 bg-white/5 border border-white/8 rounded-xl hover:border-[#4DEEEA]/30 hover:bg-[#4DEEEA]/5 transition-all duration-300 group">
                    <span className="text-2xl font-bold text-[#4DEEEA] font-display group-hover:scale-110 transition-transform">{stat.num}</span>
                    <span className="text-[10px] text-gray-400 tracking-wider text-center mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="w-full max-w-sm space-y-2">
                <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">Certifications</p>
                {[
                  'NSCA 認證肌力與體能專家 (CSCS)',
                  'ACE 認證私人教練 (ACE-CPT)',
                  'FMS 功能性動作評估認證',
                  'Precision Nutrition 精準營養認證',
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4DEEEA] flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-xs text-gray-300 group-hover:text-white transition-colors">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Story & Philosophy */}
            <div className="lg:col-span-7 space-y-10">
              {/* Intro */}
              <div className="space-y-5">
                <h3 className="text-3xl font-bold font-display tracking-wider text-white leading-tight">
                  訓練，不只是流汗<br />
                  <span className="text-[#4DEEEA]">是找回你熱愛生活的方式</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  嗨！我是<span className="text-[#4DEEEA] font-semibold">生蠔教練</span>，一位深信「訓練是生活的加速器，而非折磨器」的健身教練。我曾是個對運動毫無感覺的普通人，直到某一天，我在深蹲架旁第一次感受到肌肉完全收縮帶來的驚人愉悅感。那一刻，改變了我的人生。
                </p>
                <p className="text-gray-300 leading-relaxed text-base">
                  從那之後，我花了 <span className="text-white font-semibold">8 年以上</span>的時間深研運動科學、人體力學與精準營養，並帶領超過 <span className="text-white font-semibold">200 位學員</span>，從「完全不運動」到「愛上鋼鐵」。我的信條很簡單：<em className="text-[#4DEEEA]">強壯的身體，才能去追你真正想要的生活。</em>
                </p>
              </div>

              {/* Philosophy Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  {
                    emoji: '💪',
                    title: '科學訓練',
                    desc: '每個動作都有依據，讓你每一滴汗水都物盡其用，安全有效不走冤枉路。',
                  },
                  {
                    emoji: '🥗',
                    title: '飲食不忌口',
                    desc: '我不相信痛苦的節食法。吃對不吃少，讓你從內而外感受真正的能量充沛。',
                  },
                  {
                    emoji: '🌊',
                    title: '樂活心態',
                    desc: '訓練是為了讓你享受生活：攀山、衝浪、抱孩子，隨心所欲，體力永遠不是障礙。',
                  },
                ].map((card) => (
                  <div key={card.title} className="group p-5 bg-white/3 border border-white/8 rounded-xl hover:border-[#4DEEEA]/30 hover:bg-[#4DEEEA]/5 transition-all duration-300 space-y-2">
                    <span className="text-3xl block group-hover:scale-110 transition-transform">{card.emoji}</span>
                    <h4 className="text-sm font-bold tracking-widest text-white font-display uppercase">{card.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="border-l-4 border-[#4DEEEA] pl-6 py-3 bg-[#4DEEEA]/5 rounded-r-xl">
                <p className="text-gray-200 italic leading-relaxed text-sm">
                  「我最喜歡的事，就是看著學員在第一次站上槓後，眼神裡那道光。那不是累的眼神，而是<span className="text-[#4DEEEA] not-italic font-semibold">發現自己更強了</span>的眼神。那一刻，值得我做這一切。」
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-3 font-display">—— COACH  OYSTER</p>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="px-8 py-4 bg-[#4DEEEA] text-black font-bold tracking-widest shadow-neon hover:shadow-neon-strong hover:bg-white transition-all duration-300 uppercase flex items-center gap-2 group"
                >
                  預約免費評估課程
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://www.instagram.com/kingoyster_lifit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-white/20 hover:border-[#4DEEEA]/50 hover:bg-white/5 text-white font-bold tracking-widest transition-all duration-300 uppercase flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" /> 追蹤 IG
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="relative py-24 bg-[#080808] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-wider text-[#4DEEEA] uppercase">
              POPULAR PROGRAMS
            </h2>
            <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
              Choose your path to strength and health.
            </p>
            <div className="w-16 h-[2px] bg-[#4DEEEA] mx-auto pt-1"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((prog) => (
              <div
                key={prog.id}
                onMouseEnter={() => setHoveredProgram(prog.id)}
                onMouseLeave={() => setHoveredProgram(null)}
                className={`relative rounded-xl overflow-hidden glass-card group transition-all duration-300 flex flex-col h-[480px] ${prog.featured
                  ? 'border-[#4DEEEA]/40 shadow-neon scale-102 z-10'
                  : 'hover:border-white/20'
                  }`}
              >
                {/* Tag Overlay */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-[10px] font-bold tracking-widest bg-black/75 border border-white/10 text-white px-2.5 py-1 rounded-full uppercase">
                    {prog.id === 2 ? '🔥 HOT' : 'COACHING'}
                  </span>
                </div>

                {/* Card Background / Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={prog.img}
                    alt={prog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30"></div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-widest text-[#4DEEEA] font-display uppercase">
                      {prog.sub}
                    </span>
                    <h3 className="text-xl font-bold tracking-wide text-white group-hover:text-[#4DEEEA] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2 min-w-0">
                    <span className="text-[10px] italic text-gray-500 truncate min-w-0 flex-grow">
                      "{prog.tag}"
                    </span>
                    <button
                      onClick={() => handleJoinProgram(prog.title)}
                      className="px-3 py-1.5 text-xs font-bold tracking-widest border border-[#4DEEEA]/40 text-[#4DEEEA] hover:border-[#4DEEEA] hover:bg-[#4DEEEA] hover:text-black hover:shadow-neon transition-all duration-300 flex items-center gap-1 group/btn cursor-pointer flex-shrink-0 whitespace-nowrap"
                    >
                      JOIN NOW <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Guides Section */}
      <section id="gallery" className="relative py-24 overflow-hidden">
        {/* Decorative background forest overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <img src="./images/3.jpg" alt="Watermark" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-wider text-[#4DEEEA] leading-tight uppercase">
                  DISCOVER YOUR STRENGTH IN A NEW WAY
                </h2>
                <div className="h-[2px] w-20 bg-[#4DEEEA]"></div>
              </div>

              {/* Watch Video Button */}
              <button
                onClick={() => handlePlayVideo({ title: 'Full Coaching System', url: 'https://www.youtube.com/embed/ysz5S6PUM-U' })}
                className="inline-flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-[#4DEEEA] group-hover:border-[#4DEEEA] group-hover:text-black transition-all duration-300">
                  <Play className="w-5 h-5 fill-current text-white group-hover:text-black ml-0.5" />
                </div>
                <span className="font-bold tracking-widest text-sm uppercase group-hover:text-[#4DEEEA] transition-colors">
                  WATCH THE WORKOUT
                </span>
              </button>

              {/* Coaching Quote */}
              <div className="border-l-2 border-[#4DEEEA] pl-6 py-2 space-y-2">
                <p className="text-sm text-gray-300 italic leading-relaxed">
                  「你有聽過鐵片在健身房裡碰撞的轟鳴聲嗎？在槓鈴重重落地的那一瞬間，周圍隨之迎來絕對的專注與寂靜。你將忘卻一切雜念與疲憊 —— 這就是 100% 的心流。此時此刻，只有你，與眼前的鋼鐵。」
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-display">
                  —— COACH OYSTER
                </p>
              </div>
            </div>

            {/* Right Video Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 gap-4 auto-rows-[160px]">
                {galleryVideos.map((vid) => (
                  <div
                    key={vid.id}
                    onClick={() => handlePlayVideo(vid)}
                    className={`${vid.size} relative group rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#4DEEEA]/40 transition-all duration-300`}
                  >
                    <img
                      src={vid.bg}
                      alt={vid.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>

                    {/* Play button hover overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#4DEEEA] group-hover:scale-110 transition-all duration-300">
                        <Play className="w-4 h-4 text-white group-hover:text-black fill-current ml-0.5" />
                      </div>
                      <span className="text-[10px] tracking-widest text-white/70 group-hover:text-[#4DEEEA] transition-colors mt-2 uppercase font-medium">
                        {vid.duration}
                      </span>
                    </div>

                    {/* Title overlay bottom */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-[11px] font-bold tracking-wider truncate text-white uppercase font-display bg-black/80 px-2 py-1 inline-block">
                        {vid.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="relative py-24 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-wider text-[#4DEEEA] uppercase">
            學員回饋
          </h2>
          <div className="w-16 h-[2px] bg-[#4DEEEA] mx-auto my-4" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Review 1 */}
            <div className="bg-[#0F0F0F] p-6 rounded-lg border border-white/5 hover:border-[#4DEEEA] transition-colors">
              <p className="text-gray-300 mb-4">
                「教練的專業與熱情讓我重新找回運動的樂趣，身體狀況顯著提升！」
              </p>
              <p className="text-[#4DEEEA] font-semibold">Alex Chen</p>
            </div>
            {/* Review 2 */}
            <div className="bg-[#0F0F0F] p-6 rounded-lg border border-white/5 hover:border-[#4DEEEA] transition-colors">
              <p className="text-gray-300 mb-4">
                「個人化營養與訓練計畫，讓我在短時間內看到明顯的變化，強烈推薦！」
              </p>
              <p className="text-[#4DEEEA] font-semibold">Maria Liu</p>
            </div>
            {/* Review 3 */}
            <div className="bg-[#0F0F0F] p-6 rounded-lg border border-white/5 hover:border-[#4DEEEA] transition-colors">
              <p className="text-gray-300 mb-4">
                「環境氛圍超棒，教練細心指導每個細節，讓我更有自信面對生活挑戰。」
              </p>
              <p className="text-[#4DEEEA] font-semibold">James Wang</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Copyright */}
          <div className="text-center md:text-left space-y-2">
            <a href="#main" className="flex items-center gap-2 group justify-center md:justify-start">
              <OysterIcon className="w-6 h-6 text-[#4DEEEA] transition-transform group-hover:scale-110" />
              <p className="text-lg font-bold font-display tracking-wider text-white group-hover:text-[#4DEEEA] transition-colors">
                OYSTER<span className="text-[#4DEEEA]">FITNESS</span>
              </p>
            </a>
            <p className="text-[11px] text-gray-600">
              &copy; {new Date().getFullYear()} OYSTER FITNESS. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/kingoyster_lifit" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-[#4DEEEA] hover:bg-white/10 transition-all" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61586149087406" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-[#4DEEEA] hover:bg-white/10 transition-all" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-[#4DEEEA] hover:bg-white/10 transition-all" aria-label="Youtube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Video Lightbox Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-4xl bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-[#4DEEEA] hover:text-black rounded-full transition-colors text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold tracking-wider text-[#4DEEEA] font-display uppercase">
                {selectedVideo?.title || 'WORKOUT DEMO'}
              </h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/5 bg-black">
                {selectedVideo?.url ? (
                  <iframe
                    src={selectedVideo.url}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
                    {selectedVideo?.bg && (
                      <img src={selectedVideo.bg} alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-20 filter blur-sm" />
                    )}
                    <div className="relative z-10 space-y-3">
                      <Play className="w-12 h-12 text-[#4DEEEA] mx-auto animate-pulse" />
                      <p className="text-sm text-gray-300">正在加載運動教學影片示範...</p>
                      <p className="text-xs text-gray-500">（請為影片新增 `url` 欄位，或啟用 YouTube 播放器）</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-lg bg-[#0A0A0A] border border-[#4DEEEA]/30 rounded-xl overflow-hidden shadow-2xl p-8 shadow-neon">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-[#4DEEEA] hover:text-black rounded-full transition-colors text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold tracking-wider text-[#4DEEEA] font-display uppercase">
                  Start Your Transformation
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  填寫下方表單，預約一對一教練免費評估與體驗課程。
                </p>
                <div className="w-12 h-[2px] bg-[#4DEEEA] mx-auto"></div>
              </div>
              <form
                className="text-left space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("感謝您的預約！生蠔教練將盡快與您聯絡。");
                  setShowBookingModal(false);
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="輸入您的姓名"
                      className="w-full bg-[#0F0F0F] border border-white/10 px-4 py-3 text-sm focus:border-[#4DEEEA] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="輸入聯絡電話"
                      className="w-full bg-[#0F0F0F] border border-white/10 px-4 py-3 text-sm focus:border-[#4DEEEA] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Target</label>
                  <div className="relative">
                    <select
                      value={contactTarget}
                      onChange={(e) => setContactTarget(e.target.value)}
                      className="w-full appearance-none bg-[#0F0F0F] border border-white/10 pl-4 pr-10 py-3 text-sm focus:border-[#4DEEEA] focus:outline-none transition-colors text-gray-300 cursor-pointer"
                    >
                      <option value="增肌與力量突破">增肌與力量突破</option>
                      <option value="減脂與體態雕塑">減脂與體態雕塑</option>
                      <option value="體能與核心強化">體能與核心強化</option>
                      <option value="專注與極致訓練">專注與極致訓練</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#4DEEEA] text-black font-bold tracking-widest shadow-neon hover:shadow-neon-strong hover:bg-white transition-all duration-300 uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Request <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <ScrollToTop />
    </div>
  );
}
