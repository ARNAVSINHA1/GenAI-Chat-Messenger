import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [context, setContext] = useState({
    messages: [],
    activeChat: null,
  });

  const set = (key, value) => {
    setContext((prevContext) => ({ ...prevContext, [key]: value }));
  };

  const get = (key) => context[key];

  const deleteKey = (key) => {
    setContext((prevContext) => {
      const newContext = { ...prevContext };
      delete newContext[key];
      return newContext;
    });
  };

  const isEmpty = () => Object.keys(context).length === 0;

  const toJson = () => JSON.stringify(context);

  const fromJson = (jsonString) => {
    setContext(JSON.parse(jsonString));
  };

  return (
    <ChatContext.Provider value={{ set, get, deleteKey, isEmpty, toJson, fromJson, ...context }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);