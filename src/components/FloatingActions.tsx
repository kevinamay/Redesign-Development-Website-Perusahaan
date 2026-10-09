"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/data/translations";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function FloatingActions() {
  const { lang } = useLanguage();

  // Multi-language welcome message
  const welcomeText = {
    id: "Halo! Saya adalah **AsiaBot**, asisten AI resmi dari **CV. Asia Plastik**.\n\nSaya siap membantu Anda dengan informasi seputar produk kemasan, mesin blow moulding 500L, cetakan kustom, sertifikasi ISO 9001:2015, atau pemesanan langsung. Ada yang bisa saya bantu?",
    en: "Hello! I am **AsiaBot**, the official AI assistant of **CV. Asia Plastik**.\n\nI can assist you with product specifications, 500L blow molding machinery, custom mold fabrication, ISO 9001:2015 certification, or sales inquiries. How may I assist you today?",
    zh: "您好！我是 **CV. Asia Plastik** 的官方智能助手 **AsiaBot**。\n\n我可以为您解答关于塑料包装产品、500升大型吹塑机、模具定制开发、ISO 9001:2015 认证及采购咨询。请问有什么可以帮助您？",
  };

  // Localized UI Texts
  const uiTexts = {
    id: {
      waTooltipTitle: "Hubungi Admin Sales",
      waTooltipSubtitle: "Respon Cepat via WhatsApp",
      waTooltipClose: "Tutup info WhatsApp",
      waAria: "Hubungi Admin CV Asia Plastik via WhatsApp",
      aiFloatingLabel: "Tanya AI Gemini",
      aiAria: "Buka Chat AI Assistant Gemini",
      aiChatTitle: "AsiaBot AI",
      aiOnline: "Online",
      aiSubtitle: "CV. Asia Plastik Support Engine",
      resetTitle: "Mulai Ulang Percakapan",
      closeAria: "Tutup Percakapan",
      inputPlaceholder: "Tanyakan produk, cetakan kustom, ISO...",
      sendAria: "Kirim Pesan",
      waMessage: "Halo, Saya menemukan website asiaplastik.com. Saya ingin bertanya produk Anda",
      suggestions: [
        "Apa saja produk unggulan Asia Plastik?",
        "Bagaimana spesifikasi mesin Blow Moulding 500L?",
        "Apakah sudah bersertifikasi ISO 9001:2015?",
        "Bisa buat cetakan / mold kustom?",
        "Kontak WhatsApp & Alamat Pabrik",
      ],
    },
    en: {
      waTooltipTitle: "Contact Sales Admin",
      waTooltipSubtitle: "Fast Response via WhatsApp",
      waTooltipClose: "Close WhatsApp info",
      waAria: "Contact CV Asia Plastik Admin via WhatsApp",
      aiFloatingLabel: "Ask Gemini AI",
      aiAria: "Open Gemini AI Assistant Chat",
      aiChatTitle: "AsiaBot AI",
      aiOnline: "Online",
      aiSubtitle: "CV. Asia Plastik Support Engine",
      resetTitle: "Restart Conversation",
      closeAria: "Close Conversation",
      inputPlaceholder: "Ask about products, custom molds, ISO...",
      sendAria: "Send Message",
      waMessage: "Hello, I found the asiaplastik.com website and would like to inquire about your products",
      suggestions: [
        "What are Asia Plastik's flagship products?",
        "What are the specs of the 500L Blow Molding machine?",
        "Is Asia Plastik ISO 9001:2015 certified?",
        "Can you fabricate custom molds?",
        "WhatsApp Contact & Factory Address",
      ],
    },
    zh: {
      waTooltipTitle: "联系销售代表",
      waTooltipSubtitle: "WhatsApp 快速响应",
      waTooltipClose: "关闭 WhatsApp 提示",
      waAria: "通过 WhatsApp 联系官方客服",
      aiFloatingLabel: "咨询 Gemini AI 助手",
      aiAria: "打开智能 AI 对话",
      aiChatTitle: "AsiaBot 智能助手",
      aiOnline: "在线",
      aiSubtitle: "亚洲塑料智能服务引擎",
      resetTitle: "重新开始对话",
      closeAria: "关闭对话",
      inputPlaceholder: "咨询产品规格、定制开模、ISO认证...",
      sendAria: "发送消息",
      waMessage: "您好，我浏览了 asiaplastik.com 官网，想咨询贵司的相关产品与规格",
      suggestions: [
        "亚洲塑料有哪些核心优势产品？",
        "500升大型吹塑机规格与产能如何？",
        "工厂是否通过 ISO 9001:2015 质量认证？",
        "是否支持专属开模与定制制造？",
        "WhatsApp 联系方式与工厂地址",
      ],
    },
  }[lang] || {
    waTooltipTitle: "Hubungi Admin Sales",
    waTooltipSubtitle: "Respon Cepat via WhatsApp",
    waTooltipClose: "Tutup info WhatsApp",
    waAria: "Hubungi Admin CV Asia Plastik via WhatsApp",
    aiFloatingLabel: "Tanya AI Gemini",
    aiAria: "Buka Chat AI Assistant Gemini",
    aiChatTitle: "AsiaBot AI",
    aiOnline: "Online",
    aiSubtitle: "CV. Asia Plastik Support Engine",
    resetTitle: "Mulai Ulang Percakapan",
    closeAria: "Tutup Percakapan",
    inputPlaceholder: "Tanyakan produk, cetakan kustom, ISO...",
    sendAria: "Kirim Pesan",
    waMessage: "Halo, Saya menemukan website asiaplastik.com. Saya ingin bertanya produk Anda",
    suggestions: [
      "Apa saja produk unggulan Asia Plastik?",
      "Bagaimana spesifikasi mesin Blow Moulding 500L?",
      "Apakah sudah bersertifikasi ISO 9001:2015?",
      "Bisa buat cetakan / mold kustom?",
      "Kontak WhatsApp & Alamat Pabrik",
    ],
  };

  const [showWaTooltip, setShowWaTooltip] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // WhatsApp Admin Configuration
  const rawPhone = "082244109503";
  const waPhone = rawPhone.replace(/^0/, "62");
  const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(uiTexts.waMessage)}`;

  // Default welcome message
  const initialMessages: ChatMessage[] = [
    {
      role: "assistant",
      content: welcomeText[lang] || welcomeText.id,
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  // Quick suggestion prompts
  const suggestions = uiTexts.suggestions;

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isChatOpen, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage.trim();
    if (!text || isLoading) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(newMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      if (!res.ok) throw new Error("Gagal mengambil respon dari server");

      const data = await res.json();
      const reply =
        data.reply ||
        "Terima kasih atas pertanyaannya. Anda juga dapat langsung berkonsultasi via WhatsApp ke Admin Sales kami di 082244109503.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Mohon maaf, terjadi gangguan sesaat. Anda dapat langsung berkonsultasi via WhatsApp ke Admin Sales kami di [082244109503](https://wa.me/6282244109503).",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages(initialMessages);
  };

  // Helper to render basic markdown (bold, lists, links) safely
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      // Bold text formatting
      let formattedLine: React.ReactNode = line;
      if (line.includes("**")) {
        const parts = line.split("**");
        formattedLine = parts.map((part, pIdx) =>
          pIdx % 2 === 1 ? <strong key={pIdx} className="font-semibold text-slate-900 dark:text-white">{part}</strong> : part
        );
      }

      // Check for links e.g. [082244109503](https://wa.me/...)
      const linkRegex = /\[(.*?)\]\((.*?)\)/g;
      if (typeof formattedLine === "string" && linkRegex.test(formattedLine)) {
        const match = formattedLine.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          const [full, linkText, url] = match;
          const [before, after] = formattedLine.split(full);
          formattedLine = (
            <span key={idx}>
              {before}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>{linkText}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              {after}
            </span>
          );
        }
      }

      return (
        <span key={idx} className="block leading-relaxed">
          {formattedLine}
        </span>
      );
    });
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. FLOATING ACTION DOCK (BOTTOM-RIGHT CORNER)                              */}
      {/* ========================================================================= */}
      <aside
        aria-label="Kontak Cepat & Asisten AI"
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end gap-3.5 select-none"
      >
        {/* TOP ITEM: WHATSAPP BUTTON & TOOLTIP */}
        <div className="flex items-center gap-3">
          {/* WhatsApp Tooltip Pill */}
          {showWaTooltip && (
            <div className="hidden md:flex items-center gap-2.5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl rounded-2xl py-2 px-3.5 pr-2.5 text-slate-800 dark:text-slate-100 animate-fade-in transition-all">
              <div className="text-left">
                <p className="text-xs font-bold leading-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{uiTexts.waTooltipTitle}</span>
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                  {uiTexts.waTooltipSubtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowWaTooltip(false)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label={uiTexts.waTooltipClose}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* WhatsApp Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={uiTexts.waAria}
            className="group relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl shadow-emerald-600/30 transition-all duration-300 hover:scale-108 active:scale-95 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-emerald-400/40"
          >
            {/* Subtle Pulse Wave */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

            {/* WhatsApp Vector Icon */}
            <svg
              className="relative z-10 w-7 h-7 sm:w-7.5 sm:h-7.5 fill-current drop-shadow-xs transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>

            {/* Online Indicator */}
            <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white dark:border-slate-900 rounded-full shadow-xs" />
          </a>
        </div>

        {/* BOTTOM ITEM (DIRECTLY BELOW WA): GEMINI AI ASSISTANT BUTTON */}
        <div className="flex items-center gap-3">
          {/* AI Helper Label on Hover */}
          <div className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900/85 dark:bg-slate-800/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-opacity">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>{uiTexts.aiFloatingLabel}</span>
          </div>

          {/* AI Floating Button */}
          <button
            type="button"
            onClick={() => setIsChatOpen(!isChatOpen)}
            aria-label={uiTexts.aiAria}
            className="group relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-xl hover:shadow-2xl shadow-indigo-600/35 transition-all duration-300 hover:scale-108 active:scale-95 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-blue-400/40"
          >
            {/* Ambient Pulsing Glow */}
            <span className="absolute inset-0 rounded-full bg-indigo-500 opacity-40 animate-ping pointer-events-none" />

            {/* AI Icon */}
            {isChatOpen ? (
              <ChevronDown className="w-7 h-7 transition-transform duration-300 group-hover:translate-y-0.5" />
            ) : (
              <div className="relative flex items-center justify-center">
                <Bot className="w-7 h-7 sm:w-7.5 sm:h-7.5 drop-shadow-xs transition-transform duration-300 group-hover:scale-110" />
                <Sparkles className="w-3.5 h-3.5 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
            )}

            {/* AI Chip Badge */}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-0.2 bg-slate-900 text-[9px] font-extrabold text-blue-300 rounded-full border border-blue-400/40 shadow-xs uppercase tracking-tighter">
              AI
            </span>
          </button>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MODERN AI CHAT ASSISTANT MODAL (DESKTOP & MOBILE)                      */}
      {/* ========================================================================= */}
      {isChatOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="ai-chat-title"
          className="fixed bottom-24 right-4 sm:right-7 z-50 w-[92vw] sm:w-[410px] h-[550px] max-h-[82vh] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300"
        >
          {/* Header */}
          <div className="p-4 sm:p-4.5 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xs">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 id="ai-chat-title" className="text-sm font-bold leading-tight flex items-center gap-1.5">
                  <span>{uiTexts.aiChatTitle}</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/30 text-emerald-200 text-[10px] font-medium border border-emerald-400/30">
                    {uiTexts.aiOnline}
                  </span>
                </h3>
                <p className="text-[11px] text-blue-100/90 leading-tight mt-0.5">
                  {uiTexts.aiSubtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-white/90">
              {/* Reset Chat Button */}
              <button
                type="button"
                onClick={handleClearChat}
                title={uiTexts.resetTitle}
                className="p-2 rounded-xl hover:bg-white/15 transition-colors cursor-pointer"
                aria-label={uiTexts.resetTitle}
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="p-2 rounded-xl hover:bg-white/15 transition-colors cursor-pointer"
                aria-label={uiTexts.closeAria}
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs text-slate-700 dark:text-slate-200">
            {messages.map((msg, index) => {
              const isAssistant = msg.role === "assistant";
              return (
                <div
                  key={index}
                  className={`flex gap-2.5 ${
                    isAssistant ? "justify-start" : "justify-end"
                  }`}
                >
                  {isAssistant && (
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-xs ${
                      isAssistant
                        ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-sm border border-slate-200/60 dark:border-slate-700/60"
                        : "bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-tr-sm shadow-blue-500/20"
                    }`}
                  >
                    {renderFormattedText(msg.content)}
                  </div>

                  {!isAssistant && (
                    <div className="w-7 h-7 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips (shown if only 1 message exists) */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex gap-1.5 overflow-x-auto no-scrollbar">
              {suggestions.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(item)}
                  className="shrink-0 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/60 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-[11px] font-medium border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <div className="p-3 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder={uiTexts.inputPlaceholder}
              disabled={isLoading}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-[13px] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              type="button"
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputMessage.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 text-white transition-all shadow-md shadow-blue-500/20 cursor-pointer"
              aria-label={uiTexts.sendAria}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
