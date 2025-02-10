import "./Loader.css"

export default function Loader() {
  return (
    <div className="w-full h-full fixed flex items-center justify-center bg-black z-50">
      <div className="load-row">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}