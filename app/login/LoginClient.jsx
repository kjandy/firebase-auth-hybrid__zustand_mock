"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              ログイン
            </CardTitle>
            <CardDescription className="text-center">
              見た目確認用のモック画面です
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              Googleでログイン（モック）
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">または</span>
              </div>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="displayName">ユーザー名（新規登録時）</Label>
                <Input id="displayName" placeholder="例：Koji" defaultValue="Koji" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  defaultValue="koji@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">パスワード</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="6文字以上"
                  defaultValue="123456"
                />
              </div>

              <Alert>
                <AlertDescription>
                  このページはモックです。認証処理は実行されません。
                </AlertDescription>
              </Alert>

              <div className="flex gap-2">
                <Button type="button" className="flex-1">
                  ログイン
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  新規登録
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
