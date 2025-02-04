import { AppContext } from "@/app/Context/AppContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface HeadingSliderProps {
  setFilter: (filter: string) => void;
  filter: string;
}

const HeadingSlider: React.FC<HeadingSliderProps> = ({ setFilter, filter }) => {
  const router = useRouter();
  const { categories } = useContext(AppContext);
  

  const processedCategories = Array.isArray(categories) 
    ? [
        { name: "Recommend", slug: "recommend" },
        ...categories.map(category => 
          typeof category === 'string' 
            ? { name: category, slug: category.toLowerCase() }
            : category
        )
      ]
    : [{ name: "Recommend", slug: "recommend" }];

  return (
    <div className="w-full overflow-x-scroll mb-1 p-1 no-scrollbar border-t border-gray-900 bg-[#0E0E0E]">
      <ul className="flex whitespace-nowrap gap-10 pt-1">
        {processedCategories.map((category, index) => (
          <li
            key={index}
            onClick={() => {
              if (category.name === "Recommend") {
                setFilter("Recommend");
                router.push("/home");
              } else {
                setFilter(category.name);
                router.push("/event/category");
              }
            }}
            className={`cursor-pointer text-[13px] flex flex-col items-center gap-1 ${
              filter === category.name ? "text-white" : "text-[#707070]"
            }`}
          >
            {category.name}
            {filter === category.name && (
              <div className="w-1 h-1 bg-white rounded-full"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeadingSlider;