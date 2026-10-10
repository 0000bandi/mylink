"use client";

import { useState } from "react";
import {
  Mail,
  ExternalLink,
  Sparkles,
  Heart,
  Code2,
  Layers,
  GraduationCap,
  Copy,
  Check,
  MapPin,
  Laptop,
} from "lucide-react";

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

export default function ProfilePage() {
  const [likes, setLikes] = useState(42);
  const [liked, setLiked] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const links = [
    {
      title: "GitHub 저장소",
      desc: "프로젝트 코드와 커밋 기록 구경하기",
      url: "https://github.com/0000bandi",
      icon: GithubIcon,
      gradient: "from-zinc-800 to-zinc-950 text-white",
      bgHover: "hover:border-zinc-500",
    },
    {
      title: "기술 블로그",
      desc: "개발하며 배운 생각과 인사이트 기록",
      url: "https://velog.io",
      icon: Code2,
      gradient: "from-emerald-500 to-teal-600 text-white",
      bgHover: "hover:border-emerald-400",
    },
    {
      title: "포트폴리오 & 이력서",
      desc: "진행한 프로젝트와 상세 활동 내역",
      url: "#",
      icon: Layers,
      gradient: "from-blue-500 to-indigo-600 text-white",
      bgHover: "hover:border-blue-400",
    },
  ];

  const techStacks = [
    { name: "React", bg: "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800" },
    { name: "Next.js", bg: "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700" },
    { name: "TypeScript", bg: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800" },
    { name: "Tailwind CSS", bg: "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800" },
    { name: "Python", bg: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800" },
    { name: "Git & GitHub", bg: "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800" },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-hidden font-sans">
      {/* Decorative Aurora Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-400/25 dark:bg-indigo-600/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-pink-400/25 dark:bg-pink-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Glassmorphism Card */}
      <div className="w-full max-w-lg backdrop-blur-xl bg-white/85 dark:bg-zinc-900/85 rounded-3xl p-6 sm:p-9 shadow-2xl shadow-indigo-500/10 border border-white/60 dark:border-zinc-800/80 flex flex-col items-center space-y-7 transition-all">
        
        {/* Status Badge */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          성장하며 몰입하는 주니어 개발자
        </div>

        {/* Profile Avatar */}
        <div className="relative group">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-xl group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-indigo-500/15 to-purple-500/20 flex flex-col items-center justify-center">
                <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
                  다영
                </span>
              </div>
            </div>
          </div>
          <span className="absolute bottom-1 right-1 p-1.5 bg-white dark:bg-zinc-800 rounded-full shadow-md text-base border border-slate-100 dark:border-zinc-700">
            ✨
          </span>
        </div>

        {/* Name & Titles */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              이다영
            </h1>
            <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
              Dayoung Lee
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
              <Laptop className="w-3.5 h-3.5" /> Frontend & Web Developer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900">
              <GraduationCap className="w-3.5 h-3.5" /> 한양대학교
            </span>
          </div>
        </div>

        {/* Bio Card */}
        <div className="w-full p-4 rounded-2xl bg-slate-50/80 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-800 text-center">
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed break-keep">
            새로운 기술을 탐구하고 아이디어를 코드로 구현하는 것을 좋아합니다. 
            더 나은 사용자 경험과 클린 코드를 고민하며 꾸준히 성장하고 있습니다. 💻✨
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="w-full space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider px-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Tech Stack & Interests</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {techStacks.map((tech) => (
              <span
                key={tech.name}
                className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${tech.bg}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Links List */}
        <div className="w-full space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider px-1">
            <Layers className="w-3.5 h-3.5 text-purple-500" />
            <span>Connect & Links</span>
          </div>

          <div className="space-y-2.5">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/60 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${link.bgHover}`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${link.gradient} shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {link.title}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {link.desc}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Interactive Actions: Email Copy & Cheer Button */}
        <div className="w-full pt-2 flex flex-col sm:flex-row items-center gap-2.5">
          {/* Email Copy Button */}
          <button
            onClick={handleCopyEmail}
            className="w-full sm:flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-750 transition-colors shadow-xs active:scale-95 cursor-pointer"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">이메일 복사 완료!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                <span>이메일 주소 복사</span>
                <Copy className="w-3 h-3 text-zinc-400 ml-0.5" />
              </>
            )}
          </button>

          {/* Cheer Like Button */}
          <button
            onClick={handleLike}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all shadow-xs active:scale-95 cursor-pointer ${
              liked
                ? "bg-rose-500 text-white shadow-rose-500/20"
                : "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50 hover:bg-rose-100 dark:hover:bg-rose-900/30"
            }`}
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                liked ? "fill-white" : "fill-rose-500 text-rose-500 animate-pulse"
              }`}
            />
            <span>응원하기</span>
            <span className="font-bold ml-0.5">{likes}</span>
          </button>
        </div>

        {/* Footer */}
        <div className="w-full pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500 gap-2">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>Seoul, Republic of Korea</span>
          </div>
          <span>© 2026 Dayoung Lee. All rights reserved.</span>
        </div>
      </div>
    </main>
  );
}
