"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PenSquare } from "lucide-react";

export default function FloatingPostButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all z-40"
        >
          <PenSquare className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>新規投稿（モック）</DialogTitle>
        </DialogHeader>
        <form className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="post-title">タイトル</Label>
            <Input id="post-title" placeholder="投稿のタイトル" defaultValue="モック投稿" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="post-content">内容</Label>
            <textarea
              id="post-content"
              className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="何を考えていますか？"
              defaultValue="このダイアログは表示確認用です。"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              キャンセル
            </Button>
            <Button type="button" onClick={() => setOpen(false)}>
              投稿
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
