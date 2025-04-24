import React from 'react'

const CustomerActivity = () => {
  return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="max-w-[659px] mx-auto bg-[#F3F3F3] p-[40px] shadow-md space-y-4">
                {/* Header */}
                <div className="flex items-start space-x-4">
                    <img src="/UserImage.png" alt="Customer" className="w-[64px] h-[64px] rounded object-cover"/>
                    <div>
                        <h2 className="text-[20px] font-[600] figtree-font leading-[16px] text-[#525252]">Username</h2>
                        <p className="text-[16px] font-[500] text-[#B8B8B8] leading-[14px]figtree-font">Designation</p>
                    </div>
                    <button className="ml-auto  text-gray-400 hover:text-black">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                            <mask id="mask0_690_621" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <rect x="4" y="4" width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_690_621)">
                                <path d="M10.4 23L9 21.6L14.6 16L9 10.4L10.4 9L16 14.6L21.6 9L23 10.4L17.4 16L23 21.6L21.6 23L16 17.4L10.4 23Z" fill="#6D6D6D"/>
                            </g>
                        </svg>
                    </button>
                </div>

                {/* date */}
                <div className="flex items-center my-0">
                    <span className="mr-2 text-[#A0A0A0] text-[12px] font-[500] figtree-font">March 15,2024</span>
                    <hr className="flex-grow border-[#D9D9D9]" />
                </div>

                {/* Message */}
                <div className="mt-5 bg-[#E7E7E7] p-[24px] gap-[16px] space-y-3">
                    <h3 className="font-[500] text-[16px] text-[#363636] leading-[24px] figtree-font">Review</h3>
                    <p className="font-[500] text-[20px] text-[#6D6D6D] leading-[24px] figtree-font mt-1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                </div>
                {/* date */}
                <div className="flex items-center my-0">
                    <span className="mr-2 text-[#A0A0A0] text-[12px] font-[500] figtree-font">March 15,2024</span>
                    <hr className="flex-grow border-[#D9D9D9]" />
                </div>

                {/* Message */}
                <div className="mt-5 bg-[#E7E7E7] p-[24px] gap-[16px] space-y-3">
                    <h3 className="font-[500] text-[16px] leading-[24px] text-[#363636] figtree-font">Transaction</h3>
                    <p className="font-[500] text-[20px] text-[#6D6D6D] leading-[24px]figtree-font mt-1">Transferred $450 to the Platform.</p>
                </div>
                {/* date */}
                <div className="flex items-center my-0">
                    <span className="mr-2 text-[#A0A0A0] text-[12px] font-[500] figtree-font">March 15,2024</span>
                    <hr className="flex-grow border-[#D9D9D9]" />
                </div>

                {/* Message */}
                <div className="mt-5 bg-[#E7E7E7] p-[24px] gap-[16px] space-y-3">
                    <h3 className="font-[500] text-[16px] text-[#363636] leading-[24px] figtree-font">Booking</h3>
                    <p className="font-[600] text-[24px] text-[#6D6D6D] leading-[32px] figtree-font mt-1">Shampoo & Style w/other Service</p>
                </div>

                <button className="w-full border border-black text-black mt-5 py-[11px] px-[35px] font-[700] leading-[16px] text-[12px] tracking-[3px] figtree-font">SEE MORE</button>
            </div>
        </div>  
    );
}

export default CustomerActivity