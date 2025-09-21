"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModelContextType {
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  availableModels: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export const availableModels = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    description: "Most capable model, best for complex tasks"
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    description: "Fast and efficient for quick responses"
  },
  {
    id: "gpt-5-nano",
    name: "GPT-5 Nano",
    description: "Fastest, most cost-efficient version of GPT-5"
  },
  {
    id: "o4-mini",
    name: "O4 Mini",
    description: "Fast, cost-efficient reasoning model, succeeded by GPT-5 mini"
  }
];

export function ModelProvider({ children }: { children: ReactNode }) {
  const [selectedModel, setSelectedModel] = useState<string>("gpt-4o");

  return (
    <ModelContext.Provider
      value={{
        selectedModel,
        setSelectedModel,
        availableModels,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
}

export function useModel() {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error("useModel must be used within a ModelProvider");
  }
  return context;
}