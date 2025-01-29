import "./Loader.css"

export default function Loader() {
  return (
    <div className="w-full h-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="load-row">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}