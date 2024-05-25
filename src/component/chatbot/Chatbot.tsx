"use client";
import React from "react";
import ChatBot, { Flow } from "react-chatbotify";
import { HttpMethod, sendRequest } from "@/helpers/http-request";

const flow: Flow = {
  start: {
    message: "Hello! \n What is your email address",
    path: params => {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (params.userInput.match(regex))
        return "thank";
      else
        return "retry";
    }
  },
  retry: {
    message: "email is not valid , please try again",
    path: async params => {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (params.userInput.match(regex)) {
        sendRequest("http://localhost:8000/api/chat", HttpMethod.POST, {
          email: params.userInput
        });
        return "thank";
      } else
        return "retry";
    }
  },
  thank: {
    message: "thank you !",
    path: "",
    chatDisabled: true
  }
};


const Chatbot = () => {
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
        botBubbleStyle: {
          width: "50px !important",
          backgroundSize: "40px 40px",
          boxSizing: "border-box",
          border: "white 1px solid",
          backgroundImage: "url(/svg/bot.svg)",
          height: "50px !important",
          padding: "10px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        },
        chatButton: { icon: "/svg/bot.svg" },
        notificationBadgeStyle: { display: "none" },
        footer: { text: "footer text (or jsx element)" },
        chatButtonStyle: {
          height: "50px",
          width: "50px",
          padding: "10px"
        }
      }}
      flow={flow}
    />
  );
};

export default Chatbot;