"use client";

import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const mockUser = {
  name: "Koji",
  email: "koji@example.com",
  provider: "Google",
};

const mockPosts = [
  {
    id: "p1",
    title: "ハンズオン Day1",
    content: "画面レイアウトとコンポーネントの確認を実施。",
    createdAt: "2026/02/13 09:40",
  },
  {
    id: "p2",
    title: "ハンズオン Day2",
    content: "フォーム見た目を調整。保存処理は未実装モック。",
    createdAt: "2026/02/13 10:10",
  },
];

function getInitials(name) {
  if (!name) return "?";
  return name.charAt(0).toUpperCase();
}

export default function DashboardClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-8 space-y-6">
        <Card>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xl font-bold">
                  {getInitials(mockUser.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{mockUser.name}</h2>
                <p className="text-sm text-muted-foreground">{mockUser.email}</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>ログイン方法: {mockUser.provider}</p>
                <p>投稿数: {mockPosts.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>新規投稿</CardTitle>
                <CardDescription>入力UIのモック</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-3">
                  <div className="space-y-1">
                    <Label htmlFor="title">タイトル</Label>
                    <Input
                      id="title"
                      placeholder="投稿のタイトル"
                      defaultValue="次回の進め方"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="content">内容</Label>
                    <textarea
                      id="content"
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="投稿の内容を書いてください"
                      defaultValue="画面確認後にロジック実装へ進む予定です。"
                    />
                  </div>
                  <Button type="button" className="w-full">
                    投稿する（モック）
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>あなたの投稿</CardTitle>
                <CardDescription>固定ダミーデータ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockPosts.map((post) => (
                    <div
                      key={post.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex-1">
                          <h3 className="font-semibold">{post.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {post.content}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {post.createdAt}
                          </p>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          削除
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
