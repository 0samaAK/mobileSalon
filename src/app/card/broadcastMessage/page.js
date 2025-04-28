'use client';

// Broadcast Message

import { useState } from 'react';

const users = Array(5).fill({
  name: 'Username',
  designation: 'Designation',
  email: 'user@example.com',
  amount: 190.38,
  avatar: '/UserImage.png', // replace with actual path or use a placeholder image
});

const broadcastMessage = () => {
    const [selectedUsers, setSelectedUsers] = useState([]);

    const toggleUser = (user) => {
      if (selectedUsers.includes(user)) {
        setSelectedUsers(selectedUsers.filter((u) => u !== user));
      } else {
        setSelectedUsers([...selectedUsers, user]);
      }
    };
  
    return (
      <div className="max-w-[659px] mx-auto bg-[#F3F3F3] p-[40px] gap-[48px] shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[20px] font-[600] leading-[16px] figtree-font">Send Message</h2>
          <button className="text-gray-500 gap-[4px] text-2xl hover:text-black">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
              <mask id="mask0_702_1615" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                <rect x="4" y="4" width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_702_1615)">
                <path d="M10.4 23L9 21.6L14.6 16L9 10.4L10.4 9L16 14.6L21.6 9L23 10.4L17.4 16L23 21.6L21.6 23L16 17.4L10.4 23Z" fill="#6D6D6D"/>
              </g>
            </svg>
          </button>
        </div>
  
        <input type="text" placeholder="Emails, Username" className="w-full border px-[20px] py-[16px] gap-[40px] rounded bg-[#F3F3F3] border-[#A0A0A0]"/>
  
        <div className="flex items-center rounded my-5 gap-[8px]">
          <label htmlFor="selectAll" className='text-[16px] text-[#6D6D6D] leading-[16px] font-[500] figtree-font'>Select All</label>
          <input type="checkbox" id="selectAll" className='w-[16px] h-[16px]'/>
        </div>
  
        {/* <div className="flex flex-wrap gap-[16px] mb-6">
          {selectedUsers.map((user, idx) => (
            <div key={idx} className="flex bg-[#DBDBDB] items-center gap-[8px] pr-[8px] rounded pl-[4px] py-[4px]">
              <img src={user.avatar} alt="avatar" className="w-[32px] h-[32px] rounded" />
              <span className='text-[#6D6D6D] text-[16px] font-[500] leading-[16px] figtree-font'>{user.name}</span>
              <button onClick={() => toggleUser(user)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_702_1720" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                    <rect width="16" height="16" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_702_1720)">
                    <path d="M4.26683 12.6667L3.3335 11.7334L7.06683 8.00004L3.3335 4.26671L4.26683 3.33337L8.00016 7.06671L11.7335 3.33337L12.6668 4.26671L8.9335 8.00004L12.6668 11.7334L11.7335 12.6667L8.00016 8.93337L4.26683 12.6667Z" fill="#888888"/>
                  </g>
                </svg>
              </button>
            </div>
          ))}
        </div> */}

        <div className='flex flex-wrap gap-[16px] mb-10'>
          <div className='flex max-w-[150px] bg-[#DBDBDB] items-center rounded gap-[8px] pl-[4px] pr-[8px] py-[4px]'>
            <img src='/UserImage.png' alt='proflie pic' className='w-[32px] h-[32px] rounded'/>
            <h3 className='figtree-font font-[500] text-[16px] leading-[16px] text-[#6D6D6D]'>Username</h3>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_709_2491" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                <rect width="16" height="16" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_709_2491)">
                <path d="M4.26634 12.6666L3.33301 11.7333L7.06634 7.99992L3.33301 4.26659L4.26634 3.33325L7.99967 7.06659L11.733 3.33325L12.6663 4.26659L8.93301 7.99992L12.6663 11.7333L11.733 12.6666L7.99967 8.93325L4.26634 12.6666Z" fill="#888888"/>
              </g>
            </svg>
          </div>
          
          <div className='flex max-w-[150px] bg-[#DBDBDB] items-center rounded gap-[8px] pl-[4px] pr-[8px] py-[4px]'>
            <img src='/UserImage.png' alt='proflie pic' className='w-[32px] h-[32px] rounded'/>
            <h3 className='figtree-font font-[500] text-[16px] leading-[16px] text-[#6D6D6D]'>Username</h3>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_709_2491" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                <rect width="16" height="16" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_709_2491)">
                <path d="M4.26634 12.6666L3.33301 11.7333L7.06634 7.99992L3.33301 4.26659L4.26634 3.33325L7.99967 7.06659L11.733 3.33325L12.6663 4.26659L8.93301 7.99992L12.6663 11.7333L11.733 12.6666L7.99967 8.93325L4.26634 12.6666Z" fill="#888888"/>
              </g>
            </svg>
          </div>

          <div className='flex max-w-[150px] bg-[#DBDBDB] items-center rounded gap-[8px] pl-[4px] pr-[8px] py-[4px]'>
            <img src='/UserImage.png' alt='proflie pic' className='w-[32px] h-[32px] rounded'/>
            <h3 className='figtree-font font-[500] text-[16px] leading-[16px] text-[#6D6D6D]'>Username</h3>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_709_2491" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                <rect width="16" height="16" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_709_2491)">
                <path d="M4.26634 12.6666L3.33301 11.7333L7.06634 7.99992L3.33301 4.26659L4.26634 3.33325L7.99967 7.06659L11.733 3.33325L12.6663 4.26659L8.93301 7.99992L12.6663 11.7333L11.733 12.6666L7.99967 8.93325L4.26634 12.6666Z" fill="#888888"/>
              </g>
            </svg>
          </div>
          
          <div className='flex max-w-[150px] bg-[#DBDBDB] items-center rounded gap-[8px] pl-[4px] pr-[8px] py-[4px]'>
            <img src='/UserImage.png' alt='proflie pic' className='w-[32px] h-[32px] rounded'/>
            <h3 className='figtree-font font-[500] text-[16px] leading-[16px] text-[#6D6D6D]'>Username</h3>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_709_2491" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                <rect width="16" height="16" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_709_2491)">
                <path d="M4.26634 12.6666L3.33301 11.7333L7.06634 7.99992L3.33301 4.26659L4.26634 3.33325L7.99967 7.06659L11.733 3.33325L12.6663 4.26659L8.93301 7.99992L12.6663 11.7333L11.733 12.6666L7.99967 8.93325L4.26634 12.6666Z" fill="#888888"/>
              </g>
            </svg>
          </div>
          
          <div className='flex max-w-[150px] bg-[#DBDBDB] items-center rounded gap-[8px] pl-[4px] pr-[8px] py-[4px]'>
            <img src='/UserImage.png' alt='proflie pic' className='w-[32px] h-[32px] rounded'/>
            <h3 className='figtree-font font-[500] text-[16px] leading-[16px] text-[#6D6D6D]'>Username</h3>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_709_2491" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                <rect width="16" height="16" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_709_2491)">
                <path d="M4.26634 12.6666L3.33301 11.7333L7.06634 7.99992L3.33301 4.26659L4.26634 3.33325L7.99967 7.06659L11.733 3.33325L12.6663 4.26659L8.93301 7.99992L12.6663 11.7333L11.733 12.6666L7.99967 8.93325L4.26634 12.6666Z" fill="#888888"/>
              </g>
            </svg>
          </div>
          
          <div className='flex max-w-[150px] bg-[#DBDBDB] items-center rounded gap-[8px] pl-[4px] pr-[8px] py-[4px]'>
            <img src='/UserImage.png' alt='proflie pic' className='w-[32px] h-[32px] rounded'/>
            <h3 className='figtree-font font-[500] text-[16px] leading-[16px] text-[#6D6D6D]'>Username</h3>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_709_2491" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                <rect width="16" height="16" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_709_2491)">
                <path d="M4.26634 12.6666L3.33301 11.7333L7.06634 7.99992L3.33301 4.26659L4.26634 3.33325L7.99967 7.06659L11.733 3.33325L12.6663 4.26659L8.93301 7.99992L12.6663 11.7333L11.733 12.6666L7.99967 8.93325L4.26634 12.6666Z" fill="#888888"/>
              </g>
            </svg>
          </div>                   
        </div>
  
        {/* <div className="border overflow-y-auto max-h-64">
          <div className="flex justify-between items-center p-3 border-b text-gray-700 font-semibold">
            <span className='text-[#363636] text-[20px] leading-[24px] font-[500] figtree-font'>All Customers</span>
            <div className='flex justify-between rounded gap-[8px] items-center'>
              <label className="flex items-center text-[#A0A0A0] leading-[16px] font-[500] text-[16px]"> Select All</label>
              <input type="checkbox" className='w-[16px] h-[16px]'/>
            </div>
          </div>
  
          {users.map((user, idx) => (
            <div key={idx} className="flex items-center justify-between px-4 py-3 border-t hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <img src={user.avatar} alt="avatar" className="w-10 h-10" />
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.designation}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold">${user.amount.toFixed(2)}</span>
                <button
                  onClick={() => toggleUser(user)}
                  className="border rounded px-2 text-xl hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div> */}

        <div className='bg-[#FFFFFF] border border-[#E7E7E7] p-[16px]  gap-[16px]'>
          <div className='flex items-center justify-between'>
            <h2 className='text-[#363636] leading-[24px] text-[20px] font-[500] figtree-font'>All Customers</h2>
            <div className='flex gap-[8px]'>
              <p className='figtree-font font-[500] text-[16px] leading-[16px] text-[#A0A0A0]'>Select All</p>
              <input type='checkbox' className='w-[16px] h-[16px] bg-[#A0A0A0]'/>
            </div>
          </div>
          <hr className='mt-2 border-[#E7E7E7]'/>
                    <div className='max-h-[469px] overflow-y-auto'>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>
                        <div>
                            <div className='flex justify-between items-center p-[12px]'>
                                <div className='flex flex-wrap gap-[12px]'>
                                    <img src='/UserImage.png' alt='profile pic' className='w-[40px] h-[40px] rounded'/>
                                    <div className='flex flex-col items-start justify-start'>
                                        <h2 className='text-[#888888] text-[18px] font-[600] leading-[20px] figtree-font'>Username</h2>
                                        <p className='text-[#B8B8B8] text-[12px] font-[500] leading-[14px]'>Designation</p>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-[16px] items-center justify-center'>
                                    <p className='figtree-font text-[#888888] text-[22px] font-[700] leading-[24px]'>$190.38</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#B8B8B8"/>
                                        <mask id="mask0_709_2688" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="16" height="16">
                                            <rect x="8" y="8" width="16" height="16" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_709_2688)">
                                            <path d="M15.3333 22V16.6667H10V15.3333H15.3333V10H16.6667V15.3333H22V16.6667H16.6667V22H15.3333Z" fill="#363636"/>
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <hr className='border-[#E7E7E7]'/>
                        </div>             
                    </div>
                </div>

                <textarea placeholder="Type your Message Here..." className="w-full my-5 rounded p-[24px] h-[72px] gap-[24px] bg-[#E7E7E7] resize-none placeholder:text-[16px] placeholder:text-[#888888] font-[500] leading-[24px] placeholder:figtree-font"/>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-5 font-[500] text-[#B8B8B8]">
                    <button className="w-full bg-black text-white py-[11px] mt-0 gap-[10px] px-[35px] font-[700] text-[12px] tracking-[3px] leading-[16px] figtree-font">SEND</button>
                    <button className="w-full border border-black text-black mt-0 gap-[10px] py-[11px]  px-[35px] font-[700] text-[12px] tracking-[3px] leading-[16px] figtree-font">CANCEL</button>
                </div>
  
        
  
        {/* <div className="flex justify-between mt-4 gap-4">
          <button className="bg-black text-white px-8 py-2 rounded hover:opacity-90">SEND</button>
          <button className="border px-8 py-2 rounded hover:bg-gray-100">CANCEL</button>
        </div> */}
      </div>
    );
  }

export default broadcastMessage