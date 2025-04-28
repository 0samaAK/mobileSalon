'use client';

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
      <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Send Message</h2>
          <button className="text-gray-500 text-2xl hover:text-black">×</button>
        </div>
  
        <input
          type="text"
          placeholder="Emails, Username"
          className="w-full border px-4 py-2 rounded mb-4"
        />
  
        <div className="flex items-center mb-3 gap-2">
          <label htmlFor="selectAll">Select All</label>
          <input type="checkbox" id="selectAll" />
        </div>
  
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedUsers.map((user, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
              <img src={user.avatar} alt="avatar" className="w-6 h-6 rounded-full" />
              <span>{user.name}</span>
              <button onClick={() => toggleUser(user)}>×</button>
            </div>
          ))}
        </div>
  
        <div className="border rounded-lg overflow-y-auto max-h-64">
          <div className="flex justify-between items-center p-3 border-b text-gray-700 font-semibold">
            <span>All Customers</span>
            <label className="flex items-center gap-2 text-sm">
              Select All <input type="checkbox" />
            </label>
          </div>
  
          {users.map((user, idx) => (
            <div key={idx} className="flex items-center justify-between px-4 py-3 border-t hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
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
        </div>
  
        <textarea
          placeholder="Type your Message Here..."
          className="w-full mt-6 border rounded px-4 py-2 h-28"
        />
  
        <div className="flex justify-between mt-4 gap-4">
          <button className="bg-black text-white px-8 py-2 rounded hover:opacity-90">SEND</button>
          <button className="border px-8 py-2 rounded hover:bg-gray-100">CANCEL</button>
        </div>
      </div>
    );
  }

export default broadcastMessage