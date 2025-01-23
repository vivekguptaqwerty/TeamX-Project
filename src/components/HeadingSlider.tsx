interface HeadingSliderProps {
    setFilter: (filter: string) => void;
    filter: string;
}

const HeadingSlider: React.FC<HeadingSliderProps> = ({ setFilter, filter }) => {
    const headings = [
        "Weather & Disaster",
        "Reccomend",
        "Pop Culture",
        "Science",
        "Culture",
        "Tech",
    ];

    return (
        <div className="w-full overflow-x-scroll mb-1 p-1 no-scrollbar border-t border-gray-900">
            <ul className="flex whitespace-nowrap gap-10 pt-1">
                {headings.map((heading, index) => (
                    <li
                        key={index}
                        onClick={() => setFilter(heading)}
                        className={`cursor-pointer text-[13px] flex flex-col items-center gap-1 ${filter === heading ? "text-white" : "text-[#707070]"}`}>
                        {heading}
                        {filter === heading && <div className="w-1 h-1 bg-white rounded-full"></div>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeadingSlider;
