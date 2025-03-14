import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './chat-message';
import { ChatInput } from './chat-input';
import { ScrollArea } from './ui/scroll-area';
import { useToast } from './ui/use-toast';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '你好！我是 DeepSeek AI 助手，有什么我可以帮助你的吗？'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // 模拟发送消息到 DeepSeek API
  const sendMessage = async (content: string) => {
    // 添加用户消息
    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // 模拟 API 调用延迟
    setTimeout(() => {
      try {
        // 模拟 AI 响应
        const aiResponse: Message = {
          role: 'assistant',
          content: `我收到了你的消息: "${content}"。这是一个模拟的 DeepSeek AI 响应。在实际应用中，这里会连接到 DeepSeek API 获取真实的 AI 回复。`
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error sending message:', error);
        toast({
          title: '发送消息失败',
          description: '无法连接到 DeepSeek API，请稍后再试。',
          variant: 'destructive',
        });
        setIsLoading(false);
      }
    }, 1000);
  };

  // 自动滚动到底部
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4">
        <div ref={scrollAreaRef} className="space-y-4">
          {messages.map((message, index) => (
            <ChatMessage 
              key={index} 
              message={message} 
              isLast={index === messages.length - 1}
            />
          ))}
          {isLoading && (
            <div className="flex items-center justify-start gap-2 px-4 py-2 animate-pulse">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          )}
        </div>
      </ScrollArea>
      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </div>
  );
} 