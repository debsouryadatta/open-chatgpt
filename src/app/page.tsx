import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { AnimatedGradient } from "@/components/animated-gradient";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700">
      <header className="flex justify-between items-center p-6 h-16 backdrop-blur-sm bg-white/5">
        <div className="flex items-center">
          <Image
            src="/chatgpt.svg"
            alt="OpenAI Logo"
            width={36}
            height={36}
            className="mr-3"
          />
          <span className="text-white font-bold text-lg">OpenAI</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-white/80 hover:text-white transition-all duration-200 hover:scale-105 font-medium"
          >
            Research
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-all duration-200 hover:scale-105 font-medium"
          >
            Product
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-all duration-200 hover:scale-105 font-medium"
          >
            Safety
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-all duration-200 hover:scale-105 font-medium"
          >
            Company
          </a>
        </nav>
        <div className="flex items-center">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-white/80 hover:text-white font-medium text-sm px-5 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-pointer">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </header>

      <main className="flex flex-col md:flex-row px-6 py-20 md:px-16 md:py-32 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            Introducing ChatGPT
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-lg text-white/90 leading-relaxed">
            We&apos;ve trained a model called ChatGPT which interacts in a
            conversational way. The dialogue format makes it possible for
            ChatGPT to answer followup questions, admit its mistakes, challenge
            incorrect premises, and reject inappropriate requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-white text-indigo-800 rounded-xl px-6 py-3 font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-200 flex items-center shadow-lg hover:shadow-xl">
                  Try ChatGPT
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/chat"
                className="bg-white text-indigo-800 rounded-xl px-6 py-3 font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-200 flex items-center shadow-lg hover:shadow-xl cursor-pointer"
              >
                Try ChatGPT
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </SignedIn>
            <a
              href="#"
              className="text-white border-2 border-white/30 rounded-xl px-6 py-3 font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-200 hover:scale-105"
            >
              Read about ChatGPT Plus
            </a>
          </div>
        </div>
        <div className="hidden md:block w-1/2 mt-10 md:mt-0 ml-8">
          <div className="relative h-full w-full min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 to-indigo-900/60 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/10">
              <AnimatedGradient />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
