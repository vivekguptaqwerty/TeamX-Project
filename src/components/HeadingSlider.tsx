import { useRouter } from "next/navigation";
import { categories } from "../../public/data.js";

interface HeadingSliderProps {
  setFilter: (filter: string) => void;
  filter: string;
}

const HeadingSlider: React.FC<HeadingSliderProps> = ({ setFilter, filter }) => {
  const router = useRouter();

  return (
    <div className="w-full overflow-x-scroll mb-1 p-1 no-scrollbar border-t border-gray-900 bg-[#0E0E0E]">
      <ul className="flex whitespace-nowrap gap-10 pt-1">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => {
              if (category === "Recommend") {
                setFilter("Recommend");
                router.push("/home");
              } else {
                setFilter(category);
                router.push("/event/category");
              }
            }}
            className={`cursor-pointer text-[13px] flex flex-col items-center gap-1 ${
              filter === category ? "text-white" : "text-[#707070]"
            }`}
          >
            {category}
            {filter === category && (
              <div className="w-1 h-1 bg-white rounded-full"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeadingSlider;
