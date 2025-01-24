import Image from "next/image";

export default function CategoryAbout() {
  return (
    <div className="p-5">
      <h1 className="text-center font-bold mb-6">About</h1>
      <div className="flex justify-between items-center py-3">
        <div className="flex gap-5">
          <Image src="/images/currencygreen.png" alt="" width={30} height={25}/>
          <p className="text-[19px]">Volume</p>
        </div>
        <p className="text-[#707070] text-[19px]">$15,301,225</p>
      </div>
      <div className="flex justify-between items-center py-3">
        <div className="flex gap-5">
          <Image src="/images/clockgreen.png" alt="" height={25} width={30}/>
          <p className="text-[19px]">End Date</p>
        </div>
        <p className="text-[#707070] text-[19px]">1d11h</p>
      </div>
    </div>
  );
}
