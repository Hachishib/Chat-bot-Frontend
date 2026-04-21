import Navbar from "../components/layout/Navbar";
import ChatWidget from "../components/chat/ChatWidget";
 
export default function ChatPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-gray-50 min-h-screen">
        <ChatWidget />
      </main>
    </>
  );
}