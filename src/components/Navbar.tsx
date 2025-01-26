"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar({ home }: { home: string }) {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center p-5 bg-[#0E0E0E]">
      <Image onClick={()=>{router.push("/home")}} src="/images/logo.png" alt="Logo image" width={20} height={20} />
      {home && <p>{home}</p>}
      {[
        "Home",
        "Portfolio",
        "Deposit",
        "Withdrawal",
        "Profile",
        "Terms",
        "Setting",
        "Help",
        "",
        "Verification",
      ].includes(home) ? (
        <Image
          onClick={() => {
            router.push("/menu");
          }}
          src="/images/menu.svg"
          alt=""
          width={20}
          height={20}
        />
      ) : (
        <Image
          onClick={() => {
            router.back();
          }}
          src="/images/cross.svg"
          alt=""
          width={20}
          height={20}
        />
      )}
    </div>
  );
}
