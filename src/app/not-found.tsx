import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="relative mb-8">
        <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Lost in Space?
          </h2>
        </div>
      </div>

      <p className="max-w-md mx-auto text-lg text-white/60 mb-10 leading-relaxed">
        The page you looking for doesn&apos;t exist or has been moved to another
        coordinate.
      </p>

      <Link href="/" className="btn-primary flex items-center gap-2 group">
        <MoveLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-[#EAE5D9]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </div>
  );
}
