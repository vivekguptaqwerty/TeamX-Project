export default function Navbar({ home }: { home: String }) {
    return (
        <div className="flex justify-between items-center p-5">
            <img src="/images/logo.png" alt="" />
            {home && <p>{home}</p>}
            {home? <img src="/images/menu.svg" alt="" />:<img src="/images/cross.svg" alt="" />}
        </div>
    )
}