export default function CategoryGraph (){
    return(
        <div className="mt-3">
            <h1 className="text-center font-bold">What do you predict ?</h1>
            <div className="p-8 flex flex-col gap-2">
                <div className="w-full h-14 bg-[#131313] rounded-md flex justify-between items-center px-5 relative overflow-hidden">
                    <p className="text-[15px] z-10">A. Jannik Sinner</p>
                    <p className="text-[17px] z-10">80%</p>
                    <div className="w-[80%] h-14 bg-[#009C71] absolute top-0 left-0 rounded-md"></div>
                </div>
                <div className="w-full h-14 bg-[#131313] rounded-md flex justify-between items-center px-5 relative overflow-hidden">
                    <p className="text-[15px] z-10">B. Jannik Sinner</p>
                    <p className="text-[17px] z-10">15%</p>
                    <div className="w-[15%] h-14 bg-[#009C71] absolute top-0 left-0 rounded-md"></div>
                </div>
                <div className="w-full h-14 bg-[#131313] rounded-md flex justify-between items-center px-5 relative overflow-hidden">
                    <p className="text-[15px] z-10">C. Jannik Sinner</p>
                    <p className="text-[17px] z-10">5%</p>
                    <div className="w-[5%] h-14 bg-[#009C71] absolute top-0 left-0 rounded-md"></div>
                </div>
                <div className="w-full h-14 bg-[#131313] rounded-md flex justify-between items-center px-5 relative overflow-hidden">
                    <p className="text-[15px] z-10">D. Jannik Sinner</p>
                    <p className="text-[17px] z-10">5%</p>
                    <div className="w-[5%] h-14 bg-[#009C71] absolute top-0 left-0 rounded-md"></div>
                </div>
            </div>
        </div>
    )
}