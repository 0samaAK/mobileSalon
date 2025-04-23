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
            Join Us   <span className="italic text-[70px] font-[400px] text-[#4A4A4A] kapakana-font"> Today!</span>
          </h2>
          <p className="text-center text-[18px] font-[400px] text-[#727272] mb-[50px] figtree-font">
          Create your account and start managing your services with ease.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 font-[500px] text-[#AAAAAA]">
               <input type="text" placeholder="Full Name" className="border-b border-[#A7A7A7] placeholder:text-[#A7A7A7] pt-[10px] py-2 outline-none" />
               <input type="email" placeholder="Email Address" className="border-b border-[#A7A7A7] placeholder:text-[#A7A7A7] pt-[10px] py-2 outline-none" />
               <input type="text" placeholder="Address" className="border-b py-2 border-[#A7A7A7] placeholder:text-[#A7A7A7] pt-[10px] outline-none" />
               <input type="tel" placeholder="Phone Number" className="border-b border-[#A7A7A7] placeholder:text-[#A7A7A7] pt-[10px] py-2 outline-none" />
               <input type="password" placeholder="Password" className="border-b border-[#A7A7A7] placeholder:text-[#A7A7A7] pt-[10px] py-2 outline-none" />
               <input type="password" placeholder="Confirm Password" className="border-b border-[#A7A7A7] placeholder:text-[#A7A7A7] pt-[10px] py-2 outline-none" />
               
             </form>
             <div className="text-left text-[14px] text-[#AAAAAA] pt-5 mb-7 cursor-pointer pb-[50px] font-[400px] figtree-font">
             <p className="">
               By creating an account, you agree to our{" "}
               <a href="#" className="hover:underline text-[#000000]">Terms of use</a> and{" "}
               <a href="#" className="hover:underline text-[#000000]">Privacy Policy</a>.
             </p>
            </div>
            <button className="w-full bg-black text-white py-[18px] mb-4 px-[32px] font-[500px] text-[12px] tracking-[3px] figtree-font">
              SIGN UP
            </button>
            <div className="flex items-center my-1">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-[#AAAAAA] text-[14px] font-[400px] figtree-font">Already have an account?</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <button className="w-full border border-black text-black mt-4 py-[18px] px-[32px] font-[500px] text-[12px] tracking-[3px] figtree-font">
              SIGN IN
            </button>
          {/* <form className="space-y-4 pt-20 mt-5">
            <input type="email" placeholder="Email Address" className="w-full border-b border-gray-300 text-[#A7A7A7] pb-[10px] pt-[0px] focus:outline-none font-[400px] text-[16px] figtree-font"/>
            <input type="password" placeholder="Password" className="w-full border-b border-gray-300 text-[#A7A7A7] pb-[10px] pt-[10px] focus:outline-none text-[16px] font-[400px] figtree-font"/>
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
          </form> */}
        </div>
      </div>
    </div>
  );
}


// export default function AuthModal() {
//     return (
//       <div className="fixed inset-0 z-50 flex">
//         {/* Background Split */}
//         <div className="w-1/2 hidden md:block">
//           <img
//             src="/image1.png"
//             alt="Left background"
//             className="w-full h-full object-cover grayscale"
//           />
//         </div>
//         <div className="w-full md:w-1/2">
//           <img
//             src="/image.png"
//             alt="Right background"
//             className="w-full h-full object-cover grayscale"
//           />
//         </div>
  
//         {/* Overlay Form */}
//         <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
//           <div className="bg-white w-full max-w-2xl p-10 relative rounded shadow-xl">
//             <button className="absolute top-4 right-4 text-xl">✕</button>
  
//             <h2 className="text-center text-3xl font-light tracking-wide mb-2">
//               Join Us <span className="italic font-serif font-medium">Today!</span>
//             </h2>
//             <p className="text-center text-gray-500 mb-6">
//               Create your account and start managing your services with ease.
//             </p>
  
//             <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input type="text" placeholder="Full Name" className="border-b p-2 outline-none" />
//               <input type="email" placeholder="Email Address" className="border-b p-2 outline-none" />
//               <input type="text" placeholder="Address" className="border-b p-2 outline-none" />
//               <input type="tel" placeholder="Phone Number" className="border-b p-2 outline-none" />
//               <input type="password" placeholder="Password" className="border-b p-2 outline-none" />
//               <input type="password" placeholder="Confirm Password" className="border-b p-2 outline-none" />
//             </form>
  
//             <p className="text-xs text-center text-gray-500 mt-4">
//               By creating an account, you agree to our{" "}
//               <a href="#" className="underline">Terms of use</a> and{" "}
//               <a href="#" className="underline">Privacy Policy</a>.
//             </p>
  
//             <button className="w-full mt-6 bg-black text-white py-2 uppercase tracking-wider hover:bg-gray-800">
//               Sign Up
//             </button>
  
//             <div className="my-4 text-center text-gray-400">Already have an account?</div>
  
//             <button className="w-full border border-black py-2 uppercase tracking-wider hover:bg-gray-100">
//               Sign In
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
  