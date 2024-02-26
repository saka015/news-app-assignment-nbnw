import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true); 
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
    setLoading(false); 
    navigate("/news"); 
  }
  return (
    <div className="flex justify-center items-center bg-slate-900 min-h-screen">
      <button
        onClick={load}
        className="text-white border-2 rounded-md px-4 py-2 tracking-wider hover:text-slate-700 hover:bg-white active:scale-90"
      >
        {loading ? "Please wait..." : "Get News"}
      </button>
    </div>
  );
};

export default Home;
