'use client'

import { useState } from "react";
// import { X, Edit, Upload } from "lucide-react";

export default function PaymentModal() {
  const [file, setFile] = useState(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-[659px] p-[40px] shadow-xl relative">
        {/* Close button */}
        <button className="absolute top-4 right-4 text-gray-600 hover:text-black">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                <mask id="mask0_687_267" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                    <rect x="4" y="4" width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_687_267)">
                    <path d="M10.4 23L9 21.6L14.6 16L9 10.4L10.4 9L16 14.6L21.6 9L23 10.4L17.4 16L23 21.6L21.6 23L16 17.4L10.4 23Z" fill="#6D6D6D"/>
                </g>
            </svg>

        </button>

        {/* User Info */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/UserImage.png"
            alt="User"
            className="w-15 h-15 object-cover"
          />
          <div>
            <p className="font-[600] text-[20px] text-[#525252] figtree-font">Username</p>
            <p className="text-[16px] font-[500] text-[#B8B8B8]">Designation</p>
          </div>
        </div>

        {/* Payment Due Box */}
        <div className="bg-[#363636] text-white mt-2 p-[24px] gap-[16px] mb-6">
          <p className="text-[16px] text-[#F3F3F3] font-[500]">Payment Due</p>
          <p className="text-[32px] font-[600]">$3,120</p>
        </div>

        {/* Amount Input */}
        <div className="flex items-center border border-[#A0A0A0] rounded px-3 py-2 mb-4">
          <input
            type="text"
            placeholder="Enter Amount"
            className="flex-1 outline-none placeholder-[#B8B8B8]"
          />
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.33333 11.6666H2.28333L8.8 5.14995L7.85 4.19995L1.33333 10.7166V11.6666ZM0 13V10.1666L9.75 0.449951L12.5333 3.29995L2.83333 13H0ZM8.31667 4.68328L7.85 4.19995L8.8 5.14995L8.31667 4.68328Z" fill="#525252"/>
          </svg>
        </div>

        {/* Note Input */}
        <textarea
          placeholder="Attach a note..."
          className="w-full h-50 bg-[#E7E7E7] p-[24px] gap-[24px] rounded mb-4 placeholder-[#888888] resize-none outline-none"
        ></textarea>

        {/* File Upload */}
        <div className="border border-dashed p-[40px] mb-6 text-[16px] text-[#B8B8B8] flex justify-between items-center">
          <span>
            <strong className="font-[600]">Upload Proof</strong>
            <span className="text-[16px] font-[500] ml-1">(Jpeg, PNG 2MB or less)</span>
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_690_325" style={{maskType: 'aplha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_690_325)">
                <path d="M3 21V3H13V5H5V19H19V12H21V21H3ZM6 17H18L14.25 12L11.25 16L9 13L6 17ZM18 10V5.825L16.4 7.4L15 6L19 2L23 6L21.6 7.4L20 5.825V10H18Z" fill="#525252"/>
            </g>
        </svg>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-black text-[#FFFFFF] py-2 uppercase text-[12px] font-[700] tracking-[3px] figtree-font hover:bg-gray-800">
            Confirm Payment
          </button>
          <button className="flex-1 border border-black text-[#000000] py-2 uppercase text-[12px] font-[700] tracking-[3px] figtree-font hover:bg-gray-100">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
