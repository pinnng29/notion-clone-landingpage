"use client";

import Logo from "@/components/logo";
import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";


export default function Navbar() {
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "flex items-center p-4 py-6",
      scrolled && "border-b shadow-md"
    )}>
      <Logo />
    </div>
  )
}
