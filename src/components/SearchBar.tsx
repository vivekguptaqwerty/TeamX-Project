export default function SearchBar() {
    return (
        <div className="flex gap-3 px-2 py-2 rounded-2xl bg-[#161616] mx-5 mt-7">
            <img className="pl-2" src="/images/search.svg" alt="" />
            <input type="text" className="text-[14px] bg-transparent outline-none" placeholder="Search by market" />
        </div>
    )
}