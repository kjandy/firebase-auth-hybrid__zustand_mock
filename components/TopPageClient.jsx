"use client";

import Link from "next/link";
import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const mockTimeline = [
  {
    id: "1",
    userName: "Sato Taro",
    userEmail: "taro@example.com",
    createdAt: "5分前",
    title: "ハンズオンの準備を開始",
    content: "環境構築が完了。次はログイン画面の見た目を作ります。",
  },
  {
    id: "2",
    userName: "Suzuki Hanako",
    userEmail: "hanako@example.com",
    createdAt: "32分前",
    title: "UIモック作成メモ",
    content: "フォームとカードの余白を調整して、見やすさを優先。",
  },
  {
    id: "3",
    userName: "Yamada Ken",
    userEmail: "ken@example.com",
    createdAt: "1時間前",
    title: "タイムラインセクション",
    content: "投稿データはダミー固定。操作はすべて非機能モックです。",
  },
];

function getInitials(name) {
  if (!name) return "?";
  return name.charAt(0).toUpperCase();
}

export default function TopPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="container mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">MyApp モック</h1>
            <p className="text-gray-500">
              モックアップアプリケーションのトップページへようこそ！
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>タイムライン</CardTitle>
              <CardDescription>固定ダミーデータを表示</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockTimeline.map((post) => (
                  <div
                    key={post.id}
                    className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-sm font-bold">
                          {getInitials(post.userName)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm truncate">
                            {post.userEmail}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {post.createdAt}
                          </span>
                        </div>

                        <h3 className="font-semibold mt-1">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">
                          {post.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href="/dashboard">ダッシュボードを見る</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">ログイン画面を見る</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
