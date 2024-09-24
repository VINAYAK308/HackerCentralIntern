// import React from 'react';

// const UserDashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-800 flex items-center justify-center p-6">
//       <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-lg shadow-lg text-white">
//         <h1 className="text-4xl font-bold text-blue-400 mb-6">Welcome to User Dashboard</h1>
//         <p className="text-lg mb-4">
//           This is the main hub for users. Here, you can access your profile, manage your account, view reports, and perform other user-related activities.
//         </p>
//         <ul className="list-disc list-inside">
//           <li>View your personal details</li>
//           <li>Manage your settings</li>
//           <li>Access personalized content</li>
//           <li>Track your progress</li>
//         </ul>
//         <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
//           Explore More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;

// import React, { useState } from 'react';
// import Profile from './StudentProfile';
// import EnrolledCourses from './EnrolledCourses';
// import CourseMaterials from './CourseMaterials';
// import Exams from './Exams';
// import Certificates from './Certificates';

// const StudentDashboard = () => {
//   const [activeSection, setActiveSection] = useState('Profile');

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'Profile':
//         return <Profile />;
//       case 'EnrolledCourses':
//         return <EnrolledCourses />;
//       case 'CourseMaterials':
//         return <CourseMaterials />;
//       case 'Exams':
//         return <Exams />;
//       case 'Certificates':
//         return <Certificates />;
//       default:
//         return <Profile />;
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       {/* Menu Boxes */}
//       <div className="w-full md:w-1/4 bg-gray-100 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'Profile' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
//           }`}
//           onClick={() => setActiveSection('Profile')}
//         >
//           <h3 className="font-bold text-lg">Profile</h3>
//         </div>
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'EnrolledCourses' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
//           }`}
//           onClick={() => setActiveSection('EnrolledCourses')}
//         >
//           <h3 className="font-bold text-lg">Enrolled Courses</h3>
//         </div>
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'CourseMaterials' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
//           }`}
//           onClick={() => setActiveSection('CourseMaterials')}
//         >
//           <h3 className="font-bold text-lg">Course Materials</h3>
//         </div>
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'Exams' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
//           }`}
//           onClick={() => setActiveSection('Exams')}
//         >
//           <h3 className="font-bold text-lg">Exams</h3>
//         </div>
//         <div
//           className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
//             activeSection === 'Certificates' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
//           }`}
//           onClick={() => setActiveSection('Certificates')}
//         >
//           <h3 className="font-bold text-lg">Certificates</h3>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="w-full md:w-3/4 p-6">
//         {renderSection()}
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;

import React, { useState } from 'react';
import Profile from './StudentProfile';
import EnrolledCourses from './EnrolledCourses';
import CourseMaterials from './CourseMaterials';
import Exams from './Exams';
import Certificates from './Certificates';

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState('Profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'Profile':
        return <Profile />;
      case 'EnrolledCourses':
        return <EnrolledCourses />;
      case 'CourseMaterials':
        return <CourseMaterials />;
      case 'Exams':
        return <Exams />;
      case 'Certificates':
        return <Certificates />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Menu Boxes */}
      <div className="w-full md:w-1/4 bg-gray-800 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
            activeSection === 'Profile' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
          onClick={() => setActiveSection('Profile')}
        >
          <h3 className="font-bold text-lg">Profile</h3>
        </div>
        <div
          className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
            activeSection === 'EnrolledCourses' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
          onClick={() => setActiveSection('EnrolledCourses')}
        >
          <h3 className="font-bold text-lg">Enrolled Courses</h3>
        </div>
        <div
          className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
            activeSection === 'CourseMaterials' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
          onClick={() => setActiveSection('CourseMaterials')}
        >
          <h3 className="font-bold text-lg">Course Materials</h3>
        </div>
        <div
          className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
            activeSection === 'Exams' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
          onClick={() => setActiveSection('Exams')}
        >
          <h3 className="font-bold text-lg">Exams</h3>
        </div>
        <div
          className={`p-6 text-center rounded-lg shadow-md cursor-pointer transition transform hover:scale-105 ${
            activeSection === 'Certificates' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
          onClick={() => setActiveSection('Certificates')}
        >
          <h3 className="font-bold text-lg">Certificates</h3>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6 bg-gray-900">
        {renderSection()}
      </div>
    </div>
  );
};

export default StudentDashboard;
