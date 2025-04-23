import React from "react";
// suspend modal
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
      <div className="bg-white max-w-[659px] p-[40px] gap-[48px] top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg  w-full absolute">
        {/* <div className="flex justify-start relative">
          <button className="text-[20px] text-center border py-[10px] px-[16px] absolute border-gray-500">✕</button>
        </div> */}
        <div className="flex flex-col justify-center">
            <div>
                <h1 className="text-[#525252] font-[600px] text-[20px] leading-[24px] figtree-font">Are you sure you want to Suspend this Stylist?</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-10 font-[500px] text-[#B8B8B8]">
                <button className="w-full bg-black text-white py-[11px] mt-5 gap-[10px] px-[35px] font-[700px] text-[12px] tracking-[3px] leading-[16px] figtree-font">YES</button>
                <button className="w-full border border-black text-black mt-5 gap-[10px] py-[11px]  px-[35px] font-[700px] text-[12px] tracking-[3px] leading-[16px] figtree-font">NO</button>
            </div>
        </div>
      </div>
    </div>
  );
}
