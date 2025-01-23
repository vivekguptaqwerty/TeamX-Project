'use client';
import { useRouter } from "next/navigation"

export default function Navbar({ home }: { home: String }) {
    const router = useRouter();
    return (
        <div className="flex justify-between items-center p-5">
            <img src="/images/logo.png" alt="" />
            {home && <p>{home}</p>}
            {home === "Home"? <img onClick={()=>{router.push("/menu")}} src="/images/menu.svg" alt="" />:<img onClick={()=>{router.push("/")}} src="/images/cross.svg" alt="" />}
        </div>
    )
}