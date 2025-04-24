import React from 'react'

const AppointmentInfo = () => {
  return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-[659px] mx-auto bg-[#F3F3F3] p-6 shadow-md space-y-4">
                {/* Header */}
                <div className="flex items-start space-x-4">
                    <img src="/UserImage.png" alt="Customer" className="w-[64px] h-[64px] rounded object-cover"/>
                    <div>
                        <h2 className="text-[20px] font-[600] figtree-font text-[#525252]">Customer Name</h2>
                        <p className="text-[16px] font-[500] text-[#B8B8B8] figtree-font">Designation</p>
                    </div>
                    <button className="ml-auto text-gray-400 hover:text-black">✕</button>
                </div>
        
                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                            <p className="font-[500] text-[16px] text-[#B8B8B8] figtree-font">Email</p>
                            <p className="font-[500] text-[20px] text-[#888888] figtree-font">edin@email.com</p>
                    </div>
                    <div>
                        <p className="font-[500] text-[16px] text-[#B8B8B8] figtree-font">Address</p>
                        <p className="font-[500] text-[20px] text-[#888888] figtree-font">Lorem ipsum dolor</p>
                    </div>
                    <div>
                        <p className="font-[500] text-[16px] text-[#B8B8B8] figtree-font">Phone</p>
                        <p className="font-[500] text-[20px] text-[#888888] figtree-font">+0 1234 5678 9</p>
                    </div>
                </div>
        
                {/* Session Details */}
                <div className="bg-[#E7E7E7] p-4 space-y-2">
                    <h3 className="font-[600] text-[16px] text-[#525252] figtree-font">Session Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div>
                            <p className="font-[500] text-[16px]  figtree-font text-[#B8B8B8]">Stylist</p>
                            <p className="font-[500] text-[20px]  figtree-font text-[#888888]">Stylist Name</p>
                        </div>
                        <div>
                            <p className="font-[500] text-[16px]  figtree-font text-[#B8B8B8]">Session Type</p>
                            <p className="font-[500] text-[20px]  figtree-font text-[#888888]">Hair Extensions</p>
                        </div>
                        <div>
                            <p className="font-[500] text-[16px]  figtree-font text-[#B8B8B8]">Date</p>
                            <p className="font-[500] text-[20px]  figtree-font text-[#888888]">March 15, 2025</p>
                        </div>
                        <div>
                            <p className="font-[500] text-[16px]  figtree-font text-[#B8B8B8]">Session time</p>
                            <p className="font-[500] text-[20px]  figtree-font text-[#888888]">1 AM - 3 AM (2 Hrs)</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <p className="font-[500] text-[16px] text-[#B8B8B8] figtree-font">Client Feedback</p>
                        <p className="font-[500] text-[16px] text-[#888888] figtree-font mt-1">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default AppointmentInfo