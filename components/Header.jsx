"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-semibold text-lg sm:inline">MyApp</span>
        </Link>

        <nav className="flex items-center gap-2">
          <Button asChild variant={pathname === "/" ? "default" : "ghost"} size="sm">
            <Link href="/">トップ</Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/dashboard" ? "default" : "ghost"}
            size="sm"
          >
            <Link href="/dashboard">ダッシュボード</Link>
          </Button>
          <Button asChild variant={pathname === "/login" ? "default" : "outline"} size="sm">
            <Link href="/login">ログイン</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
