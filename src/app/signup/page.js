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
          <h2 className="text-[48px] text-center text-[#4A4A4A] font-[400] mogan-font leading-[80px]">
            Join Us   <span className="italic text-[70px] font-[400] text-[#4A4A4A] kapakana-font"> Today!</span>
          </h2>
          <p className="text-center text-[18px] font-[400] text-[#727272] mb-[50px] figtree-font">
          Create your account and start managing your services with ease.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 font-[500] text-[#AAAAAA]">
               <input type="text" placeholder="Full Name" className="border-b border-[#A7A7A7] placeholder:text-[#A7A7A7] pt-[10px] py-2 outline-none" />
               <input type="email" placeholder="Email Address" className="border-b border-[#A7A7A7] placeholder:text-[#A7A7A7] pt-[10px] py-2 outline-none" />
               <input type="text" placeholder="Address" className="border-b py-2 border-[#A7A7A7] placeholder:text-[#A7A7A7] pt-[10px] outline-none" />
               <input type="tel" placeholder="Phone Number" className="border-b border-[#A7A7A7] placeholder:text-[#A7A7A7] pt-[10px] py-2 outline-none" />
               <input type="password" placeholder="Password" className="border-b border-[#A7A7A7] placeholder:text-[#A7A7A7] pt-[10px] py-2 outline-none" />
               <input type="password" placeholder="Confirm Password" className="border-b border-[#A7A7A7] placeholder:text-[#A7A7A7] pt-[10px] py-2 outline-none" />
               
             </form>
             <div className="text-left text-[14px] text-[#AAAAAA] pt-5 mb-7 cursor-pointer pb-[50px] font-[400] figtree-font">
             <p className="">
               By creating an account, you agree to our{" "}
               <a href="#" className="hover:underline text-[#000000]">Terms of use</a> and{" "}
               <a href="#" className="hover:underline text-[#000000]">Privacy Policy</a>.
             </p>
            </div>
            <button className="w-full bg-black text-white py-[18px] mb-4 px-[32px] font-[500] text-[12px] tracking-[3px] figtree-font">
              SIGN UP
            </button>
            <div className="flex items-center my-1">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-[#AAAAAA] text-[14px] font-[400] figtree-font">Already have an account?</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <button className="w-full border border-black text-black mt-4 py-[18px] px-[32px] font-[500] text-[12px] tracking-[3px] figtree-font">
              SIGN IN
            </button>
        </div>
      </div>
    </div>
  );
}