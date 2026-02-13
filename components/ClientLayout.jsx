"use client";
import FloatingPostButton from "@/components/FloatingPostButton";

export default function ClientLayout({ children }) {
  return (
    <>
      {children}
      <FloatingPostButton />
    </>
  );
}
