"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ChatBot, { Flow } from "react-chatbotify";
import { HttpMethod, sendRequest } from "@/helpers/http-request";


const Chatbot = () => {

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [request, setRequest] = useState<string>();

  useEffect(() => {
    if (email) {
      sendRequest("http://localhost:8000/api/chat", HttpMethod.POST, {
        email: email
      });
    }
  }, [email]);

  let verifyEmail = useCallback((input: string) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(regex)) {
      setEmail(input);
      return "thank";
    }
    else
      return "retry";
  }, []);

  const flow: Flow = useMemo(() => ({
    start: {
      message: "Welcome to TenSurf! Please provide your name.",
      function: params => {
        setName(params.userInput)
      },
      path: "getEmail"
    },
    getEmail: {
      message: params => `Thank you, ${params.userInput}! Please provide your email address.`,
      path: params => verifyEmail(params.userInput)
    },
    retry: {
      message: "Email is not valid. Please enter a valid email address",
      path: async params => verifyEmail(params.userInput)
    },
    thank: {
      message: `Thank you, ${name}! We have received your request and will respond to ${email} as soon as possible.`,
      path: "",
      chatDisabled: true
    }
  }) , [name , email]);

  return (
    <ChatBot
      options={{
        chatHistory: { storageKey: "conversations_summary" },
        tooltip: {},
        tooltipStyle: { display: "none" },
        header: { title: "TenSerf" },
        emoji: { disabled: true },
        botBubble: { simStream: true },
        fileAttachment: { disabled: true },
        chatHistoryButtonStyle: { display: "none" },
        chatButtonStyle: {
          width: "50px",
          backgroundSize: "40px 40px",
          boxSizing: "border-box",
          border: "white 1px solid",
          backgroundImage: "url(/svg/bot.svg)",
          height: "50px",
          padding: "10px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        },
        notification: {disabled: true , icon: undefined},
        notificationBadgeStyle: { display: "none" , height: 0, width: 0},
        chatButton: { icon: "/svg/bot.svg" },
        footer: { text: "footer text (or jsx element)" },
      }}
      flow={flow}
    />
  );
};

export default Chatbot;