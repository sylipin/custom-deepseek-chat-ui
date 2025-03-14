import { useTheme } from "../components/theme-provider";
import { Button } from "../components/ui/button";
import { Moon, Sun } from "lucide-react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// 动态导入 ChatContainer 组件
const ChatContainer = dynamic(
  () => import("../components/chat-container").then((mod) => mod.ChatContainer),
  {
    ssr: false,
  }
);

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <Head>
          <title>DeepSeek Chat</title>
          <meta name="description" content="DeepSeek Chat Interface" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center justify-between">
            <div className="mr-4 hidden md:flex">
              <a className="mr-6 flex items-center space-x-2" href="/">
                <span className="hidden font-bold sm:inline-block">
                  DeepSeek Chat
                </span>
              </a>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex-1 md:w-auto md:flex-none"></div>
            </div>
          </div>
        </header>
        <main className="flex h-[calc(100vh-3.5rem)] flex-col"></main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>DeepSeek Chat</title>
        <meta name="description" content="DeepSeek Chat Interface" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                DeepSeek Chat
              </span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex h-[calc(100vh-3.5rem)] flex-col">
        <ChatContainer />
      </main>
    </div>
  );
} 