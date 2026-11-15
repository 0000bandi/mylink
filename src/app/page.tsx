"use client";

import { useState } from "react";
import {
  Heart,
  Search,
  Check,
  Copy,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Globe,
  ShoppingBag,
} from "lucide-react";

function NikeSwoosh({ className = "w-14 h-6 text-[#111111]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 42" fill="currentColor">
      <path d="M117.8 0C100.2 13.9 83.1 23.3 64.9 28.3C49.9 32.4 34.6 32.7 20.3 27.6C12.7 24.9 6.3 20.8 1.4 15.3C0.3 14 0 13.5 0 14.7C0 17.5 2.7 23.1 6.5 27.3C13.2 34.7 22.8 39.4 34.6 41.2C45.2 42.8 57.6 41.3 71.5 36.7C88.6 31 104.9 20 119.5 4.3C120.4 3.3 120.2 2 119.5 1.1C119 0.5 118.4 0.1 117.8 0Z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function NikeProfilePage() {
  const [likes, setLikes] = useState(1972); // 1972: Nike founded year easter egg
  const [liked, setLiked] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL STACKS");

  const handleLike = () => {
    setLikes((prev) => prev + (liked ? -1 : 1));
    setLiked(!liked);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dayoung@example.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const filters = ["ALL STACKS", "FRONTEND", "SYSTEM", "DEV TOOLS"];

  const products = [
    {
      id: "prod-1",
      name: "React 19 & Next.js 16",
      category: "Full-Stack Web Architecture",
      badge: "JUST IN",
      price: "100% PRODUCTION READY",
      sale: false,
      swatches: ["#111111", "#f5f5f5", "#007d48"],
      tag: "FRONTEND",
      desc: "Zero-latency server components, streaming rendering, and robust state management for athlete-grade web experiences.",
    },
    {
      id: "prod-2",
      name: "TypeScript (Strict Mode)",
      category: "Static Type Engine",
      badge: "ESSENTIAL",
      price: "ZERO DEFECT DESIGN",
      sale: false,
      swatches: ["#1151ff", "#111111"],
      tag: "SYSTEM",
      desc: "Bulletproof compile-time safety and self-documenting code contracts that scale seamlessly under heavy workloads.",
    },
    {
      id: "prod-3",
      name: "Tailwind CSS Design System",
      category: "Fluid Responsive Styling",
      badge: "FEATURED",
      price: "FREE FOR MEMBERS",
      sale: true,
      origPrice: "COMPLEX CSS",
      swatches: ["#0a7281", "#111111", "#f5f5f5"],
      tag: "FRONTEND",
      desc: "Pure utility-first layout precision. Zero decorative fluff, mathematical 8px alignment, and micro-interaction polish.",
    },
    {
      id: "prod-4",
      name: "Python & Git Workflow",
      category: "Automation & Version Control",
      badge: "CORE GEAR",
      price: "CONTINUOUS DELIVERY",
      sale: false,
      swatches: ["#111111", "#cacacb"],
      tag: "DEV TOOLS",
      desc: "Algorithmic thinking, clean commit history, and rapid automation scripting built to conquer complex problems.",
    },
  ];

  const filteredProducts =
    activeFilter === "ALL STACKS"
      ? products
      : products.filter((p) => p.tag === activeFilter);

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased selection:bg-[#111111] selection:text-white">
      
      {/* 1. Nike Utility Top Bar (Height ~36px, bg #f5f5f5) */}
      <div className="w-full bg-[#f5f5f5] text-[#111111] text-[12px] font-medium h-9 px-4 sm:px-12 flex items-center justify-between border-b border-[#e5e5e5]">
        <div className="flex items-center gap-4 text-[#707072]">
          <span className="font-semibold text-[#111111]">DAYOUNG LEE</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">HANYANG UNIVERSITY</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">SEOUL, KR</span>
        </div>
        <div className="flex items-center gap-4 font-medium text-[12px]">
          <a
            href="https://github.com/0000bandi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#707072] transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://velog.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#707072] transition-colors"
          >
            Blog
          </a>
          <span>·</span>
          <button
            onClick={handleCopyEmail}
            className="hover:text-[#707072] transition-colors cursor-pointer"
          >
            {copiedEmail ? "Copied" : "Contact"}
          </button>
        </div>
      </div>

      {/* 2. Nike Primary Nav (56-64px, White canvas, zero radius) */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-12 h-16 flex items-center justify-between">
          
          {/* Logo / Nike Swoosh */}
          <div className="flex items-center gap-3">
            <NikeSwoosh className="w-14 sm:w-16 h-7 text-[#111111]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#707072] hidden md:inline">
              ENGINEER EDITION
            </span>
          </div>

          {/* Centered Primary Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-[16px] text-[#111111]">
            <a href="#hero" className="hover:text-[#707072] transition-colors">
              New & Featured
            </a>
            <a href="#stacks" className="hover:text-[#707072] transition-colors border-b-2 border-[#111111] pb-0.5">
              Tech Stack
            </a>
            <a href="#editorial" className="hover:text-[#707072] transition-colors">
              Projects
            </a>
            <a href="#member" className="hover:text-[#707072] transition-colors">
              Membership
            </a>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            {/* Search Pill */}
            <div className="hidden sm:flex items-center bg-[#f5f5f5] rounded-full px-4 py-2 h-10 w-44 lg:w-56 text-[#707072] text-[14px]">
              <Search className="w-4 h-4 mr-2 text-[#111111]" />
              <span className="truncate">Search skills</span>
            </div>

            {/* Circular Heart Button */}
            <button
              onClick={handleLike}
              aria-label="Favorite"
              className="w-10 h-10 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center text-[#111111] transition-all active:scale-95 cursor-pointer relative"
            >
              <Heart
                className={`w-4 h-4 ${
                  liked ? "fill-[#d30005] text-[#d30005]" : "text-[#111111]"
                }`}
              />
              {liked && (
                <span className="absolute -top-1 -right-1 bg-[#111111] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  1
                </span>
              )}
            </button>

            {/* GitHub Primary Pill Button */}
            <a
              href="https://github.com/0000bandi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] hover:bg-[#333333] text-white text-[14px] font-medium px-5 py-2.5 rounded-full transition-all active:scale-95 flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span className="hidden xs:inline">GitHub</span>
            </a>
          </div>

        </div>
      </header>

      {/* 3. Sub-Nav Strip (PLP Style Hairline) */}
      <div className="border-b border-[#e5e5e5] bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-12 py-3 flex items-center justify-between text-[14px] text-[#707072]">
          <div className="flex items-center gap-2">
            <span>Engineering</span>
            <span>/</span>
            <span>Hanyang Univ</span>
            <span>/</span>
            <span className="text-[#111111] font-medium">Dayoung Lee</span>
          </div>
          <div className="flex items-center gap-4 text-[#111111] font-medium text-[14px]">
            <span className="hidden sm:inline text-[#707072]">
              {products.length} Stacks Available
            </span>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1 hover:text-[#707072] cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-[#007d48]" />
                  <span className="text-[#007d48]">Copied Email</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Editorial Campaign Hero: Towering Futura Display Lockup burned into imagery */}
      <section id="hero" className="max-w-[1440px] mx-auto px-4 sm:px-12 pt-8 pb-12">
        <div className="relative w-full bg-[#111111] text-white overflow-hidden rounded-none min-h-[460px] sm:min-h-[560px] lg:min-h-[640px] flex flex-col justify-end p-6 sm:p-12 lg:p-16">
          
          {/* Background Stage: High-contrast athletic coder perspective */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/80 to-zinc-900 pointer-events-none" />
          
          {/* Geometric Accent Line */}
          <div className="absolute top-8 left-8 sm:left-12 text-xs font-mono font-bold tracking-widest text-[#707072] uppercase">
            DAYOUNG LEE // SS26 ARCHIVE
          </div>

          <div className="relative z-10 max-w-4xl space-y-4 sm:space-y-6">
            
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#9e9ea0]">
              JUNIOR SOFTWARE ENGINEER · WEB & FRONTEND
            </p>

            {/* Towering 96px Futura Display Campaign Lockup */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.88] text-white">
              BUILT TO
              <br />
              CREATE.
            </h1>

            <p className="text-base sm:text-xl text-[#cacacb] max-w-xl font-normal leading-relaxed pt-2">
              타협 없는 기준과 수학적 정밀함으로,
              <br />
              아이디어를 실제로 동작하는 코드로 전환합니다.
            </p>

            {/* Action Pill Pair */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#stacks"
                className="bg-white hover:bg-[#f5f5f5] text-[#111111] text-[16px] font-medium px-8 py-3.5 rounded-full transition-all active:scale-95"
              >
                Explore Skills
              </a>

              <a
                href="https://github.com/0000bandi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/10 text-white border border-white text-[16px] font-medium px-8 py-3.5 rounded-full transition-all active:scale-95"
              >
                GitHub Profile
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Filter Strip (Nike Filter Chips) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-12 py-4">
        <div className="flex items-center justify-between pb-4 border-b border-[#e5e5e5]">
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight uppercase text-[#111111]">
            Featured Technologies ({filteredProducts.length})
          </h2>
          
          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-[14px] font-medium px-4 py-2 rounded-full border transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                    isActive
                      ? "bg-[#111111] text-white border-[#111111]"
                      : "bg-white text-[#111111] border-[#cacacb] hover:border-[#111111]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Product Card Grid: 1:1 on #f5f5f5, zero radius, zero shadow */}
      <section id="stacks" className="max-w-[1440px] mx-auto px-4 sm:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col rounded-none bg-white">
              
              {/* Product Image Area on Soft Cloud #f5f5f5 (1:1 Ratio) */}
              <div className="relative w-full aspect-square bg-[#f5f5f5] flex flex-col items-center justify-center p-8 overflow-hidden rounded-none">
                
                {/* Promo Badge Top-Left */}
                <div className="absolute top-4 left-4 bg-white border border-[#cacacb] text-[#111111] text-[12px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.badge}
                </div>

                {/* Minimalist Graphic Representation */}
                <div className="w-full text-center space-y-2 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl sm:text-6xl font-black text-[#111111] tracking-tighter">
                    {product.name.split(" ")[0]}
                  </div>
                  <div className="text-xs font-mono font-bold tracking-widest text-[#707072] uppercase">
                    MODULAR STACK
                  </div>
                </div>

                {/* Bottom-right Quick Action */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </div>

              {/* Product Metadata directly below (No internal card padding, 8px gaps) */}
              <div className="pt-3 space-y-1.5">
                
                {/* Swatch Dots */}
                <div className="flex items-center gap-1.5 py-1">
                  {product.swatches.map((color, idx) => (
                    <span
                      key={idx}
                      className="w-3 h-3 rounded-full border border-[#cacacb] inline-block"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <span className="text-[12px] text-[#707072] ml-1 font-medium">
                    {product.swatches.length} Colors
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-[16px] font-medium text-[#111111] tracking-tight">
                  {product.name}
                </h3>

                {/* Category Subtitle */}
                <p className="text-[14px] text-[#707072] font-medium">
                  {product.category}
                </p>

                {/* Description */}
                <p className="text-[13px] text-[#707072] line-clamp-2 leading-relaxed pt-0.5">
                  {product.desc}
                </p>

                {/* Status / Price Row */}
                <div className="pt-1 text-[16px] font-medium">
                  {product.sale ? (
                    <div className="flex items-center gap-2">
                      <span className="text-[#d30005] font-semibold">{product.price}</span>
                      <span className="text-[#707072] line-through text-[14px]">
                        {product.origPrice}
                      </span>
                      <span className="text-[#d30005] text-[12px] font-bold">100% OFF</span>
                    </div>
                  ) : (
                    <span className="text-[#111111]">{product.price}</span>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 7. Full-Bleed Editorial Campaign Tile: "Never Settle" */}
      <section id="editorial" className="max-w-[1440px] mx-auto px-4 sm:px-12 py-12">
        <div className="relative w-full bg-[#111111] text-white p-8 sm:p-16 lg:p-20 overflow-hidden flex flex-col justify-end min-h-[380px] sm:min-h-[480px]">
          
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e9ea0]">
              ENGINEERING PHILOSOPHY
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
              SPEED. PRECISION.
              <br />
              CLEAN EXECUTION.
            </h2>

            <p className="text-sm sm:text-base text-[#cacacb] leading-relaxed max-w-lg">
              더 적은 코드로 더 많은 가치를 만듭니다. 복잡한 문제를 명확한 구조로 분해하고,
              사용자에게 가장 빠르고 매끄러운 경험을 전달합니다.
            </p>

            {/* Bottom-left White Pill on Image */}
            <div className="pt-4">
              <a
                href="https://github.com/0000bandi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white hover:bg-[#f5f5f5] text-[#111111] text-[14px] font-medium px-7 py-3 rounded-full transition-all active:scale-95"
              >
                <span>View Full Source Code</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Nike Membership Section: Member Benefits Grid */}
      <section id="member" className="max-w-[1440px] mx-auto px-4 sm:px-12 py-12 border-t border-[#e5e5e5]">
        <div className="space-y-6">
          
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight uppercase text-[#111111]">
              Developer Membership
            </h2>
            <div className="text-xs font-mono font-bold text-[#707072]">
              ID: DAYOUNG-2026-DEV
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Benefit Card 1 */}
            <div className="bg-[#f5f5f5] p-8 flex flex-col justify-between min-h-[260px]">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#707072]">
                  COMMUNICATION
                </span>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                  Direct Line & Email
                </h3>
                <p className="text-sm text-[#707072] leading-relaxed">
                  프로젝트 제안, 협업 문의, 커피챗 등 언제든 환영합니다.
                </p>
              </div>

              <button
                onClick={handleCopyEmail}
                className="mt-6 self-start bg-[#111111] hover:bg-[#333333] text-white text-xs font-medium px-5 py-2.5 rounded-full transition-all active:scale-95 cursor-pointer"
              >
                {copiedEmail ? "Email Copied!" : "Copy Contact"}
              </button>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-[#f5f5f5] p-8 flex flex-col justify-between min-h-[260px]">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#707072]">
                  CODE VAULT
                </span>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                  Public Repositories
                </h3>
                <p className="text-sm text-[#707072] leading-relaxed">
                  깃허브에서 모든 오픈소스 프로젝트와 실험적 코드를 둘러보세요.
                </p>
              </div>

              <a
                href="https://github.com/0000bandi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 self-start bg-[#111111] hover:bg-[#333333] text-white text-xs font-medium px-5 py-2.5 rounded-full transition-all active:scale-95"
              >
                Visit GitHub
              </a>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-[#f5f5f5] p-8 flex flex-col justify-between min-h-[260px]">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#707072]">
                  COMMUNITY CHEER
                </span>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                  Support the Builder
                </h3>
                <p className="text-sm text-[#707072] leading-relaxed">
                  현재 {likes}명의 개발자와 동료들이 응원을 보냈습니다.
                </p>
              </div>

              <button
                onClick={handleLike}
                className={`mt-6 self-start text-xs font-medium px-5 py-2.5 rounded-full transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 ${
                  liked
                    ? "bg-[#d30005] text-white"
                    : "bg-[#111111] text-white hover:bg-[#333333]"
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${liked ? "fill-white" : ""}`} />
                <span>{liked ? "Cheered! ❤️" : "Send Cheer"}</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 9. Nike 4-Column Footer with 1px Hairline */}
      <footer className="border-t border-[#cacacb] bg-white pt-14 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-12 space-y-12">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[14px]">
            
            <div className="space-y-3">
              <h4 className="font-bold text-[#111111] uppercase tracking-wide">
                Resources
              </h4>
              <ul className="space-y-2 text-[#707072] font-medium">
                <li><a href="https://github.com/0000bandi" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111]">GitHub Profile</a></li>
                <li><a href="https://velog.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111]">Engineering Blog</a></li>
                <li><a href="#" className="hover:text-[#111111]">Notion Resume</a></li>
                <li><a href="#" className="hover:text-[#111111]">Project Demos</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-[#111111] uppercase tracking-wide">
                Tech Stack
              </h4>
              <ul className="space-y-2 text-[#707072] font-medium">
                <li><span>Next.js 16 (App Router)</span></li>
                <li><span>React 19 & TypeScript</span></li>
                <li><span>Tailwind CSS v4</span></li>
                <li><span>Git & GitHub Actions</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-[#111111] uppercase tracking-wide">
                University
              </h4>
              <ul className="space-y-2 text-[#707072] font-medium">
                <li><span>Hanyang University</span></li>
                <li><span>Freshman Year</span></li>
                <li><span>Seoul, Republic of Korea</span></li>
                <li><span>Vibe Coding Course</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-[#111111] uppercase tracking-wide">
                Connect
              </h4>
              <ul className="space-y-2 text-[#707072] font-medium">
                <li><button onClick={handleCopyEmail} className="hover:text-[#111111] text-left">dayoung@example.com</button></li>
                <li><a href="https://github.com/0000bandi" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111]">@0000bandi</a></li>
                <li><span>Open to Collaboration</span></li>
              </ul>
            </div>

          </div>

          {/* Legal / Copyright Bottom Row */}
          <div className="pt-8 border-t border-[#e5e5e5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#707072] font-medium">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#111111]">© 2026 Dayoung Lee.</span>
              <span>All Rights Reserved. Inspired by Nike Commerce Design System.</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[#707072]">
              <span className="hover:text-[#111111] cursor-pointer">Terms of Code</span>
              <span>·</span>
              <span className="hover:text-[#111111] cursor-pointer">Privacy Policy</span>
              <span>·</span>
              <span className="hover:text-[#111111] cursor-pointer">Nike Design System Spec</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
