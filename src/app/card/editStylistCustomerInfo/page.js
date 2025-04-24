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
      <div className="bg-white max-w-[659px] p-[40px] gap-[48px] top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg  w-full absolute">
        {/* <div className="flex justify-start relative">
          <button className="text-[20px] text-center border py-[10px] px-[16px] absolute border-gray-500">✕</button>
        </div> */}
        <div className="flex flex-col justify-center">
            <div className="flex items-end gap-3">
                <div>
                    <img src="/UserImage.png" alt="profile photo"/>
                </div>
                <div className="border flex justify-between items-center px-[16px] py-[8px] gap-[10px] rounded border-[#A0A0A0]">
                    <button className="text-[#A0A0A0] figtree-font text-[12px] font-[400]">Upload Photo</button>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_687_229" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                            <rect width="16" height="16" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_687_229)">
                            <path d="M2 13.9999V1.99992H8.66667V3.33325H3.33333V12.6666H12.6667V7.99992H14V13.9999H2ZM4 11.3333H12L9.5 7.99992L7.5 10.6666L6 8.66659L4 11.3333ZM12 6.66659V3.88325L10.9333 4.93325L10 3.99992L12.6667 1.33325L15.3333 3.99992L14.4 4.93325L13.3333 3.88325V6.66659H12Z" fill="#A0A0A0"/>
                        </g>
                    </svg>
                </div>
                <button>

                    {/* <img src="/Button.png" alt="button"/> */}
                </button>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-10 font-[500px] text-[#B8B8B8]">
                <div className="border rounded-md flex justify-between px-[20px] py-[16px] items-center border-[#A0A0A0]">
                    <input type="text" placeholder="Full Name" className="  placeholder:text-[#B8B8B8] outline-none" />
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.83333 11.6666H2.78333L9.3 5.14995L8.35 4.19995L1.83333 10.7166V11.6666ZM0.5 13V10.1666L10.25 0.449951L13.0333 3.29995L3.33333 13H0.5ZM8.81667 4.68328L8.35 4.19995L9.3 5.14995L8.81667 4.68328Z" fill="#525252"/>
                    </svg>
                </div>
                <div className="border rounded-md flex justify-between px-[20px] py-[16px] items-center border-[#A0A0A0]">
                    <input type="text" placeholder="Full Name" className="  placeholder:text-[#B8B8B8] outline-none" />
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.83333 11.6666H2.78333L9.3 5.14995L8.35 4.19995L1.83333 10.7166V11.6666ZM0.5 13V10.1666L10.25 0.449951L13.0333 3.29995L3.33333 13H0.5ZM8.81667 4.68328L8.35 4.19995L9.3 5.14995L8.81667 4.68328Z" fill="#525252"/>
                    </svg>
                </div>
                <div className="border rounded-md flex justify-between px-[20px] py-[16px] items-center border-[#A0A0A0]">
                    <input type="text" placeholder="Full Name" className="  placeholder:text-[#B8B8B8] outline-none" />
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.83333 11.6666H2.78333L9.3 5.14995L8.35 4.19995L1.83333 10.7166V11.6666ZM0.5 13V10.1666L10.25 0.449951L13.0333 3.29995L3.33333 13H0.5ZM8.81667 4.68328L8.35 4.19995L9.3 5.14995L8.81667 4.68328Z" fill="#525252"/>
                    </svg>
                </div>
                <div className="border rounded-md flex justify-between px-[20px] py-[16px] items-center border-[#A0A0A0]">
                    <input type="text" placeholder="Full Name" className="  placeholder:text-[#B8B8B8] outline-none" />
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.83333 11.6666H2.78333L9.3 5.14995L8.35 4.19995L1.83333 10.7166V11.6666ZM0.5 13V10.1666L10.25 0.449951L13.0333 3.29995L3.33333 13H0.5ZM8.81667 4.68328L8.35 4.19995L9.3 5.14995L8.81667 4.68328Z" fill="#525252"/>
                    </svg>
                </div>
                <button className="w-full bg-black text-white py-[11px] mt-5 gap-[10px] px-[35px] font-[700px] text-[12px] tracking-[3px] leading-[16px] figtree-font">SAVE</button>
                <button className="w-full border border-black text-black mt-5 gap-[10px] py-[11px]  px-[35px] font-[700px] text-[12px] tracking-[3px] leading-[16px] figtree-font">CANCEL</button>
            </form>
        </div>
      </div>
    </div>
  );
}
