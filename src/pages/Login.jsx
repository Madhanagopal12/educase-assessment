import React from "react";

function Login() {
  return (
    <div className="w-82.5 h-182.5 flex items-start  m-auto  justify-center bg-gray-50 border border-gray-200  ">
      <div className="flex flex-col mt-10 ml-4 mr-4 items-start  mb-4">
        <h1 className="text-xl font-bold mb-4">Signin to your PopX account</h1>
        <span className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ut.
        </span>

        <div className="mt-4 flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="email" className=" text-[14px] text-violet-600">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Enter email address"
              className="border border-gray-300 mt-1 rounded-md px-2 py-1  text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className=" text-[14px] text-violet-600">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="border border-gray-300 mt-1 rounded-md px-2 py-1  text-sm"
            />
          </div>
        </div>
        <button className="bg-violet-400 px-4 py-2 w-full mt-4 text-white font-normal rounded-md hover:bg-violet-400">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
