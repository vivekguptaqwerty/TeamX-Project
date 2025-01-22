import Navbar from "@/components/Navbar";

export default function Menu() {
    return (
        <div>
            <Navbar home={"Menu"}/>
            <div className="p-5">
                <div className="mt-5 flex flex-row-reverse">
                    <ul className="flex flex-col w-[42%]">
                        <li className="pl-4 py-3 flex items-center gap-4"><div className="bg-white w-[3px] h-4"></div>Home</li>
                        <li className="text-[#707070] pl-4 py-3 flex items-center gap-4"><div className="bg-white w-[3px] h-4"></div>Portfolio</li>
                        <li className="text-[#707070] pl-4 py-3 flex items-center gap-4"><div className="bg-white w-[3px] h-4"></div>Profile</li>
                        <li className="text-[#707070] pl-4 py-3 flex items-center gap-4"><div className="bg-white w-[3px] h-4"></div>Setting</li>
                        <li className="text-[#707070] pl-4 py-3 flex items-center gap-4"><div className="bg-white w-[3px] h-4"></div>Help</li>
                    </ul>
                </div>
                <button className="text-[#fff] text-sm border border-[#fff] w-full py-2 rounded-md">LogOut</button>
            </div>
        </div>
    )
}