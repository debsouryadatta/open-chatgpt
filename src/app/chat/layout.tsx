import { SidebarProvider } from "@/components/ui/sidebar";
import { ChatSidebar } from "@/components/chat-sidebar";
import { ModelProvider } from "@/contexts/model-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ModelProvider>
        <div className="flex h-screen bg-[#212121] text-white w-screen">
          <ChatSidebar />
          <main className="flex-1 flex flex-col min-w-0">
            {children}
          </main>
        </div>
      </ModelProvider>
    </SidebarProvider>
  );
}
