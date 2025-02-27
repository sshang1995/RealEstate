import React, { useState } from "react";
import OpenAI from "openai";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import Dialog from "@mui/material/Dialog";
import { Send } from "lucide-react";
import { TextField, Button, Card, CardContent } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { marked } from "marked";
import "./AI.css";

const AI = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello, I am your AI assistant. How can I help you?",
      sender: "AI",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    askAI(input);
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent new line in text area
      sendMessage();
    }
  };

  const openChatWindow = () => {
    setIsChatOpen(true);
  };
  const closeChatWindow = () => {
    setIsChatOpen(false);
  };
  const openai = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: "sk-fe6bb570594f4e0c9b1fa56db6f463ed",
    dangerouslyAllowBrowser: true,
  });

  const askAI = async (text) => {
    try {
      setThinking(true);
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: text }],
        model: "deepseek-chat",
      });
      let aiResponse = completion.choices[0].message.content;

      // Convert response into bullet points if it contains multiple lines
      //   let formattedResponse = marked(aiResponse);

      //   console.log(messages);
      setMessages((prev) => [...prev, { text: aiResponse, sender: "AI" }]);
      setThinking(false);
    } catch (error) {
      console.log("AI calling failed", error);
    }
  };

  return (
    <div className="ai-chat">
      <div>
        <ForumRoundedIcon
          style={{ fontSize: 60, color: "darkgreen" }}
          onClick={openChatWindow}
        ></ForumRoundedIcon>
      </div>
      <Dialog open={isChatOpen} onClose={closeChatWindow}>
        <Card className="w-full max-w-md mx-auto p-4 shadow-lg rounded-lg">
          <CardContent className="h-96 overflow-y-auto flex flex-col gap-2 border-b pb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                <div
                  className="prose prose-lg"
                  dangerouslySetInnerHTML={{ __html: marked(msg.text) }}
                ></div>
              </div>
            ))}
            {thinking && (
              <div className="p-2 rounded-lg max-w-xs bg-gray-200 text-black self-start">
                <CircularProgress />
              </div>
            )}
          </CardContent>
          <div className="flex gap-2 p-2">
            <TextField
              id="outlined-basic"
              label="type your question"
              variant="outlined"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button onClick={sendMessage} className="bg-blue-500 text-white">
              <Send size={20} />
            </Button>
          </div>
        </Card>
      </Dialog>
    </div>
  );
};

export default AI;
