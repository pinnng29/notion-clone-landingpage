import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={45}
          height={45}
        />
        <p className={cn("font-bold", font.className)}>Nextion</p>
      </div>
    </Link>
  );
}
