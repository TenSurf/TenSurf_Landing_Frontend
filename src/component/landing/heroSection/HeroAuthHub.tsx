import Link from "next/link";

export const HeroAuthHub = () => {
  return (
    <div>
      <Link href="/waitlist">
        <div className="h-16 bg-[#082FDF]/20 border border-[#082FDF]/40 rounded-full px-8 flex items-center justify-center gap-2 hover:bg-[#082FDF]/30 transition-colors">
          <span className="w-2 h-2 bg-[#082FDF] rounded-full animate-pulse"></span>
          <span className="font-bold text-lg text-white">Coming Soon</span>
        </div>
      </Link>
    </div>
  );
};
