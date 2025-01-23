

export default function ImageSlider({ filter }) {
    const images = [
        { id: 1, src: "/images/trump.png", title: "Trump Inauguration", description: "Trump ends Ukraine war before inauguration?" },
        { id: 2, src: "/images/football.png", title: "NBA Sports", description: "NBA Champion" },
    ];


    return (
        <div className={`w-full ${filter !== "Reccomend" && 'hidden'} relative`}>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex">
                    {images.map((item) => (
                        <div key={item.id} className="relative rounded-2xl overflow-hidden w-full min-w-[320px]">
                            <img src={item.src} alt={item.title} className="w-full h-auto" />
                            <div className="absolute top-5 left-4 h-[70%] flex flex-col justify-between">
                                <div>
                                    <h1 className="text-[15px] mb-1">{item.title}</h1>
                                    <p className="text-[8px]">{item.description}</p>
                                </div>
                                <div className="bg-[#707070] flex rounded-full gap-2 w-16 px-3 py-1">
                                    <p className="text-[9px]">Politics</p>
                                    <img src="/images/leftarrow.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}