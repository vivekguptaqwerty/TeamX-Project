export default function ImageSlider() {
    return (
        <div className="w-full">
            <div className="relative w-[75%] rounded-2xl overflow-hidden">
                <img src="/images/trump.png" alt="" />
                <div className="absolute top-5 left-4 h-[70%] flex flex-col justify-between">
                    <div>
                        <h1 className="text-[15px] mb-1">Trump Inauguration</h1>
                        <p className="text-[8px]">Trump ends Ukraine war <br />
                            before inauguration?</p>
                    </div>
                    <div className="bg-[#707070] flex rounded-full gap-2 w-16 px-3 py-1"><p className="text-[9px]">Politics</p> <img src="/images/leftarrow.svg" alt="" /></div>
                </div>
            </div>
            

            {/* <div className="relative w-[75%] rounded-2xl overflow-hidden">
                <img src="/images/football.png" alt="" />
                <div className="absolute top-5 left-4 h-[70%] flex flex-col justify-between">
                    <div>
                        <h1 className="text-[15px] mb-1">NBA Sports</h1>
                        <p className="text-[8px]">NBA Champion</p>
                    </div>
                    <div className="bg-[#707070] flex rounded-full gap-2 w-16 px-3 py-1"><p className="text-[9px]">Sports</p> <img src="/images/leftarrow.svg" alt="" /></div>
                </div>
            </div> */}
        </div>
    )
}