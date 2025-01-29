import Image from "next/image";

export default function CategoryInfo() {
  return (
    <div className="p-5">
      <div className="flex my-4 items-end gap-3">
        <div
          className="rounded-lg overflow-hidden"
          style={{ position: "relative", width: "60px", height: "60px" }}
        >
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <button className="border border-[#00FFB8] px-4 py-1 text-xs rounded-md text-[#00FFB8]">
          Sports
        </button>
        <p className="text-[15px] text-[#2DC198] pr-5">Jan 20, 2025</p>
      </div>
      <p className="text-xl text-[#CECECE]">
        Who will make it to the Asutralian OpenMen&apos;s Singles semifinals ?
      </p>
      <div className="flex gap-3 mt-5">
        <div className="w-1/2 p-4 border border-[#323232] rounded-md">
          <p className="text-[#2DC198]">1x</p>
          <p className="text-[13px]">Maximum leverage:</p>
        </div>
        <div className="w-1/2 p-4 border border-[#323232] rounded-md">
          <p className="text-[#2DC198]">686%</p>
          <p className="text-[13px]">Maximum return:</p>
        </div>
      </div>
    </div>
  );
}
