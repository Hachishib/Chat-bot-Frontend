type ChatInputProps = {
  onSend: (message: string) => void;
  disabled?: boolean;
};

// ✅ EDIT: inputPlaceholder text
export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const inputPlaceholder = "Ask something about the school..."; // ✅ EDIT THIS

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const value = (e.target as HTMLTextAreaElement).value.trim();
      if (value) {
        onSend(value);
        (e.target as HTMLTextAreaElement).value = "";
      }
    }
  };

  const handleClick = () => {
    const textarea = document.getElementById("chat-input") as HTMLTextAreaElement;
    const value = textarea?.value.trim();
    if (value) {
      onSend(value);
      textarea.value = "";
    }
  };

  return (
    <div className="flex items-end gap-2 p-3 border-t border-gray-100 bg-white">
      <textarea
        id="chat-input"
        rows={1}
        disabled={disabled}
        placeholder={inputPlaceholder}
        onKeyDown={handleKeyDown}
        className="flex-1 resize-none rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 disabled:opacity-50 max-h-28 overflow-y-auto"
        style={{ minHeight: "42px" }}
      />
      <button
        onClick={handleClick}
        disabled={disabled}
        className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl p-2.5 transition-colors disabled:opacity-50"
        aria-label="Send message"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z"/>
        </svg>
      </button>
    </div>
  );
}