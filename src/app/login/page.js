import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex relative" >
        <div className="flex items-center justify-between">
            <div className="" >
                <img src="/image1.png" alt="left" className="min-h-[100vh] object-cover"/>
            </div>
            <div className="" >
                <img src="/image.png" alt="left" className="min-h-[100vh] object-cover"/>
            </div>
        </div>
      <div className="bg-white px-[80px] pt-[80px] pb-[128px] gap-[10px] top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg  w-full max-w-[846px] absolute">
        {/* <div className="flex justify-start relative">
          <button className="text-[20px] text-center border py-[10px] px-[16px] absolute border-gray-500">✕</button>
        </div> */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[48px] text-center text-[#4A4A4A] font-[400px] mogan-font leading-[80px]">
            Welcome   <span className="italic text-[70px] font-[400px] text-[#4A4A4A] kapakana-font"> Back!</span>
          </h2>
          <p className="text-center text-[18px] font-[400px] text-[#727272]  figtree-font">
            Sign in to access your dashboard and manage your profile effortlessly.
          </p>
          <form className="space-y-4 pt-20 mt-5">
            <input type="email" placeholder="Email Address" className="w-full border-b border-gray-300 placeholder:text-[#A7A7A7] text-[#A7A7A7] pb-[10px] pt-[0px] focus:outline-none font-[400px] text-[16px] figtree-font"/>
            <input type="password" placeholder="Password" className="w-full border-b border-gray-300 placeholder:text-[#A7A7A7] text-[#A7A7A7] pb-[10px] pt-[10px] focus:outline-none text-[16px] font-[400px] figtree-font"/>
            <div className="text-left text-[14px] text-[#A7A7A7] cursor-pointer pb-[50px] hover:underline font-[400px] figtree-font">
              Forgot Password?
            </div>
            <button className="w-full bg-black text-white py-[18px] px-[32px] font-[500px] text-[12px] tracking-[3px] figtree-font">
              LOG IN
            </button>
            <div className="flex items-center my-1">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500 text-[14px] font-[400px] figtree-font">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <button className="w-full border border-black text-black mt-4 py-[18px] px-[32px] font-[500px] text-[12px] tracking-[3px] figtree-font">
              CREATE ACCOUNT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
