import React from 'react';

const UsersLog = () => {
  return (
    <div className=' px-5 '>
    <div className=' text-red-600 text-2xl font-bold mt-10'>UserLog</div>
      <table className="border border-gray-200 w-full  mt-5">
        <thead className="bg-slate-200">
          <tr>
            <th className="text-left text-sm font-normal px-4 py-2">Name</th>
            <th className="text-left text-sm font-normal px-4 py-2">In Time</th>
            <th className="text-left text-sm font-normal px-4 py-2">Missing Time</th>
            <th className="text-left text-sm font-normal px-4 py-2">Out Time</th>
            <th className="text-left text-sm font-normal px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">9:00 AM</td>
            <td className="border px-4 py-2">5:00 PM</td>
            <td className="border px-4 py-2">5:00 PM</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">8:30 AM</td>
            <td className="border px-4 py-2">4:30 PM</td>
            <td className="border px-4 py-2">4:30 PM</td>
          </tr>
      
        </tbody>
      </table>
    </div>
  );
};

export default UsersLog;
