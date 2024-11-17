import React, { useState } from "react";
import { sendMessage } from "@/service/chat";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PublicationChatProps {
  publication: number;
}

export function PublicationChat({ publication }: PublicationChatProps) {
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([]);
  const [input, setInput] = useState("");

  async function handleSendMessage(event: React.FormEvent) {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage: { text: string; sender: "user" } = {
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const botReply = await sendMessage(input, publication);
      const botMessage: { text: string; sender: "bot" } = {
        text: botReply,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: { text: string; sender: "bot" } = {
        text: "Erro ao se comunicar com o chat.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  }

  return (
    <div className="flex flex-col h-[400px] p-3 border-2 border-blue2">
      {/* Mensagens */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-3 pr-2 scrollbar-none">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-[75%] text-sm shadow-md ${
                message.sender === "user"
                  ? "bg-blue2 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <ReactMarkdown
                className="prose prose-sm"
                remarkPlugins={[remarkGfm]}
              >
                {message.text}
              </ReactMarkdown>
            </div>
          </div>
        ))}
      </div>

      {/* Campo de entrada */}
      <form onSubmit={handleSendMessage} className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue2"
        />
        <button
          type="submit"
          className="ml-3 px-4 py-2 bg-blue2 text-white rounded-lg shadow hover:bg-blue2 transition-all"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
