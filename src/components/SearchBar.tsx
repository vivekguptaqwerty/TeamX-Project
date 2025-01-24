import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="flex gap-3 px-2 py-2 rounded-2xl bg-[#161616] mx-5 mt-7 items-center">
      {/* Add width and height for the Image component */}
      <Image
        className="pl-2"
        src="/images/search.svg"
        alt="Search icon"
        width={16} // Set appropriate width for the image
        height={16} // Set appropriate height for the image
      />
      <input
        type="text"
        className="text-[14px] bg-transparent outline-none flex-1 text-white" // Added flex-1 for better resizing
        placeholder="Search by market"
        aria-label="Search by market" // Added accessibility label
      />
    </div>
  );
}
