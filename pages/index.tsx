import React from 'react';
import Head from 'next/head';
import { ChatContainer } from '../components/chat-container';
import { useTheme } from '../components/theme-provider';
import { Button } from '../components/ui/button';
import { Moon, Sun } from 'lucide-react';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>DeepSeek 聊天</title>
        <meta name="description" content="DeepSeek AI 聊天界面" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen">
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <img src="https://picsum.photos/200/300" alt="DeepSeek Logo" className="w-8 h-8 rounded-full" />
            <h1 className="text-xl font-bold">DeepSeek 聊天</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">切换主题</span>
          </Button>
        </header>

        <main className="flex-1 overflow-hidden">
          <ChatContainer />
        </main>
      </div>
    </>
  );
} 