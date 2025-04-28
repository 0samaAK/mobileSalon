import React from 'react'

const SetDefault = () => {

    const sessions = [
        { id: 1, name: "Session Name", commission: 190, price: 190 },
        { id: 2, name: "Session Name", commission: 190, price: 190 },
        { id: 3, name: "Session Name", commission: 190, price: 190 },
        { id: 4, name: "Session Name", commission: 190, price: 190 },
        { id: 5, name: "Session Name", commission: 190, price: 190 },
        { id: 6, name: "Session Name", commission: 190, price: 190 },
      ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-[1066] mx-auto bg-[#FFFFFF] p-[24px] gap-[16px] shadow">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-[24px] text-[#363636] leading-[32px] font-[500] figtree-font">Set Default Pricing And Commission Rates</h2>
            <button className="text-gray-400 hover:text-black text-xl">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                    <mask id="mask0_718_3539" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                        <rect x="4" y="4" width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_718_3539)">
                        <path d="M10.4 23L9 21.6L14.6 16L9 10.4L10.4 9L16 14.6L21.6 9L23 10.4L17.4 16L23 21.6L21.6 23L16 17.4L10.4 23Z" fill="#6D6D6D"/>
                    </g>
                </svg>
            </button>
        </div>

        <hr className='border-[#E7E7E7] mb-5'/>

      <div className="overflow-x-auto">
        <table className="min-w-full max-w-[1018px] text-left border-[#F3F3F3] text-[16px]">
          <thead className="bg-[#E7E7E7] text-[#888888] text-[16px] font-[600]">
            <tr className='border-[#F3F3F3] bg-[#E7E7E7] p-[16px] gap-[24px]'>
              <th className="px-4 py-2 gap-[12px] w-[400px]">Session Type</th>
              <th className="px-4 py-2 w-[220px]">Commission Rate</th>
              <th className="px-4 py-2 w-[220px]">Default Price</th>
              <th className="px-4 py-2 w-[102px]"></th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {sessions.map((session) => (
              <tr key={session.id} className="border border-[#F3F3F3]">
                <td className="px-4 py-3 gap-[2px] leading-[16px] text-[16px] font-[600] figtree-font items-center text-[#888888]">{session.name}</td>
                <td className="px-6 py-3 font-[700] leading-[32px] text-[24px] figtree-font items-center text-[#A0A0A0]">${session.commission}</td>
                <td className="px-6 py-3 font-[700] leading-[32px] text-[24px] figtree-font items-center text-[#A0A0A0]">${session.price}</td>
                <td className="px-2 py-3">
                  <button className="flex items-center text-[16px] leading-[20px] font-[600] figtree-font text-[#525252] hover:text-black border border-[#B8B8B8] rounded gap-[8px] px-[24px] py-[8px]">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33333 11.6666H2.28333L8.8 5.14995L7.85 4.19995L1.33333 10.7166V11.6666ZM0 13V10.1666L9.75 0.449951L12.5333 3.29995L2.83333 13H0ZM8.31667 4.68328L7.85 4.19995L8.8 5.14995L8.31667 4.68328Z" fill="#525252"/>
                    </svg>
                    <span>Edit</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default SetDefault