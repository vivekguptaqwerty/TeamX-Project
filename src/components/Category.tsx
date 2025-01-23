import CategoryCard from "./CategoryCard"

export default function Category({ item }: { item: string }) {
    return (
        <div className="px-5 py-8">
            <div className="flex justify-between">
                <h1 className="text-xl mb-6">{item}</h1>
                {item !== "TOP Topics" && <button className="bg-[#161616] h-9 px-5 mb-8 rounded-md text-[10px]">View ALL</button>}
            </div>
            <div className="flex flex-col gap-6">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <CategoryCard key={index} item={item} />
                    )
                })}
            </div>
        </div>
    )
}