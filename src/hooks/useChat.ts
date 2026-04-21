// ============================================================
// useChat.ts  (src/hooks/useChat.ts)
// ✅ EDITABLE: Nothing here needs changing for basic use
// ❌ NOT EDITABLE (without breaking): 
//   - Message type shape { role, content } — must match ChatBubble props
//   - API endpoint path /api/chat — must match your Express backend route
//   - VITE_API_URL env var — set this in your .env file
// ============================================================

import { useState } from "react";

// ❌ DO NOT CHANGE: Shape must match ChatBubble's "role" type
export type Message = {
  role: "user" | "assistant";
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // ❌ DO NOT CHANGE: This calls your backend /api/chat
  // Make sure VITE_API_URL is set in your .env file
  const sendMessage = async (userInput: string) => {
    const userMessage: Message = { role: "user", content: userInput };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send full conversation history for context
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) throw new Error("API error");

      const data = await response.json();
      // ❌ Backend must return { reply: string }
      const assistantMessage: Message = {
        role: "assistant",
        content: data.reply ?? "Sorry, I couldn't get a response.",
      };
      setMessages([...updatedMessages, assistantMessage]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Sorry, there was an error reaching the server. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
}