"use client";

import { useState, useEffect, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

interface ChatItem {
  chatId: string;
  title: string;
}

interface SearchChatModalProps {
  open: boolean;
  onClose: () => void;
  chats: ChatItem[];
}

export default function SearchChatModal({
  open,
  onClose,
  chats,
}: SearchChatModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  // Filter chats based on search query
  const filteredChats = useMemo(() => {
    if (!searchQuery.trim()) return chats;
    return chats.filter((chat) =>
      chat.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [chats, searchQuery]);

  // Reset selected index when search query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Reset search when modal closes
  useEffect(() => {
    if (!open) {
      setSearchQuery("");
      setSelectedIndex(0);
    }
  }, [open]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredChats.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && filteredChats[selectedIndex]) {
      e.preventDefault();
      handleChatSelect(filteredChats[selectedIndex]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  // Handle chat selection
  const handleChatSelect = (chat: ChatItem) => {
    router.push(`/chat/${chat.chatId}`);
    onClose();
  };

  // Handle mouse hover
  const handleMouseEnter = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className="bg-[#2f2f2f] border-[#4a4a4a] text-white w-[500px] max-w-[90vw] rounded-xl p-0 overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        {/* Search Input */}
        <div className="flex items-center px-4 py-3 border-b border-gray-600">
          <Search className="w-4 h-4 text-gray-400 mr-3" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chats"
            className="flex-1 bg-transparent border-0 text-white placeholder-gray-400 focus:ring-0 focus:outline-none p-0"
            autoFocus
          />
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchQuery.trim() === "" ? (
            <div className="p-4">
              <div className="text-gray-400 text-sm mb-3">Recent chats</div>
              {chats.slice(0, 8).map((chat, index) => (
                <div
                  key={chat.chatId}
                  onClick={() => handleChatSelect(chat)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    index === selectedIndex
                      ? "bg-gray-600/50"
                      : "hover:bg-gray-700/30"
                  }`}
                >
                  <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-sm text-gray-200 truncate">
                    {chat.title || "Untitled Chat"}
                  </span>
                </div>
              ))}
            </div>
          ) : filteredChats.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-gray-400 text-sm">No chats found</div>
              <div className="text-gray-500 text-xs mt-1">
                Try a different search term
              </div>
            </div>
          ) : (
            <div className="p-4">
              <div className="text-gray-400 text-sm mb-3">
                {filteredChats.length} result{filteredChats.length !== 1 ? "s" : ""}
              </div>
              {filteredChats.map((chat, index) => (
                <div
                  key={chat.chatId}
                  onClick={() => handleChatSelect(chat)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    index === selectedIndex
                      ? "bg-gray-600/50"
                      : "hover:bg-gray-700/30"
                  }`}
                >
                  <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-sm text-gray-200 truncate">
                    {chat.title || "Untitled Chat"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-4 py-2 border-t border-gray-600 bg-gray-800/30">
          <div className="text-xs text-gray-500 flex items-center gap-4">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
            <span>esc to close</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}