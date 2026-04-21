export type Role = "user" | "assistant";

// ❌ Must match useChat.ts Message type
export type Message = {
  role: Role;
  content: string;
};

// ❌ Must match your backend /api/news response shape
export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl?: string;
};

// ✅ EDIT: Add new types below as needed
export type AdmissionStatus = "pending" | "accepted" | "rejected";

// Chat API response type (must match backend /api/chat response)
export type ChatResponse = {
  reply: string;
};