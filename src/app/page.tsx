"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Sparkles,
  Link2,
  Share2,
  Copy,
  Check,
  ExternalLink,
  Globe,
  Mail,
  Plus,
  Trash2,
  GripVertical,
  Heart,
  Moon,
  Sun,
  Laptop,
  GraduationCap,
  TrendingUp,
  LayoutDashboard,
  Palette,
  Smartphone,
  Video,
} from "lucide-react";

function GithubIcon({ className = "size-4" }: { className?: string }) {
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

function YoutubeIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function MyLinkDesignSystemPage() {
  const [isDark, setIsDark] = useState(false);
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(128);
  const [hasLiked, setHasLiked] = useState(false);

  // Link list state for dashboard & profile
  const [links, setLinks] = useState([
    {
      id: "1",
      title: "2026 포트폴리오 노션 페이지",
      url: "https://notion.so/dayoung-portfolio",
      icon: "📂",
      isActive: true,
      clicks: 432,
    },
    {
      id: "2",
      title: "GitHub 프로젝트 & 오픈소스",
      url: "https://github.com/0000bandi",
      icon: "💻",
      isActive: true,
      clicks: 318,
    },
    {
      id: "3",
      title: "Velog 기술 블로그 (트러블슈팅 & 회고)",
      url: "https://velog.io",
      icon: "📝",
      isActive: true,
      clicks: 254,
    },
    {
      id: "4",
      title: "커피챗 신청 & 협업 문의하기",
      url: "mailto:dayoung@example.com",
      icon: "☕",
      isActive: true,
      clicks: 89,
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("https://mylink.io/@dayoung_dev");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;
    setLinks([
      ...links,
      {
        id: Date.now().toString(),
        title: newTitle,
        url: newUrl,
        icon: "🔗",
        isActive: true,
        clicks: 0,
      },
    ]);
    setNewTitle("");
    setNewUrl("");
  };

  const handleDeleteLink = (id: string) => {
    setLinks(links.filter((l) => l.id !== id));
  };

  const handleToggleLink = (id: string) => {
    setLinks(
      links.map((l) => (l.id === id ? { ...l, isActive: !l.isActive } : l))
    );
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300 antialiased font-sans">
        
        {/* Top Header Bar */}
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md px-4 sm:px-8 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            
            {/* Logo & Preset Info */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-9 rounded-2xl bg-primary text-primary-foreground font-black text-sm shadow-xs">
                ML
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-base tracking-tight">
                    마이링크 (MyLink)
                  </span>
                  <Badge variant="default" className="text-[10px] h-4">
                    Preset: b6u0Tmjb6
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  shadcn/ui Design System · Base-Rhea (Olive Palette)
                </p>
              </div>
            </div>

            {/* Quick Actions (Dark Mode, Share, GitHub) */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-primary" />
                    <span>복사됨!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="size-3.5" />
                    <span className="hidden xs:inline">공유하기</span>
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => setIsDark(!isDark)}
                title="다크 모드 토글"
              >
                {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Banner Area */}
        <section className="border-b border-border bg-muted/30 py-6 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-foreground bg-primary/20 px-2.5 py-0.5 rounded-full mb-2">
                <Sparkles className="size-3 text-primary-foreground" />
                <span>New Design System Applied</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight">
                shadcn/ui b6u0Tmjb6 프리셋 기반 마이링크 디자인 시스템
              </h1>
              <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
                올리브(Olive) 베이스 컬러와 곡선형 24px 지오메트리, 부드러운 섀도우 링이 조화된 모던 링크트리 클론 플랫폼입니다.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Badge variant="outline" className="py-1 px-3 text-xs">
                Next.js 16 (Turbopack)
              </Badge>
              <Badge variant="secondary" className="py-1 px-3 text-xs">
                Tailwind CSS v4
              </Badge>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <Tabs defaultValue="public-view" className="w-full">
            
            <div className="flex items-center justify-between pb-6">
              <TabsList className="bg-muted p-1 rounded-2xl">
                <TabsTrigger value="public-view" className="gap-2 px-4">
                  <Smartphone className="size-4" />
                  <span>모바일 프로필 뷰</span>
                </TabsTrigger>
                <TabsTrigger value="dashboard-view" className="gap-2 px-4">
                  <LayoutDashboard className="size-4" />
                  <span>관리자 대시보드 뷰</span>
                </TabsTrigger>
                <TabsTrigger value="tokens-view" className="gap-2 px-4">
                  <Palette className="size-4" />
                  <span>디자인 시스템 토큰</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* TAB 1: PUBLIC PROFILE VIEW (The mobile view seen by visitors) */}
            <TabsContent value="public-view" className="mt-0">
              <div className="flex flex-col items-center justify-center py-4">
                
                {/* Mobile Mockup Device Frame */}
                <div className="w-full max-w-md rounded-[38px] border-4 border-foreground/10 bg-card p-6 sm:p-8 shadow-2xl ring-1 ring-border relative overflow-hidden transition-all">
                  
                  {/* Top Action */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono font-semibold text-muted-foreground">
                      mylink.io/@dayoung_dev
                    </span>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      onClick={handleCopy}
                      className="rounded-full"
                    >
                      {copied ? <Check className="size-3.5 text-primary" /> : <Copy className="size-3.5" />}
                    </Button>
                  </div>

                  {/* Profile Section */}
                  <div className="flex flex-col items-center text-center space-y-3 mb-6">
                    <div className="relative">
                      <Avatar size="lg" className="size-24 border-2 border-border shadow-md">
                        <AvatarImage src="" alt="이다영" />
                        <AvatarFallback className="bg-primary/20 text-primary-foreground font-heading font-bold text-2xl">
                          다영
                        </AvatarFallback>
                        <AvatarBadge className="bg-primary size-4" />
                      </Avatar>
                    </div>

                    <div className="space-y-1">
                      <h2 className="text-xl font-heading font-bold tracking-tight">
                        이다영
                      </h2>
                      <p className="text-xs font-medium text-muted-foreground">
                        @dayoung_dev
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                      <Badge variant="secondary" className="gap-1 text-[11px]">
                        <GraduationCap className="size-3" />
                        <span>한양대학교</span>
                      </Badge>
                      <Badge variant="outline" className="gap-1 text-[11px]">
                        <Laptop className="size-3" />
                        <span>주니어 프론트엔드</span>
                      </Badge>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-xs break-keep pt-1">
                      새로운 기술을 탐구하고 아이디어를 코드로 구현하는 개발자입니다. 사용자 중심의 깔끔한 경험을 고민합니다. ✨
                    </p>

                    {/* Social Icon Bar */}
                    <div className="flex items-center justify-center gap-2 pt-2">
                      <a
                        href="https://github.com/0000bandi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary-foreground transition-colors"
                      >
                        <GithubIcon className="size-4" />
                      </a>
                      <a
                        href="https://velog.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary-foreground transition-colors"
                      >
                        <Globe className="size-4" />
                      </a>
                      <a
                        href="mailto:dayoung@example.com"
                        className="size-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary-foreground transition-colors"
                      >
                        <Mail className="size-4" />
                      </a>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Links List */}
                  <div className="space-y-3">
                    {links
                      .filter((l) => l.isActive)
                      .map((link) => (
                        <a
                          key={link.id}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block p-3.5 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/50 hover:bg-accent/40 active:scale-[0.98] transition-all duration-200"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 truncate">
                              <span className="text-lg shrink-0">{link.icon}</span>
                              <span className="text-sm font-medium tracking-tight truncate group-hover:text-primary-foreground">
                                {link.title}
                              </span>
                            </div>
                            <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                          </div>
                        </a>
                      ))}

                    {/* YouTube Media Embed Card */}
                    <Card size="sm" className="bg-card/50 border-border overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                          <YoutubeIcon className="size-4 text-red-500" />
                          <span>최신 영상 // 10분 만에 웹사이트 만들기</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="relative aspect-video w-full rounded-xl bg-muted/60 flex items-center justify-center border border-border overflow-hidden group cursor-pointer">
                          <div className="size-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            ▶
                          </div>
                          <span className="absolute bottom-2 right-2 bg-black/75 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">
                            12:45
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Cheer Button */}
                  <div className="pt-6">
                    <Button
                      variant={hasLiked ? "default" : "secondary"}
                      className="w-full gap-2 rounded-2xl"
                      onClick={() => {
                        setLikes((prev) => prev + (hasLiked ? -1 : 1));
                        setHasLiked(!hasLiked);
                      }}
                    >
                      <Heart className={`size-4 ${hasLiked ? "fill-current" : ""}`} />
                      <span>프로필 응원하기 ({likes})</span>
                    </Button>
                  </div>

                  {/* Footer */}
                  <div className="text-center pt-8 pb-2 space-y-1">
                    <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                      <Sparkles className="size-3 text-primary" />
                      <span>Powered by 마이링크</span>
                    </div>
                  </div>

                </div>

              </div>
            </TabsContent>

            {/* TAB 2: ADMIN DASHBOARD VIEW (Split screen editing panel) */}
            <TabsContent value="dashboard-view" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Editing Panel */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Link Creator Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Plus className="size-4 text-primary" />
                        <span>새 링크 추가</span>
                      </CardTitle>
                      <CardDescription>
                        방문자에게 보여줄 새로운 링크의 제목과 목적지 URL을 입력하세요.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleAddLink} className="space-y-3">
                        <div>
                          <Input
                            placeholder="링크 제목 (예: 새 프로젝트 구경하기)"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="URL (https://...)"
                            value={newUrl}
                            onChange={(e) => setNewUrl(e.target.value)}
                          />
                        </div>
                        <Button type="submit" className="w-full sm:w-auto">
                          링크 등록하기
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* Managed Links List */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">등록된 링크 관리</CardTitle>
                          <CardDescription>
                            스위치로 노출 여부를 조절하거나 순서를 관리합니다.
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">총 {links.length}개</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {links.map((link) => (
                        <div
                          key={link.id}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-muted/40 border border-border gap-3"
                        >
                          <div className="flex items-center gap-3 truncate">
                            <GripVertical className="size-4 text-muted-foreground shrink-0 cursor-grab" />
                            <div className="truncate">
                              <p className="text-sm font-medium tracking-tight truncate">
                                {link.title}
                              </p>
                              <p className="text-xs text-muted-foreground truncate font-mono">
                                {link.url}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                              <TrendingUp className="size-3.5 text-primary" />
                              <span>{link.clicks}회</span>
                            </div>
                            <Switch
                              checked={link.isActive}
                              onCheckedChange={() => handleToggleLink(link.id)}
                            />
                            <Button
                              variant="ghost"
                              size="icon-xs"
                              className="text-destructive hover:bg-destructive/10"
                              onClick={() => handleDeleteLink(link.id)}
                            >
                              <Trash2 className="size-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                </div>

                {/* Right Sticky Preview Summary */}
                <div className="lg:col-span-5 sticky top-20 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center justify-between">
                        <span>실시간 연동 현황</span>
                        <Badge variant="default">LIVE SYNCHRONIZED</Badge>
                      </CardTitle>
                      <CardDescription>
                        좌측에서 수정한 내용이 공개 프로필 뷰에 즉시 반영됩니다.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex justify-between py-1.5 border-b border-border">
                        <span className="text-muted-foreground">내 마이링크 주소</span>
                        <span className="font-mono font-semibold">mylink.io/@dayoung_dev</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-border">
                        <span className="text-muted-foreground">활성화된 링크 수</span>
                        <span className="font-semibold">{links.filter((l) => l.isActive).length}개</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-border">
                        <span className="text-muted-foreground">적용된 디자인 프리셋</span>
                        <span className="font-mono font-semibold">b6u0Tmjb6 (Olive)</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2" onClick={handleCopy}>
                        <Link2 className="size-4" />
                        <span>공개 프로필 URL 복사</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

              </div>
            </TabsContent>

            {/* TAB 3: DESIGN SYSTEM TOKENS (Color palette, button variants, etc.) */}
            <TabsContent value="tokens-view" className="mt-0 space-y-8">
              
              {/* Color Ramp Section */}
              <Card>
                <CardHeader>
                  <CardTitle>🎨 프리셋 b6u0Tmjb6 테마 컬러 토큰</CardTitle>
                  <CardDescription>
                    OKLCH 기반 올리브(Olive) 팔레트의 시맨틱 토큰 매핑 현황입니다.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    <div className="p-4 rounded-2xl bg-primary text-primary-foreground flex flex-col justify-between h-28 shadow-sm">
                      <span className="text-xs font-mono font-bold">Primary</span>
                      <span className="text-[11px] font-mono opacity-80">--primary (Olive)</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-secondary text-secondary-foreground border border-border flex flex-col justify-between h-28 shadow-sm">
                      <span className="text-xs font-mono font-bold">Secondary</span>
                      <span className="text-[11px] font-mono opacity-80">--secondary</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-accent text-accent-foreground border border-border flex flex-col justify-between h-28 shadow-sm">
                      <span className="text-xs font-mono font-bold">Accent</span>
                      <span className="text-[11px] font-mono opacity-80">--accent</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-muted text-muted-foreground flex flex-col justify-between h-28 shadow-sm">
                      <span className="text-xs font-mono font-bold">Muted</span>
                      <span className="text-[11px] font-mono opacity-80">--muted</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-card text-card-foreground border border-border flex flex-col justify-between h-28 shadow-sm">
                      <span className="text-xs font-mono font-bold">Card</span>
                      <span className="text-[11px] font-mono opacity-80">--card</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-destructive/10 text-destructive border border-destructive/20 flex flex-col justify-between h-28 shadow-sm">
                      <span className="text-xs font-mono font-bold">Destructive</span>
                      <span className="text-[11px] font-mono opacity-80">--destructive</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Component Variants Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Button Showcase */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Button Variants (버튼 변형)</CardTitle>
                    <CardDescription>rounded-2xl 곡률 및 시맨틱 변형</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-center gap-2.5">
                    <Button variant="default">Default Button</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                  </CardContent>
                </Card>

                {/* Badge Showcase */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Badge Variants (배지 변형)</CardTitle>
                    <CardDescription>상태 표시 및 카테고리 태그</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-center gap-2.5">
                    <Badge variant="default">Primary Badge</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </CardContent>
                </Card>

              </div>

            </TabsContent>

          </Tabs>
        </section>

      </main>
    </div>
  );
}
