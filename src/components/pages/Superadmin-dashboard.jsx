// import React from 'react';

// const SuperadminDashboard = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <h1 className="text-white text-3xl">Welcome to Superadmin Dashboard!</h1>
//     </div>
//   );
// };

// export default SuperadminDashboard;

import React from 'react';

const SuperadminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <aside className="w-1/4 bg-gray-800 p-4">
        <h2 className="text-white text-xl">Dashboard Menu</h2>
        <ul className="mt-4">
          <li className="text-white py-2 hover:bg-gray-700 rounded">Manage Users</li>
          <li className="text-white py-2 hover:bg-gray-700 rounded">Manage Courses</li>
          <li className="text-white py-2 hover:bg-gray-700 rounded">Reports</li>
          <li className="text-white py-2 hover:bg-gray-700 rounded">Settings</li>
        </ul>
      </aside>
      <main className="flex-grow flex justify-center items-center">
        <h1 className="text-white text-3xl">Welcome to Superadmin Dashboard!</h1>
      </main>
    </div>
  );
};

export default SuperadminDashboard;
