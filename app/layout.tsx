import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "한다인 | Developer Portfolio",
  description:
    "문제를 발견하고 작은 실행으로 더 나은 방향을 찾아가는 한다인의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
