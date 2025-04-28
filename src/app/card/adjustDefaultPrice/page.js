import React from 'react'

// Adjust Default Price

const defaultPrice = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-[#F3F3F3] p-[40px] gap-[48px] shadow-lg w-full max-w-[659px] relative">
      {/* Close button */}
      <button className="absolute top-4 right-4 text-gray-500 hover:text-black">
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

      {/* Title */}
      <h2 className="text-[32px] font-[600] leading-[40px] text-[#6D6D6D] mb-2 figtree-font">Session Type</h2>
      <p className="text-[#A0A0A0] text-[24px] leading-[32px] font-[600] mb-4 figtree-font">Current Price - $190</p>

      {/* Price Input */}
      <div className="flex items-center bg-gray-100 border border-[#A0A0A0] rounded px-3 py-2 mb-[24px]">
        <input
          type="text"
          placeholder="New Price"
          className="flex-1 bg-transparent outline-none placeholder-[#B8B8B8]  figtree-font placeholder:text-[16px] placeholder:leading-[16px] placeholder:font-[600]"
        />
      </div>

      {/* Title */}
      <p className="text-[#A0A0A0] text-[24px] font-[600] mb-4 figtree-font">Current Commission - $190</p>

      {/* Price Input */}
      <div className="flex items-center leading-[32px] bg-gray-100 border border-[#A0A0A0] rounded px-3 py-2 mb-[24px]">
        <input
          type="text"
          placeholder="New Commission"
          className="flex-1 bg-transparent outline-none placeholder-[#B8B8B8] placeholder:leading-[16px] figtree-font placeholder:text-[16px] placeholder:font-[600]"
        />
      </div>

      {/* Buttons */}
      <div className="flex mt-10 gap-[24px]">
        <button className="flex-1 bg-black text-white py-[11px] px-[35px] figtree-font uppercase text-[12px] font-[700] tracking-[3px] hover:bg-gray-800">
          Save
        </button>
        <button className="flex-1 border border-black text-black py-[11px] px-[35px] figtree-font uppercase text-[12px] font-[700] tracking-[3px] hover:bg-gray-100">
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}

export default defaultPrice