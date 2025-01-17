import React from 'react';

const User = () => {
  return (
    <div className=' px-5 '>
      <div className=' font-bold text-red-600 text-2xl mt-10'>User</div>
      <table className="w-full border border-gray-200 mt-5">
        <thead className="bg-slate-200">
          <tr>
            <th className="text-left font-medium text-sm px-4 py-2">Name</th>
            <th className="text-left font-medium text-sm px-4 py-2">Email</th>
            <th className="text-left font-medium text-sm px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">john.doe@example.com</td>
            <td className="border px-4 py-2">123-456-7890</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">jane.smith@example.com</td>
            <td className="border px-4 py-2">987-654-3210</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default User;
