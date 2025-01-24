import Image from "next/image";
import { useRouter } from "next/navigation";

type CategoryType = {
  item: number;
};

export default function CategoryCard({ item }: CategoryType) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push("/event/category/1");
      }}
      className="rounded-xl bg-[#161616] overflow-hidden cursor-pointer"
    >
      {/* Card Header */}
      <div className="flex gap-3 items-center pt-3 px-3">
 main
        <Image src="/images/image.png" alt="" height={70} width={70}/>
=======
        <Image
          src="/images/image.png"
          alt="Event thumbnail"
          width={40} // Set the appropriate width
          height={40} // Set the appropriate height
          className="rounded-full" // Added a rounded style if needed
        />
 Vivek
        <div className="hidden">{item.toString()}</div>
        <p className="text-sm">
          Who will make it to the Australian Open Men&apos;s Singles semifinals?
        </p>
      </div>

      {/* Card Details */}
      <div className="flex mt-3 justify-between pl-3 pr-5">
        <div className="flex gap-3 items-center">
 main
          <Image className="w-4" src="/images/clock.svg" alt="" height={10} width={10}/>
=======
          <Image
            src="/images/clock.svg"
            alt="Clock icon"
            width={16} // Set width for clock icon
            height={16} // Set height for clock icon
            className="w-4"
          />
 Vivek
          1d11h
        </div>
        <span className="text-[19px] text-[#00FFB8]">686%</span>
        <span className="text-[19px] text-[#00FFB8]">1x</span>
        <button className="border border-[#00FFB8] px-4 text-xs text-[#00FFB8]">
          Sports
        </button>
      </div>

      {/* Card Footer */}
      <div className="flex mt-4 gap-3 text-xs items-center bg-[#1D1D1D] pr-5 pl-3 py-2 text-[#A1A1A1]">
 main
        <Image src="/images/currency.png" alt="" height={20} width={20}/>
=======
        <Image
          src="/images/currency.png"
          alt="Currency icon"
          width={16} // Set width for currency icon
          height={16} // Set height for currency icon
        />
 Vivek
        $15,301,225 Vol.
      </div>
    </div>
  );
}
