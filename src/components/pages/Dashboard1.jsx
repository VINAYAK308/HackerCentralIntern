


  // import React, { useState } from 'react';
  // import { useNavigate } from 'react-router-dom';

  // const App = () => {
  //   const [role, setRole] = useState('');
  //   const [subRole, setSubRole] = useState('');
  //   const navigate = useNavigate();

  //   const handleRoleChange = (e) => {
  //     setRole(e.target.value);
  //     setSubRole('');
  //   };

  //   const handleSubRoleChange = (e) => {
  //     setSubRole(e.target.value);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle for existing users/admins to navigate to their dashboard
  //     if (role === 'user' && subRole === 'existingUser') {
  //       navigate('/user-dashboard');
  //     } else if (role === 'admin' && subRole === 'existingAdmin') {
  //       navigate('/admin-dashboard');
  //     }
  //     // Handle new users/admins registration and then redirect to respective sign-in page
  //     else if (role === 'user' && subRole === 'newUser') {
  //       alert('Registration successful! Redirecting to sign-in...');
  //       setSubRole('existingUser'); // Redirect to existing user sign-in form
  //     } else if (role === 'admin' && subRole === 'newAdmin') {
  //       alert('Registration successful! Redirecting to sign-in...');
  //       setSubRole('existingAdmin'); // Redirect to existing admin sign-in form
  //     }
  //   };

  //   return (
  //     <div className="min-h-screen bg-gray-800 flex items-center justify-center p-6">
  //       <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
  //         <h1 className="text-3xl font-bold text-blue-400 mb-6 lg:ml-[80px]">Role Selection</h1>
          
  //         <div className="mb-4">
  //           <label htmlFor="role" className="block text-sm font-medium text-gray-300">Select Role</label>
  //           <select
  //             id="role"
  //             value={role}
  //             onChange={handleRoleChange}
  //             className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  //           >
  //             <option value="">Select a role</option>
  //             <option value="user">User</option>
  //             <option value="admin">Admin</option>
  //           </select>
  //         </div>

  //         {role && (
  //           <div className="mb-4">
  //             <label htmlFor="subRole" className="block text-sm font-medium text-gray-300">Select Type</label>
  //             <select
  //               id="subRole"
  //               value={subRole}
  //               onChange={handleSubRoleChange}
  //               className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  //             >
  //               <option value="">Select a type</option>
  //               {role === 'user' && (
  //                 <>
  //                   <option value="newUser">New User</option>
  //                   <option value="existingUser">Existing User</option>
  //                 </>
  //               )}
  //               {role === 'admin' && (
  //                 <>
  //                   <option value="newAdmin">New Admin</option>
  //                   <option value="existingAdmin">Existing Admin</option>
  //                 </>
  //               )}
  //             </select>
  //           </div>
  //         )}

  //         {role === 'user' && subRole === 'newUser' && (
  //           <div className="mt-6">
  //             <h2 className="text-2xl font-bold text-blue-400 mb-4 lg:ml-[70px]">New User Registration</h2>
  //             <form className="space-y-4" onSubmit={handleSubmit}>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-300">Username</label>
  //                 <input type="text" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-300">Email</label>
  //                 <input type="email" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-300">Contact Number</label>
  //                 <input type="tel" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-300">Password</label>
  //                 <input type="password" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200" />
  //               </div>
  //               <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Register</button>
  //             </form>
  //           </div>
  //         )}

  //         {role === 'user' && subRole === 'existingUser' && (
  //           <div className="mt-6">
  //             <h2 className="text-2xl font-bold text-blue-400 mb-4 lg:ml-[80px] ">Existing User Sign In</h2>
  //             <form className="space-y-4" onSubmit={handleSubmit}>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-300">Username</label>
  //                 <input type="text" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-300">Password</label>
  //                 <input type="password" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200" />
  //               </div>
  //               <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Sign In</button>
  //             </form>
  //           </div>
  //         )}

  //         {role === 'admin' && subRole === 'newAdmin' && (
  //           <div className="mt-6">
  //             <h2 className="text-2xl font-bold text-blue-400 mb-4 lg:ml-[70px]">New Admin Registration</h2>
  //             <form className="space-y-4" onSubmit={handleSubmit}>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-300">Admin Name</label>
  //                 <input type="text" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-300">Email</label>
  //                 <input type="email" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-300">Contact Number</label>
  //                 <input type="tel" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-300">Password</label>
  //                 <input type="password" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200" />
  //               </div>
  //               <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Register</button>
  //             </form>
  //           </div>
  //         )}

  //         {role === 'admin' && subRole === 'existingAdmin' && (
  //           <div className="mt-6">
  //             <h2 className="text-2xl font-bold text-blue-400 mb-4 lg:ml-[80px]">Existing Admin Sign In</h2>
  //             <form className="space-y-4" onSubmit={handleSubmit}>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-300">Admin Name</label>
  //                 <input type="text" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200" />
  //               </div>
  //               <div>
  //                 <label className="block text-sm font-medium text-gray-300">Password</label>
  //                 <input type="password" className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200" />
  //               </div>
  //               <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Sign In</button>
  //             </form>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  // export default App;



//   import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobileNo, setMobileNo] = useState('');
//   const [role, setRole] = useState('Student');
//   const [errors, setErrors] = useState({}); // State to track validation errors
//   const navigate = useNavigate();

//   // Function to validate inputs
//   const validate = () => {
//     const newErrors = {};
//     if (!firstName) newErrors.firstName = 'First Name is required.';
//     if (!lastName) newErrors.lastName = 'Last Name is required.';
//     if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid Email is required.';
//     if (!mobileNo || !/^\d{10}$/.test(mobileNo)) newErrors.mobileNo = 'Valid 10-digit Mobile No. is required.';
//     return newErrors;
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       // Navigate based on the role
//       if (role === 'Student') {
//         navigate('/user-dashboard');
//       } else if (role === 'Admin' || role === 'Superadmin') {
//         navigate('/admin-dashboard');
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-96" onSubmit={handleLogin}>
//         <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">Login</h2>

//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">First Name</label>
//           <input
//             type="text"
//             className={`w-full px-4 py-2 bg-gray-700 text-white border ${
//               errors.firstName ? 'border-red-500' : 'border-gray-600'
//             } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//           />
//           {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">Last Name</label>
//           <input
//             type="text"
//             className={`w-full px-4 py-2 bg-gray-700 text-white border ${
//               errors.lastName ? 'border-red-500' : 'border-gray-600'
//             } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//           />
//           {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">Email</label>
//           <input
//             type="email"
//             className={`w-full px-4 py-2 bg-gray-700 text-white border ${
//               errors.email ? 'border-red-500' : 'border-gray-600'
//             } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">Mobile No.</label>
//           <input
//             type="tel"
//             className={`w-full px-4 py-2 bg-gray-700 text-white border ${
//               errors.mobileNo ? 'border-red-500' : 'border-gray-600'
//             } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             value={mobileNo}
//             onChange={(e) => setMobileNo(e.target.value)}
//             required
//           />
//           {errors.mobileNo && <p className="text-red-500 text-sm mt-1">{errors.mobileNo}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">User Role</label>
//           <select
//             className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="Student">Student</option>
//             <option value="Admin">Admin</option>
//             <option value="Superadmin">Superadmin</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [role, setRole] = useState('Student');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Function to validate inputs
  const validate = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'First Name is required.';
    if (!lastName) newErrors.lastName = 'Last Name is required.';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid Email is required.';
    if (!mobileNo || !/^\d{10}$/.test(mobileNo)) newErrors.mobileNo = 'Valid 10-digit Mobile No. is required.';
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Navigate based on the role
      if (role === 'Student') {
        navigate('/user-dashboard');
      } else if (role === 'Admin') {
        navigate('/admin-dashboard');
      } else if (role === 'Superadmin') {
        navigate('/superadmin-dashboard');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-96" onSubmit={handleLogin}>
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">User Registration</h2>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">First Name</label>
          <input
            type="text"
            className={`w-full px-4 py-2 bg-gray-700 text-white border ${
              errors.firstName ? 'border-red-500' : 'border-gray-600'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Last Name</label>
          <input
            type="text"
            className={`w-full px-4 py-2 bg-gray-700 text-white border ${
              errors.lastName ? 'border-red-500' : 'border-gray-600'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className={`w-full px-4 py-2 bg-gray-700 text-white border ${
              errors.email ? 'border-red-500' : 'border-gray-600'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Mobile No.</label>
          <input
            type="tel"
            className={`w-full px-4 py-2 bg-gray-700 text-white border ${
              errors.mobileNo ? 'border-red-500' : 'border-gray-600'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
          {errors.mobileNo && <p className="text-red-500 text-sm mt-1">{errors.mobileNo}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">User Role</label>
          <select
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
            <option value="Superadmin">Superadmin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

