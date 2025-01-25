import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function SuccessPage() {
  return (
    <div>
      <Navbar home={""} />
      <div className="p-5 flex flex-col justify-between h-[680px]">
        <h1 className="text-center text-[27px] mt-16">Verify Email</h1>
        <div className="flex flex-col items-center justify-center text-center gap-10">
          <Image
            src="/Icons/SuccessIcon.png"
            alt=""
            width={70}
            height={70}
          ></Image>
          <h2 className="text-[22px]">
          Mail Verification are successful !
          </h2>
          <p className="text-[#707070] text-[13px] px-12">
          Email already berifiled.
          </p>
        </div>
        <button className="w-full py-4 px-4 border-[#2DC198] border-[0.25px] rounded-lg transition-colors text-[#2DC198]">
          Next
        </button>
      </div>
    </div>
  );
}
