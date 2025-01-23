import Navbar from "@/components/Navbar";

export default function Login() {
    return (
        <div>
            <Navbar home={"null"}/>
            <h1 className="text-[27px] text-center py-20">LogIn</h1>
            <form action="" className="px-8">
                <div className="flex flex-col gap-2 mb-8">
                    <label className="text-xs text-white opacity-25">Username</label>
                    <input type="text" className="w-full text-xs bg-transparent border-b border-gray-400 outline-none" />
                </div>
                <div className="flex flex-col gap-2 relative">
                    <p className="text-xs text-white opacity-25">Password</p>
                    <p className="text-[9px] underline absolute bottom-1 right-0">Forgot Password</p>
                    <input type="password" className="w-full h-5 text-xs bg-transparent border-b border-gray-400 outline-none"/>
                </div>

                <p className="text-xl opacity-25 text-center py-10">or</p>

                <div className="bg-[#131314] w-60 relative left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-4 py-2 rounded-full">
                    <img src="/images/google.svg" alt="" />
                    Continue with Google
                </div>


                <button className="text-[#2DC198] text-sm border border-[#2DC198] w-full py-2 rounded-md mt-16">Login</button>
            </form>
        </div>
    )
}