export default function ProfilePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-950 p-6 text-zinc-900 dark:text-zinc-100">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-zinc-800 flex flex-col items-center text-center space-y-6">
        {/* Profile Avatar Container */}
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
            이다영
          </div>
          <span className="absolute bottom-0 right-0 text-xl">✨</span>
        </div>

        {/* Name and Tag */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">이다영</h1>
          <p className="text-xs font-medium px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-full inline-block">
            한양대학교 대학생
          </p>
        </div>

        {/* Bio */}
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base max-w-sm">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
        </p>

        {/* Action / Badges */}
        <div className="w-full pt-4 border-t border-slate-100 dark:border-zinc-800 flex justify-center items-center gap-3">
          <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-xs font-medium text-slate-700 dark:text-zinc-300">
            💻 바이브 코딩
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-xs font-medium text-slate-700 dark:text-zinc-300">
            🎓 한양대
          </span>
        </div>
      </div>
    </main>
  );
}
