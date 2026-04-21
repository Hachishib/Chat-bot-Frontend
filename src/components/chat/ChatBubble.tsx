type ChatBubbleProps = {
  message: string;
  role: "user" | "assistant";
  timestamp?: string;
};

// ✅ EDIT: Bubble colors — user (right) vs assistant (left)
export function ChatBubble({ message, role, timestamp }: ChatBubbleProps) {
  const isUser = role === "user";
  return (
    <div className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : ""}`}>
      {/* Avatar */}
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
          isUser ? "bg-teal-500 text-white" : "bg-teal-700 text-white"
        }`}
      >
        {isUser ? "Me" : "AI"}
      </div>

      <div className={`max-w-[75%] ${isUser ? "items-end" : "items-start"} flex flex-col gap-1`}>
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
            isUser
              ? "bg-teal-600 text-white rounded-br-sm"   // ✅ EDIT: user bubble color
              : "bg-gray-100 text-gray-800 rounded-bl-sm" // ✅ EDIT: bot bubble color
          }`}
        >
          {message}
        </div>
        {timestamp && (
          <span className="text-xs text-gray-400">{timestamp}</span>
        )}
      </div>
    </div>
  );
}