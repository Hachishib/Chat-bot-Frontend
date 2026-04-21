
import { useRef, useEffect } from "react";
import { useChat } from "../../hooks/useChat"; // ❌ DO NOT CHANGE — hook path
import { ChatBubble } from "./ChatBubble";
import { ChatInput }from "./ChatInput";
import { TypingIndicator } from "./TypingIndicator";
// ✅ EDIT THIS: Bot display name and welcome message
const botName = "SHS Campus AI";
const welcomeMessage =
  "Hi! I'm your SHS Campus AI assistant. Ask me anything about school schedules, policies, admissions, or upcoming events!";

export default function ChatWidget() {
  const { messages, sendMessage, isLoading } = useChat(); // ❌ DO NOT CHANGE
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-2xl mx-auto">
      {/* Header */}
      {/* ✅ EDIT: botName above */}
      <div className="bg-teal-700 text-white px-5 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center font-bold text-sm">
          AI
        </div>
        <div>
          <p className="font-semibold text-sm">{botName}</p>
          <p className="text-teal-200 text-xs">Powered by Gemini + RAG</p>
        </div>
        <div className="ml-auto w-2 h-2 rounded-full bg-green-400" title="Online" />
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-4 bg-white">
        {/* Welcome message */}
        <ChatBubble role="assistant" message={welcomeMessage} />

        {messages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} message={msg.content} />
        ))}

        {isLoading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </div>
  );
}