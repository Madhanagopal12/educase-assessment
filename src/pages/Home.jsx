import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-82.5 h-182.5 m-auto flex items-center justify-center bg-gray-50 border border-gray-200 px-4 ">
      <div className="fixed bottom-4 w-82.5 mb-10 px-4">
        <h1 className="text-black text-xl font-bold mb-2">Welcome to PopX</h1>
        <p className=" text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, rerum.
        </p>
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => navigate("/sign-in")}
            className="bg-violet-600 px-4 py-2 w-full text-white font-normal rounded-md hover:bg-violet-400"
          >
            Create account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-gray-300  hover:bg-gray-200 px-4 py-2 w-full text-black font-normal rounded-md"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
