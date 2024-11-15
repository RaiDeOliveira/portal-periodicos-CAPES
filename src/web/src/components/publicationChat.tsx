import React, { useState } from "react";

type Message = {
  text: string;
  sender: "user" | "bot";
};

export function PublicationChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  async function sendMessageToBackend(userMessage: string): Promise<string> {
    try {
      const response = await fetch("https://seu-backend.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      return "Desculpe, houve um erro. Tente novamente mais tarde.";
    }
  }

  // Função para lidar com o envio da mensagem
  async function handleSendMessage(event: React.FormEvent) {
    event.preventDefault();
    if (!input.trim()) return;

    // Adiciona a mensagem do usuário ao histórico
    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Limpa o input
    setInput("");

    // Envia a mensagem ao backend e obtém a resposta do chatbot
    const botReply = await sendMessageToBackend(input);

    // Adiciona a resposta do bot ao histórico de mensagens
    const botMessage: Message = { text: botReply, sender: "bot" };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  }

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex-1 overflow-y-auto mb-4">
        <div className="space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg max-w-xs ${
                message.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-300 text-black self-start"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSendMessage} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="flex-1 p-2 rounded-lg border border-gray-300"
        />
        <button
          type="submit"
          className="ml-2 p-2 rounded-lg bg-blue-500 text-white"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
