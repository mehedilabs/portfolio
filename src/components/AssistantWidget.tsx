"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bot, X, Send, Mail, RotateCcw } from "lucide-react";

const faqItems = [
  {
    question: "Who is Mehedi Hasan?",
    answer:
      "I'm Mehedi Hasan, a Full-Stack Web Developer from Bangladesh. I enjoy building modern, responsive, and user-friendly web applications.",
  },
  {
    question: "What technologies does he use?",
    answer:
      "My primary technologies include Next.js, React, TypeScript, JavaScript, Node.js, Express.js, MongoDB, and Tailwind CSS.",
  },
  {
    question: "What projects has he built?",
    answer:
      "Some of my projects include Bazar Dor, Bangla News 24, Live Weather, and MoonVibe Fashion. You can explore them in the Projects section of this portfolio.",
  },
  {
    question: "Does he have work experience?",
    answer:
      "I'm continuously developing my skills through practical projects and hands-on development. You can explore my work and projects in this portfolio.",
  },
  {
    question: "What services does he offer?",
    answer:
      "I focus on building responsive websites, modern frontend interfaces, and full-stack web applications using modern web technologies.",
  },
  {
    question: "How can I contact him?",
    answer:
      "You can contact me directly through email. I'd be happy to hear about your project or opportunity.",
  },
];

type Message = {
  id: number;
  sender: "visitor" | "assistant";
  text: string;
  isContact?: boolean;
};

export function AssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const messageId = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, isOpen]);

  const addMessage = (question: string, answer: string, isContact = false) => {
    const id = messageId.current + 1;
    messageId.current = id + 1;

    setMessages((previous) => [
      ...previous,
      {
        id,
        sender: "visitor",
        text: question,
      },
      {
        id: id + 1,
        sender: "assistant",
        text: answer,
        isContact,
      },
    ]);
  };

  const handleReset = () => {
    setMessages([]);
    setInput("");
    messageId.current = 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = input.trim();

    if (!message) return;

    addMessage(
      message,
      "Thanks for your message! I can answer the questions listed above. For anything else, please contact Mehedi directly through email.",
      true,
    );

    setInput("");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-[100] flex h-[min(460px,calc(100dvh-100px))] w-[min(320px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-2xl shadow-black/20 sm:right-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--card-border)] bg-[var(--subtle-surface)] px-3 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-cyan-glow)] text-[var(--accent-cyan)]">
                <Bot size={19} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[var(--foreground)]">
                  Portfolio Assistant
                </h3>
                <p className="text-[11px] text-[var(--muted-text)]">
                  Ask me about Mehedi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                aria-label="Restart conversation"
                title="Restart conversation"
                className="rounded-lg p-1.5 text-[var(--muted-text)] transition hover:bg-[var(--card-border)] hover:text-[var(--accent-cyan)]"
              >
                <RotateCcw size={17} />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
                className="rounded-lg p-1.5 text-[var(--muted-text)] transition hover:bg-[var(--card-border)] hover:text-[var(--foreground)]"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Conversation */}
          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            <div className="flex gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-cyan-glow)] text-[var(--accent-cyan)]">
                <Bot size={15} />
              </div>

              <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-[var(--card-border)] bg-[var(--subtle-surface)] px-3 py-2 text-xs leading-relaxed text-[var(--foreground)]">
                Hi! Welcome to my portfolio. Choose a question below to learn
                more about me.
              </div>
            </div>

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.sender === "visitor" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "assistant" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-cyan-glow)] text-[var(--accent-cyan)]">
                    <Bot size={15} />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                    message.sender === "visitor"
                      ? "rounded-tr-sm bg-[var(--accent-cyan)] text-[#07090e]"
                      : "rounded-tl-sm border border-[var(--card-border)] bg-[var(--subtle-surface)] text-[var(--foreground)]"
                  }`}
                >
                  {message.text}

                  {message.isContact && (
                    <a
                      href="mailto:mehedi.hasan.bd.dev@gmail.com"
                      className="mt-2 flex items-center gap-1.5 break-all font-medium text-[var(--accent-cyan)] underline underline-offset-4"
                    >
                      <Mail size={14} className="shrink-0" />
                      mehedi.hasan.bd.dev@gmail.com
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Predefined Questions */}
          <div className="border-t border-[var(--card-border)] px-3 py-2">
            <p className="mb-1.5 text-[10px] font-medium tracking-wide text-[var(--muted-text)]">
              QUICK QUESTIONS
            </p>

            <div className="grid max-h-[72px] grid-cols-2 gap-1.5 overflow-y-auto">
              {faqItems.map((item) => (
                <button
                  key={item.question}
                  onClick={() => addMessage(item.question, item.answer)}
                  className="w-full rounded-full border border-[var(--card-border)] bg-[var(--subtle-surface)] px-2 py-1.5 text-center text-[10px] leading-tight text-[var(--foreground)] transition hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-[var(--card-border)] p-2.5"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your message..."
              className="min-w-0 flex-1 rounded-xl border border-[var(--card-border)] bg-[var(--subtle-surface)] px-3 py-2 text-xs text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted-text)] focus:border-[var(--accent-cyan)]"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-cyan)] text-[#07090e] transition hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        className="group fixed bottom-5 right-5 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-cyan)] text-[#07090e] shadow-lg shadow-cyan-500/30 transition duration-300 hover:scale-110 hover:shadow-cyan-500/50 sm:bottom-6 sm:right-6"
      >
        {isOpen ? (
          <X size={21} />
        ) : (
          <>
            <Bot size={25} strokeWidth={2} className="assistant-pulse" />
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-[var(--background)] bg-cyan-300">
              <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300 opacity-60" />
            </span>
          </>
        )}
      </button>
    </>
  );
}
