"use client";

import {
  ArrowRight,
  Code2,
  ShieldCheck,
  Maximize2,
  AlertTriangle,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const TestRedirect = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasRequestedOnce, setHasRequestedOnce] = useState(false);

  const checkFullscreen = useCallback(() => {
    const fs =
      !!document.fullscreenElement ||
      !!(document as any).webkitFullscreenElement ||
      !!(document as any).mozFullScreenElement ||
      !!(document as any).msFullscreenElement;
    setIsFullscreen(fs);
  }, []);

  useEffect(() => {
    document.addEventListener("fullscreenchange", checkFullscreen);
    document.addEventListener("webkitfullscreenchange", checkFullscreen);
    document.addEventListener("mozfullscreenchange", checkFullscreen);
    document.addEventListener("MSFullscreenChange", checkFullscreen);
    checkFullscreen();
    return () => {
      document.removeEventListener("fullscreenchange", checkFullscreen);
      document.removeEventListener("webkitfullscreenchange", checkFullscreen);
      document.removeEventListener("mozfullscreenchange", checkFullscreen);
      document.removeEventListener("MSFullscreenChange", checkFullscreen);
    };
  }, [checkFullscreen]);

  const requestFullscreen = async () => {
    try {
      const el = document.documentElement;
      if (el.requestFullscreen) await el.requestFullscreen();
      else if ((el as any).webkitRequestFullscreen)
        await (el as any).webkitRequestFullscreen();
      else if ((el as any).mozRequestFullScreen)
        await (el as any).mozRequestFullScreen();
      else if ((el as any).msRequestFullscreen)
        await (el as any).msRequestFullscreen();
      setHasRequestedOnce(true);
    } catch {
      setHasRequestedOnce(true);
    }
  };

  const handleGoToTest = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isFullscreen) {
      e.preventDefault();
      requestFullscreen();
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-body selection:bg-white selection:text-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-lg relative z-10">
        <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent"></div>

          <div className="relative z-10 space-y-8 flex flex-col items-center">
            <div className="w-20 h-20 bg-white/[0.05] border border-white/10 rounded-2xl flex items-center justify-center shadow-inner relative group cursor-default">
              <div className="absolute inset-0 bg-[#FFD700]/20 rounded-2xl blur-xl group-hover:bg-[#FFD700]/30 transition-all duration-500"></div>
              <Code2 className="w-10 h-10 text-[#FFD700] relative z-10" />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                CodeNyx Coding Round
              </h1>
              <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 w-full max-w-[280px] mx-auto">
                <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                <span>Secure Testing Environment</span>
              </div>
              <p className="text-white/60 text-base md:text-lg leading-relaxed pt-2">
                You are about to be redirected to the official HackerRank
                assessment portal. Ensure you have a stable internet connection
                before proceeding.
              </p>
            </div>

            {/* Fullscreen requirement notice */}
            {!isFullscreen && (
              <div
                className={`w-full rounded-2xl border p-4 flex flex-col items-center gap-3 transition-all duration-500 ${
                  hasRequestedOnce
                    ? "border-red-500/40 bg-red-500/[0.06]"
                    : "border-[#FFD700]/30 bg-[#FFD700]/[0.04]"
                }`}
              >
                <div className="flex items-center gap-2">
                  {hasRequestedOnce ? (
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                  ) : (
                    <Maximize2 className="w-4 h-4 text-[#FFD700] shrink-0" />
                  )}
                  <p
                    className={`text-sm font-medium ${
                      hasRequestedOnce ? "text-red-400" : "text-[#FFD700]"
                    }`}
                  >
                    {hasRequestedOnce
                      ? "Fullscreen required to proceed"
                      : "Fullscreen mode required"}
                  </p>
                </div>
                <p className="text-white/50 text-xs text-center leading-relaxed">
                  {hasRequestedOnce
                    ? "It looks like fullscreen was dismissed or blocked. Click below to try again — you must be in fullscreen to access the test."
                    : "This assessment must be taken in fullscreen mode to maintain integrity. Click the button below to enable it."}
                </p>
                <button
                  onClick={requestFullscreen}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white/80 text-sm font-medium transition-all duration-200 hover:border-white/20"
                >
                  <Maximize2 className="w-4 h-4" />
                  Enter Fullscreen
                </button>
              </div>
            )}

            {/* Fullscreen confirmed state */}
            {isFullscreen && (
              <div className="w-full rounded-2xl border border-green-500/30 bg-green-500/[0.05] p-3 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                <p className="text-green-400 text-sm font-medium">
                  Fullscreen active — you're good to go
                </p>
              </div>
            )}

            <div className="pt-4 w-full">
              <a
                href="https://www.hackerrank.com/codenyx-round1-online"
                onClick={handleGoToTest}
                className={`relative flex items-center justify-center gap-3 w-full py-4 px-8 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 group overflow-hidden ${
                  isFullscreen
                    ? "bg-white text-black hover:bg-gray-200 focus:ring-white/20 cursor-pointer"
                    : "bg-white/10 text-white/40 cursor-not-allowed border border-white/10"
                }`}
                aria-disabled={!isFullscreen}
                tabIndex={isFullscreen ? 0 : -1}
              >
                <span className="relative z-10 text-lg">Go to Test</span>
                <ArrowRight
                  className={`w-5 h-5 relative z-10 transition-transform ${
                    isFullscreen ? "group-hover:translate-x-1" : ""
                  }`}
                />
                {isFullscreen && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                )}
              </a>
              {!isFullscreen && (
                <p className="text-white/30 text-xs mt-2 text-center">
                  Enter fullscreen to enable this button
                </p>
              )}
            </div>

            <div className="text-xs text-white/40 pt-6 border-t border-white/10 w-full">
              By proceeding, you agree to the assessment terms and conditions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestRedirect;
