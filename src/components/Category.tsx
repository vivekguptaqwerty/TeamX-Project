"use client";
import { useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import CategoryCard from "./CategoryCard";
import { AppContext } from "@/app/Context/AppContext";

export default function Category({ item }: { item: string }) {
  const { setFilter } = useContext(AppContext);
  const router = useRouter();
  const pathname = usePathname();

  const showViewButton = item !== "TOP Topics" && pathname !== "/event/category";

  return (
    <div className="px-5 py-8">
      <div className="flex justify-between">
        <h1 className="text-xl mb-6">{item}</h1>
        {showViewButton && (
          <button
            onClick={() => {
              setFilter(item);
              router.push(`/event/category`);
            }}
            className="bg-[#161616] h-9 px-5 mb-8 rounded-md text-[10px]"
          >
            View ALL
          </button>
        )}
      </div>
      <div className="flex flex-col gap-6">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return <CategoryCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}