export default function CategoryCard() {
    return (
        <div className="rounded-xl bg-[#161616] overflow-hidden">
            <div className="flex gap-3 items-center pt-3 px-3">
                <img src="/images/image.png" alt="" />
                <p className="text-sm">Who will make it to the Asutralian
                    OpenMen's Singles semifinals ?</p>
            </div>
            <div className="flex mt-3 justify-between pl-3 pr-5">
                <div className="flex gap-3 items-center"><img className="w-4" src="/images/clock.svg" alt="" />1d11h</div>
                <span className="text-[19px] text-[#00FFB8]">686%</span>
                <span className="text-[19px] text-[#00FFB8]">1x</span>
                <button className="border border-[#00FFB8] px-4 text-xs rounded-md text-[#00FFB8]">Sports</button>
            </div>
            <div className="flex mt-4 gap-3 text-xs items-center bg-[#1D1D1D] pr-5 pl-3 py-2 text-[#A1A1A1]">
                <img src="/images/currency.png" alt="" />
                $15,301,225 Vol.
            </div>
        </div>
    )
}