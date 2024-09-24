// import React from 'react';

// const AdminDashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-800 flex items-center justify-center p-6">
//       <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-lg shadow-lg text-white">
//         <h1 className="text-4xl font-bold text-blue-400 mb-6">Welcome to Admin Dashboard</h1>
//         <p className="text-lg mb-4">
//           As an admin, you have full access to manage users, view reports, and perform administrative actions.
//         </p>
//         <ul className="list-disc list-inside">
//           <li>Manage Users</li>
//           <li>Access detailed reports</li>
//           <li>Configure system settings</li>
//           <li>Oversee platform performance</li>
//         </ul>
//         <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
//           Admin Actions
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useState } from 'react';

// const AdminDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const [courseName, setCourseName] = useState('');
//   const [modules, setModules] = useState([{ name: '', chapters: [{ name: '', pdf: null, video: null }] }]);

//   // Handle adding a new module
//   const addModule = () => {
//     setModules([...modules, { name: '', chapters: [{ name: '', pdf: null, video: null }] }]);
//   };

//   // Handle adding a new chapter within a module
//   const addChapter = (moduleIndex) => {
//     const updatedModules = [...modules];
//     updatedModules[moduleIndex].chapters.push({ name: '', pdf: null, video: null });
//     setModules(updatedModules);
//   };

//   // Handle module and chapter input changes
//   const handleModuleChange = (index, field, value) => {
//     const updatedModules = [...modules];
//     updatedModules[index][field] = value;
//     setModules(updatedModules);
//   };

//   const handleChapterChange = (moduleIndex, chapterIndex, field, value) => {
//     const updatedModules = [...modules];
//     updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
//     setModules(updatedModules);
//   };

//   // Handle form submission to create a course
//   const handleCreateCourse = (e) => {
//     e.preventDefault();
//     const newCourse = {
//       name: courseName,
//       modules,
//     };
//     setCourses([...courses, newCourse]);
//     setCourseName('');
//     setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null }] }]); // Reset the form
//   };

//   // Handle deleting a course
//   const handleDeleteCourse = (index) => {
//     const updatedCourses = [...courses];
//     updatedCourses.splice(index, 1);
//     setCourses(updatedCourses);
//   };

//   // Handle deleting a specific PDF or video file
//   const handleDeleteFile = (courseIndex, moduleIndex, chapterIndex, fileType) => {
//     const updatedCourses = [...courses];
//     updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][fileType] = null;
//     setCourses(updatedCourses);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
//       <br></br>
//       <h1 className="text-3xl font-bold text-blue-400 mb-6 lg:ml-[550px]">Admin Dashboard</h1>
//       <br></br>

//       {/* Course Creation Form */}
//       <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-10">
//         <h2 className="text-2xl font-bold text-blue-300 mb-4">Create a New Course</h2>
//         <form onSubmit={handleCreateCourse}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Course Name</label>
//             <input
//               type="text"
//               value={courseName}
//               onChange={(e) => setCourseName(e.target.value)}
//               className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//             />
//           </div>

//           {modules.map((module, moduleIndex) => (
//             <div key={moduleIndex} className="mb-6">
//               <h3 className="text-lg font-bold text-blue-300">Module {moduleIndex + 1}</h3>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Module Name</label>
//                 <input
//                   type="text"
//                   value={module.name}
//                   onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
//                   className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                 />
//               </div>

//               {module.chapters.map((chapter, chapterIndex) => (
//                 <div key={chapterIndex} className="mb-4">
//                   <h4 className="text-md font-bold text-blue-300">Chapter {chapterIndex + 1}</h4>
//                   <div className="mb-2">
//                     <label className="block text-sm font-medium">Chapter Name</label>
//                     <input
//                       type="text"
//                       value={chapter.name}
//                       onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
//                       className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                     />
//                   </div>
//                   <div className="mb-2">
//                     <label className="block text-sm font-medium">PDF Upload</label>
//                     <input
//                       type="file"
//                       accept="application/pdf"
//                       onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'pdf', e.target.files[0])}
//                       className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                     />
//                   </div>
//                   <div className="mb-2">
//                     <label className="block text-sm font-medium">Video Upload</label>
//                     <input
//                       type="file"
//                       accept="video/*"
//                       onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'video', e.target.files[0])}
//                       className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                     />
//                   </div>
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={() => addChapter(moduleIndex)}
//                 className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 mt-2"
//               >
//                 Add Chapter
//               </button>
//             </div>
//           ))}

//           <button
//             type="button"
//             onClick={addModule}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
//           >
//             Add Module
//           </button>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 "
//           >
//             Create Course
//           </button>
//         </form>
//       </div>

//       {/* Courses List */}
//       <div className="bg-gray-800 p-6 rounded-md shadow-lg">
//         <h2 className="text-xl font-bold text-blue-300 mb-4">Courses</h2>
//         {courses.map((course, courseIndex) => (
//           <div key={courseIndex} className="mb-6">
//             <h3 className="text-lg font-bold text-blue-300">Course: {course.name}</h3>
//             {course.modules.map((module, moduleIndex) => (
//               <div key={moduleIndex} className="mb-4">
//                 <h4 className="text-md font-bold text-blue-200">Module {moduleIndex + 1}: {module.name}</h4>
//                 {module.chapters.map((chapter, chapterIndex) => (
//                   <div key={chapterIndex} className="ml-4 mb-2">
//                     <p className="text-sm text-blue-100">Chapter {chapterIndex + 1}: {chapter.name}</p>

//                     {/* PDF and Video Links */}
//                     {chapter.pdf && (
//                       <div className="mt-1">
//                         <a
//                           href={URL.createObjectURL(chapter.pdf)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 hover:underline"
//                         >
//                           View PDF
//                         </a>
//                         <button
//                           onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
//                           className="text-red-500 ml-4 hover:underline"
//                         >
//                           Delete PDF
//                         </button>
//                       </div>
//                     )}
//                     {chapter.video && (
//                       <div className="mt-1">
//                         <a
//                           href={URL.createObjectURL(chapter.video)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 hover:underline"
//                         >
//                           View Video
//                         </a>
//                         <button
//                           onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
//                           className="text-red-500 ml-4 hover:underline"
//                         >
//                           Delete Video
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => handleDeleteCourse(courseIndex)}
//               className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
//             >
//               Delete Course
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';

// const AdminDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const [courseName, setCourseName] = useState('');
//   const [modules, setModules] = useState([{ name: '', chapters: [{ name: '', pdf: null, video: null }] }]);

//   // Handle adding a new module
//   const addModule = () => {
//     setModules([...modules, { name: '', chapters: [{ name: '', pdf: null, video: null }] }]);
//   };

//   // Handle adding a new chapter within a module
//   const addChapter = (moduleIndex) => {
//     const updatedModules = [...modules];
//     updatedModules[moduleIndex].chapters.push({ name: '', pdf: null, video: null });
//     setModules(updatedModules);
//   };

//   // Handle module and chapter input changes
//   const handleModuleChange = (index, field, value) => {
//     const updatedModules = [...modules];
//     updatedModules[index][field] = value;
//     setModules(updatedModules);
//   };

//   const handleChapterChange = (moduleIndex, chapterIndex, field, value) => {
//     const updatedModules = [...modules];
//     updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
//     setModules(updatedModules);
//   };

//   // Handle form submission to create a course with validation
//   const handleCreateCourse = (e) => {
//     e.preventDefault();
//     if (!courseName) {
//       alert('Course name is required.');
//       return;
//     }
//     if (modules.some((module) => !module.name)) {
//       alert('All modules must have names.');
//       return;
//     }
//     setCourses([...courses, { name: courseName, modules }]);
//     resetForm();
//   };

//   // Reset the form after creating a course
//   const resetForm = () => {
//     setCourseName('');
//     setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null }] }]);
//   };

//   // Handle deleting a course
//   const handleDeleteCourse = (index) => {
//     const updatedCourses = [...courses];
//     updatedCourses.splice(index, 1);
//     setCourses(updatedCourses);
//   };

//   // Handle deleting a specific PDF or video file
//   const handleDeleteFile = (courseIndex, moduleIndex, chapterIndex, fileType) => {
//     const updatedCourses = [...courses];
//     updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][fileType] = null;
//     setCourses(updatedCourses);
//   };

//   // Drag and drop file upload logic
//   const FileDropzone = ({ onDrop, fileType }) => {
//     const { getRootProps, getInputProps } = useDropzone({
//       accept: fileType === 'pdf' ? 'application/pdf' : 'video/*',
//       onDrop: (acceptedFiles) => onDrop(acceptedFiles[0]),
//     });

//     return (
//       <div
//         {...getRootProps()}
//         className="border-dashed border-2 border-gray-500 p-4 rounded-md text-center hover:border-blue-400 cursor-pointer transition-all duration-300"
//       >
//         <input {...getInputProps()} />
//         <p>Drag & Drop {fileType.toUpperCase()} or click to upload</p>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
//       <header className="sticky top-0 bg-gray-900 p-4 shadow-md z-10">
//         <h1 className="text-3xl font-bold text-blue-400 lg:ml-[550px]">Admin Dashboard</h1>
//       </header>

//       {/* Course Creation Form */}
//       <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-10 mt-8">
//         <h2 className="text-2xl font-bold text-blue-300 mb-4">Create a New Course</h2>
//         <form onSubmit={handleCreateCourse}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Course Name</label>
//             <input
//               type="text"
//               value={courseName}
//               onChange={(e) => setCourseName(e.target.value)}
//               className={`mt-1 block w-full bg-gray-700 text-gray-200 border ${
//                 !courseName ? 'border-red-500' : 'border-gray-600'
//               } rounded-md shadow-sm p-2`}
//             />
//           </div>

//           {modules.map((module, moduleIndex) => (
//             <div key={moduleIndex} className="mb-6">
//               <h3 className="text-lg font-bold text-blue-300">Module {moduleIndex + 1}</h3>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Module Name</label>
//                 <input
//                   type="text"
//                   value={module.name}
//                   onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
//                   className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                 />
//               </div>

//               {module.chapters.map((chapter, chapterIndex) => (
//                 <div key={chapterIndex} className="mb-4">
//                   <h4 className="text-md font-bold text-blue-300">Chapter {chapterIndex + 1}</h4>
//                   <div className="mb-2">
//                     <label className="block text-sm font-medium">Chapter Name</label>
//                     <input
//                       type="text"
//                       value={chapter.name}
//                       onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
//                       className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                     />
//                   </div>

//                   {/* Drag & Drop File Upload for PDF */}
//                   <div className="mb-2">
//                     <label className="block text-sm font-medium">PDF Upload</label>
//                     <FileDropzone
//                       fileType="pdf"
//                       onDrop={(file) => handleChapterChange(moduleIndex, chapterIndex, 'pdf', file)}
//                     />
//                   </div>

//                   {/* Drag & Drop File Upload for Video */}
//                   <div className="mb-2">
//                     <label className="block text-sm font-medium">Video Upload</label>
//                     <FileDropzone
//                       fileType="video"
//                       onDrop={(file) => handleChapterChange(moduleIndex, chapterIndex, 'video', file)}
//                     />
//                   </div>
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={() => addChapter(moduleIndex)}
//                 className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 mt-2 transition-all duration-300"
//               >
//                 Add Chapter
//               </button>
//             </div>
//           ))}

//           <button
//             type="button"
//             onClick={addModule}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4 transition-all duration-300"
//           >
//             Add Module
//           </button>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
//           >
//             Create Course
//           </button>
//         </form>
//       </div>

//       {/* Courses List */}
//       <div className="bg-gray-800 p-6 rounded-md shadow-lg">
//         <h2 className="text-xl font-bold text-blue-300 mb-4">Courses</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course, courseIndex) => (
//             <div key={courseIndex} className="bg-gray-900 p-6 rounded-md shadow-lg">
//               <h3 className="text-lg font-bold text-blue-300">Course: {course.name}</h3>
//               {course.modules.map((module, moduleIndex) => (
//                 <div key={moduleIndex} className="mb-4">
//                   <h4 className="text-md font-bold text-blue-200">Module {moduleIndex + 1}: {module.name}</h4>
//                   {module.chapters.map((chapter, chapterIndex) => (
//                     <div key={chapterIndex} className="ml-4 mb-2">
//                       <p className="text-sm text-blue-100">Chapter {chapterIndex + 1}: {chapter.name}</p>

//                       {/* PDF and Video Links */}
//                       {chapter.pdf && (
//                         <div className="mt-1">
//                           <a
//                             href={URL.createObjectURL(chapter.pdf)}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-blue-500 hover:underline"
//                           >
//                             View PDF
//                           </a>
//                           <button
//                             onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
//                             className="text-red-500 ml-4 hover:underline"
//                           >
//                             Delete PDF
//                           </button>
//                         </div>
//                       )}
//                       {chapter.video && (
//                         <div className="mt-1">
//                           <a
//                             href={URL.createObjectURL(chapter.video)}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-blue-500 hover:underline"
//                           >
//                             View Video
//                           </a>
//                           <button
//                             onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
//                             className="text-red-500 ml-4 hover:underline"
//                           >
//                             Delete Video
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//               <button
//                 onClick={() => handleDeleteCourse(courseIndex)}
//                 className="text-red-500 hover:underline mt-4"
//               >
//                 Delete Course
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';

// const AdminDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const [courseName, setCourseName] = useState('');
//   const [modules, setModules] = useState([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false }] }]);

//   // Handle adding a new module
//   const addModule = () => {
//     setModules([...modules, { name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false }] }]);
//   };

//   // Handle adding a new chapter within a module
//   const addChapter = (moduleIndex) => {
//     const updatedModules = [...modules];
//     updatedModules[moduleIndex].chapters.push({ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false });
//     setModules(updatedModules);
//   };

//   // Handle module and chapter input changes
//   const handleModuleChange = (index, field, value) => {
//     const updatedModules = [...modules];
//     updatedModules[index][field] = value;
//     setModules(updatedModules);
//   };

//   const handleChapterChange = (moduleIndex, chapterIndex, field, value) => {
//     const updatedModules = [...modules];
//     updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
//     setModules(updatedModules);
//   };

//   // Handle form submission to create a course with validation
//   const handleCreateCourse = (e) => {
//     e.preventDefault();
//     if (!courseName) {
//       alert('Course name is required.');
//       return;
//     }
//     if (modules.some((module) => !module.name)) {
//       alert('All modules must have names.');
//       return;
//     }
//     if (modules.some((module) =>
//       module.chapters.some((chapter) =>
//         !chapter.name || !chapter.pdf || !chapter.video
//       )
//     )) {
//       alert('All chapters must have a name, PDF, and video.');
//       return;
//     }
//     setCourses([...courses, { name: courseName, modules }]);
//     resetForm();
//   };

//   // Reset the form after creating a course
//   const resetForm = () => {
//     setCourseName('');
//     setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false }] }]);
//   };

//   // Handle deleting a course
//   const handleDeleteCourse = (index) => {
//     const updatedCourses = [...courses];
//     updatedCourses.splice(index, 1);
//     setCourses(updatedCourses);
//   };

//   // Handle deleting a specific PDF or video file
//   const handleDeleteFile = (courseIndex, moduleIndex, chapterIndex, fileType) => {
//     const updatedCourses = [...courses];
//     updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][fileType] = null;
//     updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = false;
//     setCourses(updatedCourses);
//   };

//   // Drag and drop file upload logic with success indication
//   const FileDropzone = ({ onDrop, fileType, isUploaded }) => {
//     const { getRootProps, getInputProps } = useDropzone({
//       accept: fileType === 'pdf' ? 'application/pdf' : 'video/*',
//       onDrop: (acceptedFiles) => onDrop(acceptedFiles[0]),
//     });

//     return (
//       <div className="mb-2">
//         <div
//           {...getRootProps()}
//           className={`border-dashed border-2 border-gray-500 p-4 rounded-md text-center hover:border-blue-400 cursor-pointer transition-all duration-300 ${
//             isUploaded ? 'border-green-500' : ''
//           }`}
//         >
//           <input {...getInputProps()} />
//           <p>Drag & Drop {fileType.toUpperCase()} or click to upload</p>
//         </div>
//         {isUploaded && <p className="text-green-500 mt-2">Successfully uploaded {fileType.toUpperCase()}!</p>}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
//       <header className="sticky top-0 bg-gray-900 p-4 shadow-md z-10">
//         <h1 className="text-3xl font-bold text-blue-400 lg:ml-[550px]">Admin Dashboard</h1>
//       </header>

//       {/* Course Creation Form */}
//       <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-10 mt-8">
//         <h2 className="text-2xl font-bold text-blue-300 mb-4">Create a New Course</h2>
//         <form onSubmit={handleCreateCourse}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Course Name</label>
//             <input
//               type="text"
//               value={courseName}
//               onChange={(e) => setCourseName(e.target.value)}
//               className={`mt-1 block w-full bg-gray-700 text-gray-200 border ${
//                 !courseName ? 'border-red-500' : 'border-gray-600'
//               } rounded-md shadow-sm p-2`}
//             />
//           </div>

//           {modules.map((module, moduleIndex) => (
//             <div key={moduleIndex} className="mb-6">
//               <h3 className="text-lg font-bold text-blue-300">Module {moduleIndex + 1}</h3>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Module Name</label>
//                 <input
//                   type="text"
//                   value={module.name}
//                   onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
//                   className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                 />
//               </div>

//               {module.chapters.map((chapter, chapterIndex) => (
//                 <div key={chapterIndex} className="mb-4">
//                   <h4 className="text-md font-bold text-blue-300">Chapter {chapterIndex + 1}</h4>
//                   <div className="mb-2">
//                     <label className="block text-sm font-medium">Chapter Name</label>
//                     <input
//                       type="text"
//                       value={chapter.name}
//                       onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
//                       className={`mt-1 block w-full bg-gray-700 border ${
//                         !chapter.name ? 'border-red-500' : 'border-gray-600'
//                       } rounded-md shadow-sm text-gray-200 p-2`}
//                     />
//                   </div>

//                   {/* Drag & Drop File Upload for PDF */}
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">PDF Upload</label>
//                     <FileDropzone
//                       fileType="pdf"
//                       onDrop={(file) => {
//                         handleChapterChange(moduleIndex, chapterIndex, 'pdf', file);
//                         handleChapterChange(moduleIndex, chapterIndex, 'pdfUploaded', true);
//                       }}
//                       isUploaded={chapter.pdfUploaded}
//                     />
//                     {chapter.pdf && (
//                       <div className="mt-2 flex items-center space-x-4">
//                         <a
//                           href={URL.createObjectURL(chapter.pdf)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 hover:underline"
//                         >
//                           View PDF
//                         </a>
//                         <button
//                           onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
//                           className="text-red-500 hover:underline"
//                         >
//                           Delete PDF
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   {/* Drag & Drop File Upload for Video */}
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Video Upload</label>
//                     <FileDropzone
//                       fileType="video"
//                       onDrop={(file) => {
//                         handleChapterChange(moduleIndex, chapterIndex, 'video', file);
//                         handleChapterChange(moduleIndex, chapterIndex, 'videoUploaded', true);
//                       }}
//                       isUploaded={chapter.videoUploaded}
//                     />
//                     {chapter.video && (
//                       <div className="mt-2 flex items-center space-x-4">
//                         <a
//                           href={URL.createObjectURL(chapter.video)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 hover:underline"
//                         >
//                           View Video
//                         </a>
//                         <button
//                           onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
//                           className="text-red-500 hover:underline"
//                         >
//                           Delete Video
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={() => addChapter(moduleIndex)}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300"
//               >
//                 Add Chapter
//               </button>
//             </div>
//           ))}

// <div className="flex flex-col items-center gap-4">
//   <button
//     type="button"
//     onClick={addModule}
//     className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300"
//   >
//     Add Module
//   </button>
  
//   <button
//     type="submit"
//     className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-all duration-300"
//   >
//     Create Course
//   </button>
// </div>

//         </form>
//       </div>

//       {/* Courses List */}
//       <div className="bg-gray-800 p-6 rounded-md shadow-lg">
//         <h2 className="text-xl font-bold text-blue-300 mb-4">Courses</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course, courseIndex) => (
//             <div key={courseIndex} className="bg-gray-900 p-6 rounded-md shadow-lg">
//               <h3 className="text-lg font-bold text-blue-300">Course: {course.name}</h3>
//               {course.modules.map((module, moduleIndex) => (
//                 <div key={moduleIndex} className="mb-4">
//                   <h4 className="text-md font-bold text-blue-200">Module {moduleIndex + 1}: {module.name}</h4>
//                   {module.chapters.map((chapter, chapterIndex) => (
//                     <div key={chapterIndex} className="ml-4 mb-2">
//                       <h5 className="text-sm font-bold text-blue-100">Chapter {chapterIndex + 1}: {chapter.name}</h5>
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm">PDF: {chapter.pdf ? chapter.pdf.name : 'No file uploaded'}</span>
//                         {chapter.pdf && (
//                           <div className="flex items-center space-x-4">
//                             <a
//                               href={URL.createObjectURL(chapter.pdf)}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-blue-500 hover:underline"
//                             >
//                               View PDF
//                             </a>
//                             <button
//                               onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
//                               className="text-red-500 hover:underline"
//                             >
//                               Delete PDF
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm">Video: {chapter.video ? chapter.video.name : 'No file uploaded'}</span>
//                         {chapter.video && (
//                           <div className="flex items-center space-x-4">
//                             <a
//                               href={URL.createObjectURL(chapter.video)}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-blue-500 hover:underline"
//                             >
//                               View Video
//                             </a>
//                             <button
//                               onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
//                               className="text-red-500 hover:underline"
//                             >
//                               Delete Video
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={() => handleDeleteCourse(courseIndex)}
//                     className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
//                   >
//                     Delete Course
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';

// const AdminDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const [courseName, setCourseName] = useState('');
//   const [modules, setModules] = useState([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false }] }]);

//   // Handle adding a new module
//   const addModule = () => {
//     setModules([...modules, { name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false }] }]);
//   };

//   // Handle adding a new chapter within a module
//   const addChapter = (moduleIndex) => {
//     const updatedModules = [...modules];
//     updatedModules[moduleIndex].chapters.push({ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false });
//     setModules(updatedModules);
//   };

//   // Handle module and chapter input changes
//   const handleModuleChange = (index, field, value) => {
//     const updatedModules = [...modules];
//     updatedModules[index][field] = value;
//     setModules(updatedModules);
//   };

//   const handleChapterChange = (moduleIndex, chapterIndex, field, value) => {
//     const updatedModules = [...modules];
//     updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
//     setModules(updatedModules);
//   };

//   // Handle form submission to create a course with validation
//   const handleCreateCourse = (e) => {
//     e.preventDefault();
//     if (!courseName) {
//       alert('Course name is required.');
//       return;
//     }
//     if (modules.some((module) => !module.name)) {
//       alert('All modules must have names.');
//       return;
//     }
//     if (modules.some((module) =>
//       module.chapters.some((chapter) =>
//         !chapter.name || !chapter.pdf || !chapter.video
//       )
//     )) {
//       alert('All chapters must have a name, PDF, and video.');
//       return;
//     }
//     setCourses([...courses, { name: courseName, modules }]);
//     resetForm();
//   };

//   // Reset the form after creating a course
//   const resetForm = () => {
//     setCourseName('');
//     setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false }] }]);
//   };

//   // Handle deleting a course
//   const handleDeleteCourse = (index) => {
//     const updatedCourses = [...courses];
//     updatedCourses.splice(index, 1);
//     setCourses(updatedCourses);
//   };

//   // Handle deleting a specific PDF or video file
//   const handleDeleteFile = (courseIndex, moduleIndex, chapterIndex, fileType) => {
//     const updatedCourses = [...courses];
//     updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][fileType] = null;
//     updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = false;
//     setCourses(updatedCourses);
//   };

//   // Drag and drop file upload logic with success indication
//   const FileDropzone = ({ onDrop, fileType, isUploaded }) => {
//     const { getRootProps, getInputProps } = useDropzone({
//       accept: fileType === 'pdf' ? 'application/pdf' : 'video/*',
//       onDrop: (acceptedFiles) => onDrop(acceptedFiles[0]),
//     });

//     return (
//       <div className="mb-2">
//         <div
//           {...getRootProps()}
//           className={`border-dashed border-2 border-gray-500 p-4 rounded-md text-center hover:border-blue-400 cursor-pointer transition-all duration-300 ${
//             isUploaded ? 'border-green-500' : ''
//           }`}
//         >
//           <input {...getInputProps()} />
//           <p>Drag & Drop {fileType.toUpperCase()} or click to upload</p>
//         </div>
//         {isUploaded && <p className="text-green-500 mt-2">Successfully uploaded {fileType.toUpperCase()}!</p>}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
//       <header className="sticky top-0 bg-gray-900 p-4 shadow-md z-10">
//         <h1 className="text-3xl font-bold text-blue-400 lg:ml-[550px]">Admin Dashboard</h1>
//       </header>

//       {/* Course Creation Form */}
//       <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-10 mt-8">
//         <h2 className="text-2xl font-bold text-blue-300 mb-4">Create a New Course</h2>
//         <form onSubmit={handleCreateCourse}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Course Name</label>
//             <input
//               type="text"
//               value={courseName}
//               onChange={(e) => setCourseName(e.target.value)}
//               className={`mt-1 block w-full bg-gray-700 text-gray-200 border ${
//                 !courseName ? 'border-red-500' : 'border-gray-600'
//               } rounded-md shadow-sm p-2`}
//             />
//           </div>

//           {modules.map((module, moduleIndex) => (
//             <div key={moduleIndex} className="mb-6">
//               <h3 className="text-lg font-bold text-blue-300">Module {moduleIndex + 1}</h3>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Module Name</label>
//                 <input
//                   type="text"
//                   value={module.name}
//                   onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
//                   className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                 />
//               </div>

//               {module.chapters.map((chapter, chapterIndex) => (
//                 <div key={chapterIndex} className="mb-4">
//                   <h4 className="text-md font-bold text-blue-300">Chapter {chapterIndex + 1}</h4>
//                   <div className="mb-2">
//                     <label className="block text-sm font-medium">Chapter Name</label>
//                     <input
//                       type="text"
//                       value={chapter.name}
//                       onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
//                       className={`mt-1 block w-full bg-gray-700 border ${
//                         !chapter.name ? 'border-red-500' : 'border-gray-600'
//                       } rounded-md shadow-sm text-gray-200 p-2`}
//                     />
//                   </div>

//                   {/* Drag & Drop File Upload for PDF */}
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">PDF Upload</label>
//                     <FileDropzone
//                       fileType="pdf"
//                       onDrop={(file) => {
//                         handleChapterChange(moduleIndex, chapterIndex, 'pdf', file);
//                         handleChapterChange(moduleIndex, chapterIndex, 'pdfUploaded', true);
//                       }}
//                       isUploaded={chapter.pdfUploaded}
//                     />
//                     {chapter.pdf && (
//                       <div className="mt-2 flex items-center space-x-4">
//                         <a
//                           href={URL.createObjectURL(chapter.pdf)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 hover:underline"
//                         >
//                           View PDF
//                         </a>
//                         <button
//                           onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
//                           className="text-red-500 hover:underline"
//                         >
//                           Delete PDF
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   {/* Drag & Drop File Upload for Video */}
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Video Upload</label>
//                     <FileDropzone
//                       fileType="video"
//                       onDrop={(file) => {
//                         handleChapterChange(moduleIndex, chapterIndex, 'video', file);
//                         handleChapterChange(moduleIndex, chapterIndex, 'videoUploaded', true);
//                       }}
//                       isUploaded={chapter.videoUploaded}
//                     />
//                     {chapter.video && (
//                       <div className="mt-2">
//                         <video
//                           controls
//                           className="w-full bg-gray-800 border border-gray-600 rounded-md"
//                         >
//                           <source src={URL.createObjectURL(chapter.video)} type={chapter.video.type} />
//                           Your browser does not support the video tag.
//                         </video>
//                         <button
//                           onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
//                           className="text-red-500 hover:underline mt-2"
//                         >
//                           Delete Video
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   <button
//                     type="button"
//                     onClick={() => addChapter(moduleIndex)}
//                     className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300"
//                   >
//                     Add Chapter
//                   </button>
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={addModule}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300"
//               >
//                 Add Module
//               </button>
//             </div>
//           ))}

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
//           >
//             Create Course
//           </button>
//         </form>
//       </div>

//       {/* Courses List */}
//       <div className="bg-gray-800 p-6 rounded-md shadow-lg">
//         <h2 className="text-xl font-bold text-blue-300 mb-4">Courses</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course, courseIndex) => (
//             <div key={courseIndex} className="bg-gray-900 p-6 rounded-md shadow-lg">
//               <h3 className="text-lg font-bold text-blue-300">Course: {course.name}</h3>
//               {course.modules.map((module, moduleIndex) => (
//                 <div key={moduleIndex} className="mb-4">
//                   <h4 className="text-md font-bold text-blue-200">Module {moduleIndex + 1}: {module.name}</h4>
//                   {module.chapters.map((chapter, chapterIndex) => (
//                     <div key={chapterIndex} className="ml-4 mb-2">
//                       <h5 className="text-sm font-bold text-blue-100">Chapter {chapterIndex + 1}: {chapter.name}</h5>
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm">PDF: {chapter.pdf ? chapter.pdf.name : 'No file uploaded'}</span>
//                         {chapter.pdf && (
//                           <div className="flex items-center space-x-4">
//                             <a
//                               href={URL.createObjectURL(chapter.pdf)}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-blue-500 hover:underline"
//                             >
//                               View PDF
//                             </a>
//                             <button
//                               onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
//                               className="text-red-500 hover:underline"
//                             >
//                               Delete PDF
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm">Video: {chapter.video ? chapter.video.name : 'No file uploaded'}</span>
//                         {chapter.video && (
//                           <div className="flex items-center space-x-4">
//                             <video
//                               controls
//                               className="w-48 bg-gray-800 border border-gray-600 rounded-md"
//                             >
//                               <source src={URL.createObjectURL(chapter.video)} type={chapter.video.type} />
//                               Your browser does not support the video tag.
//                             </video>
//                             <button
//                               onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
//                               className="text-red-500 hover:underline"
//                             >
//                               Delete Video
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={() => handleDeleteCourse(courseIndex)}
//                     className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
//                   >
//                     Delete Course
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';

// const AdminDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const [courseName, setCourseName] = useState('');
//   const [modules, setModules] = useState([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false }] }]);

//   const addModule = useCallback(() => {
//     setModules((prevModules) => [...prevModules, { name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false }] }]);
//   }, []);

//   const addChapter = useCallback((moduleIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters.push({ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false });
//       return updatedModules;
//     });
//   }, []);

//   const handleModuleChange = useCallback((index, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[index][field] = value;
//       return updatedModules;
//     });
//   }, []);

//   const handleChapterChange = useCallback((moduleIndex, chapterIndex, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
//       return updatedModules;
//     });
//   }, []);

//   const handleCreateCourse = useCallback((e) => {
//     e.preventDefault();
//     if (!courseName) {
//       alert('Course name is required.');
//       return;
//     }
//     if (modules.some((module) => !module.name)) {
//       alert('All modules must have names.');
//       return;
//     }
//     if (modules.some((module) =>
//       module.chapters.some((chapter) =>
//         !chapter.name || !chapter.pdf || !chapter.video
//       )
//     )) {
//       alert('All chapters must have a name, PDF, and video.');
//       return;
//     }
//     setCourses((prevCourses) => [...prevCourses, { name: courseName, modules }]);
//     resetForm();
//   }, [courseName, modules]);

//   const resetForm = useCallback(() => {
//     setCourseName('');
//     setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false }] }]);
//   }, []);

//   const handleDeleteCourse = useCallback((index) => {
//     setCourses((prevCourses) => {
//       const updatedCourses = [...prevCourses];
//       updatedCourses.splice(index, 1);
//       return updatedCourses;
//     });
//   }, []);

//   const handleDeleteFile = useCallback((courseIndex, moduleIndex, chapterIndex, fileType) => {
//     setCourses((prevCourses) => {
//       const updatedCourses = [...prevCourses];
//       updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][fileType] = null;
//       updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = false;
//       return updatedCourses;
//     });
//   }, []);

//   const FileDropzone = ({ onDrop, fileType, isUploaded }) => {
//     const { getRootProps, getInputProps } = useDropzone({
//       accept: fileType === 'pdf' ? 'application/pdf' : 'video/*',
//       onDrop: (acceptedFiles) => {
//         if (acceptedFiles.length > 0) {
//           onDrop(acceptedFiles[0]);
//         }
//       },
//     });

//     return (
//       <div className="mb-2">
//         <div
//           {...getRootProps()}
//           className={`border-dashed border-2 border-gray-500 p-4 rounded-md text-center hover:border-blue-400 cursor-pointer transition-all duration-300 ${
//             isUploaded ? 'border-green-500' : ''
//           }`}
//         >
//           <input {...getInputProps()} />
//           <p>Drag & Drop {fileType.toUpperCase()} or click to upload</p>
//         </div>
//         {isUploaded && <p className="text-green-500 mt-2">Successfully uploaded {fileType.toUpperCase()}!</p>}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
//       <header className="sticky top-0 bg-gray-900 p-4 shadow-md z-10">
//         <h1 className="text-3xl font-bold text-blue-400 lg:ml-[550px]">Admin Dashboard</h1>
//       </header>

//       <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-10 mt-8">
//         <h2 className="text-2xl font-bold text-blue-300 mb-4">Create a New Course</h2>
//         <form onSubmit={handleCreateCourse}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Course Name</label>
//             <input
//               type="text"
//               value={courseName}
//               onChange={(e) => setCourseName(e.target.value)}
//               className={`mt-1 block w-full bg-gray-700 text-gray-200 border ${
//                 !courseName ? 'border-red-500' : 'border-gray-600'
//               } rounded-md shadow-sm p-2`}
//             />
//           </div>

//           {modules.map((module, moduleIndex) => (
//             <div key={moduleIndex} className="mb-6">
//               <h3 className="text-lg font-bold text-blue-300">Module {moduleIndex + 1}</h3>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Module Name</label>
//                 <input
//                   type="text"
//                   value={module.name}
//                   onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
//                   className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                 />
//               </div>

//               {module.chapters.map((chapter, chapterIndex) => (
//                 <div key={chapterIndex} className="mb-4">
//                   <h4 className="text-md font-bold text-blue-300">Chapter {chapterIndex + 1}</h4>
//                   <div className="mb-2">
//                     <label className="block text-sm font-medium">Chapter Name</label>
//                     <input
//                       type="text"
//                       value={chapter.name}
//                       onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
//                       className={`mt-1 block w-full bg-gray-700 border ${
//                         !chapter.name ? 'border-red-500' : 'border-gray-600'
//                       } rounded-md shadow-sm text-gray-200 p-2`}
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">PDF Upload</label>
//                     <FileDropzone
//                       fileType="pdf"
//                       onDrop={(file) => {
//                         handleChapterChange(moduleIndex, chapterIndex, 'pdf', file);
//                         handleChapterChange(moduleIndex, chapterIndex, 'pdfUploaded', true);
//                       }}
//                       isUploaded={chapter.pdfUploaded}
//                     />
//                     {chapter.pdf && (
//                       <div className="mt-2 flex items-center space-x-4">
//                         <a
//                           href={URL.createObjectURL(chapter.pdf)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-500 hover:underline"
//                         >
//                           View PDF
//                         </a>
//                         <button
//                           onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
//                           className="text-red-500 hover:underline"
//                         >
//                           Delete PDF
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Video Upload</label>
//                     <FileDropzone
//                       fileType="video"
//                       onDrop={(file) => {
//                         handleChapterChange(moduleIndex, chapterIndex, 'video', file);
//                         handleChapterChange(moduleIndex, chapterIndex, 'videoUploaded', true);
//                       }}
//                       isUploaded={chapter.videoUploaded}
//                     />
//                     {chapter.video && (
//                       <div className="mt-2 flex flex-col items-center">
//                         <video
//                           controls
//                           className="w-full max-w-md"
//                           src={URL.createObjectURL(chapter.video)}
//                         >
//                           Your browser does not support the video tag.
//                         </video>
//                         <button
//                           onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
//                           className="text-red-500 hover:underline mt-2"
//                         >
//                           Delete Video
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={() => addChapter(moduleIndex)}
//                 className="text-blue-400 hover:underline"
//               >
//                 Add Chapter
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={addModule}
//             className="text-blue-400 hover:underline"
//           >
//             Add Module
//           </button>
//           <button
//             type="submit"
//             className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//           >
//             Create Course
//           </button>
//         </form>
//       </div>

//       <div className="bg-gray-800 p-6 rounded-md shadow-lg">
//         <h2 className="text-2xl font-bold text-blue-300 mb-4">Courses</h2>
//         {courses.length > 0 ? (
//           <ul>
//             {courses.map((course, courseIndex) => (
//               <li key={courseIndex} className="mb-4">
//                 <h3 className="text-lg font-bold text-blue-300">{course.name}</h3>
//                 {course.modules.map((module, moduleIndex) => (
//                   <div key={moduleIndex} className="mt-2">
//                     <h4 className="text-md font-semibold text-blue-200">Module {moduleIndex + 1}: {module.name}</h4>
//                     {module.chapters.map((chapter, chapterIndex) => (
//                       <div key={chapterIndex} className="mt-2">
//                         <p className="text-sm text-gray-300">Chapter {chapterIndex + 1}: {chapter.name}</p>
//                         {chapter.pdf && (
//                           <div className="mt-2 flex items-center space-x-4">
//                             <a
//                               href={URL.createObjectURL(chapter.pdf)}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-blue-500 hover:underline"
//                             >
//                               View PDF
//                             </a>
//                           </div>
//                         )}
//                         {chapter.video && (
//                           <div className="mt-2 flex flex-col items-center">
//                             <video
//                               controls
//                               className="w-full max-w-md"
//                               src={URL.createObjectURL(chapter.video)}
//                             >
//                               Your browser does not support the video tag.
//                             </video>
//                             <a
//                               href={URL.createObjectURL(chapter.video)}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-blue-500 hover:underline mt-2"
//                             >
//                               View Video
//                             </a>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//                 <button
//                   onClick={() => handleDeleteCourse(courseIndex)}
//                   className="mt-2 text-red-500 hover:underline"
//                 >
//                   Delete Course
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No courses available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';

// const AdminDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const [courseName, setCourseName] = useState('');
//   const [modules, setModules] = useState([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false }] }]);

//   const addModule = useCallback(() => {
//     setModules((prevModules) => [...prevModules, { name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false }] }]);
//   }, []);

//   const addChapter = useCallback((moduleIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters.push({ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false });
//       return updatedModules;
//     });
//   }, []);

//   const handleModuleChange = useCallback((index, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[index][field] = value;
//       return updatedModules;
//     });
//   }, []);

//   const handleChapterChange = useCallback((moduleIndex, chapterIndex, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
//       return updatedModules;
//     });
//   }, []);

//   const handleCreateCourse = useCallback((e) => {
//     e.preventDefault();
//     if (!courseName) {
//       alert('Course name is required.');
//       return;
//     }
//     if (modules.some((module) => !module.name)) {
//       alert('All modules must have names.');
//       return;
//     }
//     if (modules.some((module) =>
//       module.chapters.some((chapter) =>
//         !chapter.name || !chapter.pdf || !chapter.video
//       )
//     )) {
//       alert('All chapters must have a name, PDF, and video.');
//       return;
//     }
//     setCourses((prevCourses) => [...prevCourses, { name: courseName, modules }]);
//     resetForm();
//   }, [courseName, modules]);

//   const resetForm = useCallback(() => {
//     setCourseName('');
//     setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false }] }]);
//   }, []);

//   const handleDeleteCourse = useCallback((index) => {
//     setCourses((prevCourses) => {
//       const updatedCourses = [...prevCourses];
//       updatedCourses.splice(index, 1);
//       return updatedCourses;
//     });
//   }, []);

//   const handleDeleteFile = useCallback((courseIndex, moduleIndex, chapterIndex, fileType) => {
//     setCourses((prevCourses) => {
//       const updatedCourses = [...prevCourses];
//       updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][fileType] = null;
//       updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = false;
//       return updatedCourses;
//     });
//   }, []);

//   const FileDropzone = ({ onDrop, fileType, isUploaded }) => {
//     const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
//       accept: fileType === 'pdf' ? 'application/pdf' : 'video/*',
//       onDrop: (acceptedFiles) => {
//         if (acceptedFiles.length > 0) {
//           onDrop(acceptedFiles[0]);
//         }
//       },
//     });

//     const borderColor = isDragActive
//       ? 'border-blue-500'
//       : isDragReject
//       ? 'border-red-500'
//       : 'border-gray-500';

//     return (
//       <div className="mb-2">
//         <div
//           {...getRootProps()}
//           className={`border-dashed border-2 ${borderColor} p-4 rounded-md text-center hover:border-blue-400 cursor-pointer transition-all duration-300 ${
//             isUploaded ? 'border-green-500' : ''
//           }`}
//         >
//           <input {...getInputProps()} />
//           <p>{`Drag & Drop ${fileType.toUpperCase()} or click to upload`}</p>
//         </div>
//         {isUploaded && <p className="text-green-500 mt-2">Successfully uploaded {fileType.toUpperCase()}!</p>}
//       </div>
//     );
//   };

//   const viewFile = (file) => {
//     if (file) {
//       const fileURL = URL.createObjectURL(file);
//       window.open(fileURL, '_blank');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
//       <header className="sticky top-0 bg-gray-900 p-4 shadow-md z-10">
//         <h1 className="text-3xl font-bold text-blue-400 lg:ml-[550px]">Admin Dashboard</h1>
//       </header>

//       <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-10 mt-8">
//         <h2 className="text-2xl font-bold text-blue-300 mb-4">Create a New Course</h2>
//         <form onSubmit={handleCreateCourse}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Course Name</label>
//             <input
//               type="text"
//               value={courseName}
//               onChange={(e) => setCourseName(e.target.value)}
//               className={`mt-1 block w-full bg-gray-700 text-gray-200 border ${
//                 !courseName ? 'border-red-500' : 'border-gray-600'
//               } rounded-md shadow-sm p-2`}
//             />
//           </div>

//           {modules.map((module, moduleIndex) => (
//             <div key={moduleIndex} className="mb-6">
//               <h3 className="text-lg font-bold text-blue-300">Module {moduleIndex + 1}</h3>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium">Module Name</label>
//                 <input
//                   type="text"
//                   value={module.name}
//                   onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
//                   className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                 />
//               </div>

//               {module.chapters.map((chapter, chapterIndex) => (
//                 <div key={chapterIndex} className="mb-4">
//                   <h4 className="text-md font-bold text-blue-300">Chapter {chapterIndex + 1}</h4>
//                   <div className="mb-2">
//                     <label className="block text-sm font-medium">Chapter Name</label>
//                     <input
//                       type="text"
//                       value={chapter.name}
//                       onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
//                       className={`mt-1 block w-full bg-gray-700 border ${
//                         !chapter.name ? 'border-red-500' : 'border-gray-600'
//                       } rounded-md shadow-sm text-gray-200 p-2`}
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">PDF Upload</label>
//                     <FileDropzone
//                       fileType="pdf"
//                       onDrop={(file) => {
//                         handleChapterChange(moduleIndex, chapterIndex, 'pdf', file);
//                         handleChapterChange(moduleIndex, chapterIndex, 'pdfUploaded', true);
//                       }}
//                       isUploaded={chapter.pdfUploaded}
//                     />
//                     {chapter.pdf && (
//                       <div className="mt-2 flex items-center space-x-4">
//                         <button
//                           onClick={() => viewFile(chapter.pdf)}
//                           className="text-blue-500 hover:underline"
//                         >
//                           View PDF
//                         </button>
//                         {/* <button
//                           onClick={() => handleDeleteFile(0, moduleIndex, chapterIndex, 'pdf')}
//                           className="text-red-500 hover:underline"
//                         >
//                           Delete PDF
//                         </button> */}
                        
//                       </div>
//                     )}
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium">Video Upload</label>
//                     <FileDropzone
//                       fileType="video"
//                       onDrop={(file) => {
//                         handleChapterChange(moduleIndex, chapterIndex, 'video', file);
//                         handleChapterChange(moduleIndex, chapterIndex, 'videoUploaded', true);
//                       }}
//                       isUploaded={chapter.videoUploaded}
//                     />
//                     {chapter.video && (
//                       <div className="mt-2 flex flex-col items-center">
//                         {/* <button
//                           onClick={() => viewFile(chapter.video)}
//                           className="text-blue-500 hover:underline mb-2"
//                         >
//                           View Video
//                         </button> */}
//                         <video
//                           controls
//                           className="w-full max-w-md mb-2"
//                           src={URL.createObjectURL(chapter.video)}
//                         >
//                           Your browser does not support the video tag.
//                         </video>
//                         {/* <button
//                           onClick={() => handleDeleteFile(0, moduleIndex, chapterIndex, 'video')}
//                           className="text-red-500 hover:underline"
//                         >
//                           Delete Video
//                         </button> */}
                        
//                       </div>
//                     )}

                    
//                   </div>
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={() => addChapter(moduleIndex)}
//                 className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
//               >
//                 Add Chapter
//               </button>
//             </div>
//           ))}
//         <div >
//           <button
//             type="button"
//             onClick={addModule}
//             className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
//           >
//             Add Module
//           </button>
//           <br></br>

//           <button
//             type="submit"
//             className="mt-6 bg-green-500 lg:ml-[600px] text-white px-8 py-2 rounded-md hover:bg-green-600"
//           >
//             Create Course
//           </button>
//           </div>
//         </form>
//       </div>

//       <div className="bg-gray-800 p-6 rounded-md shadow-lg">
//         <h2 className="text-2xl font-bold text-blue-300 mb-4">Existing Courses</h2>
//         {courses.length > 0 ? (
//           <ul>
//             {courses.map((course, courseIndex) => (
//               <li key={courseIndex} className="mb-4">
//                 <h3 className="text-xl font-bold text-blue-300">{course.name}</h3>
//                 {course.modules.map((module, moduleIndex) => (
//                   <div key={moduleIndex} className="mb-4">
//                     <h4 className="text-lg font-bold text-blue-200">Module {moduleIndex + 1}: {module.name}</h4>
//                     {module.chapters.map((chapter, chapterIndex) => (
//                       <div key={chapterIndex} className="mb-4">
//                         <h5 className="text-md font-bold text-blue-100">Chapter {chapterIndex + 1}: {chapter.name}</h5>
//                         {chapter.pdf && (
//                           <div className="mt-2 flex items-center space-x-4">
//                             <button
//                               onClick={() => viewFile(chapter.pdf)}
//                               className="text-blue-500 hover:underline"
//                             >
//                               View PDF
//                             </button>
//                             <button
//                               onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
//                               className="text-red-500 hover:underline"
//                             >
//                               Delete PDF
//                             </button>
//                           </div>
//                         )}
//                         {chapter.video && (
//                           <div className="mt-2 flex flex-col items-center">
//                             {/* <button
//                               onClick={() => viewFile(chapter.video)}
//                               className="text-blue-500 hover:underline mb-2"
//                             >
//                               View Video
//                             </button> */}
//                             <video
//                               controls
//                               className="w-full max-w-md mb-2"
//                               src={URL.createObjectURL(chapter.video)}
//                             >
//                               Your browser does not support the video tag.
//                             </video>
//                             <button
//                               onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
//                               className="text-red-500 hover:underline"
//                             >
//                               Delete Video
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//                 <button
//                   onClick={() => handleDeleteCourse(courseIndex)}
//                   className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md"
//                 >
//                   Delete Course
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-400">No courses available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState } from 'react';

// const AdminDashboard = () => {
//   const [courseName, setCourseName] = useState('');
//   const [modules, setModules] = useState([
//     {
//       name: '',
//       chapters: [
//         {
//           name: '',
//           pdf: null,
//           video: null,
//           pdfUploaded: false,
//           videoUploaded: false,
//           quiz: [], // State for quiz questions
//         },
//       ],
//     },
//   ]);
//   const [courses, setCourses] = useState([]);

//   const handleCourseNameChange = (e) => setCourseName(e.target.value);

//   const handleModuleChange = (index, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[index][field] = value;
//       return updatedModules;
//     });
//   };

//   const handleChapterChange = (moduleIndex, chapterIndex, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
//       return updatedModules;
//     });
//   };

//   const handleFileChange = (moduleIndex, chapterIndex, fileType, file) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex][fileType] = file;
//       updatedModules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = true;
//       return updatedModules;
//     });
//   };

//   const handleQuizChange = (moduleIndex, chapterIndex, questionIndex, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex].quiz[questionIndex][field] = value;
//       return updatedModules;
//     });
//   };

//   const addQuizQuestion = (moduleIndex, chapterIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex].quiz.push({
//         question: '',
//         options: ['', '', '', ''],
//         correctOption: 0,
//       });
//       return updatedModules;
//     });
//   };

//   const removeQuizQuestion = (moduleIndex, chapterIndex, questionIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex].quiz.splice(questionIndex, 1);
//       return updatedModules;
//     });
//   };

//   const handleCreateCourse = (e) => {
//     e.preventDefault();
//     if (!courseName) {
//       alert('Course name is required.');
//       return;
//     }
//     if (modules.some((module) => !module.name)) {
//       alert('All modules must have names.');
//       return;
//     }
//     if (modules.some((module) =>
//       module.chapters.some((chapter) =>
//         !chapter.name || !chapter.pdf || !chapter.video || chapter.quiz.some(q => !q.question || q.options.some(o => !o))
//       )
//     )) {
//       alert('All chapters must have a name, PDF, and video. Each quiz question must have a question and options.');
//       return;
//     }
//     setCourses((prevCourses) => [...prevCourses, { name: courseName, modules }]);
//     resetForm();
//   };

//   const resetForm = () => {
//     setCourseName('');
//     setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false, quiz: [] }] }]);
//   };

//   const handleDeleteCourse = (index) => {
//     setCourses((prevCourses) => prevCourses.filter((_, i) => i !== index));
//   };

//   const viewFile = (file) => {
//     const url = URL.createObjectURL(file);
//     window.open(url, '_blank');
//   };

//   const handleDeleteFile = (courseIndex, moduleIndex, chapterIndex, fileType) => {
//     setCourses((prevCourses) => {
//       const updatedCourses = [...prevCourses];
//       updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][fileType] = null;
//       updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = false;
//       return updatedCourses;
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-900 min-h-screen text-gray-200">
//       <h1 className="text-3xl font-bold text-blue-300 mb-6">Admin Dashboard</h1>
//       <form onSubmit={handleCreateCourse} className="space-y-6">
//         <div>
//           <label className="block text-lg font-medium">Course Name</label>
//           <input
//             type="text"
//             value={courseName}
//             onChange={handleCourseNameChange}
//             className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//           />
//         </div>
//         {modules.map((module, moduleIndex) => (
//           <div key={moduleIndex} className="mb-6">
//             <label className="block text-lg font-medium">Module {moduleIndex + 1} Name</label>
//             <input
//               type="text"
//               value={module.name}
//               onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
//               className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//             />
//             {module.chapters.map((chapter, chapterIndex) => (
//               <div key={chapterIndex} className="mt-6">
//                 <label className="block text-md font-medium">Chapter {chapterIndex + 1} Name</label>
//                 <input
//                   type="text"
//                   value={chapter.name}
//                   onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
//                   className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                 />
//                 <label className="block mt-4 text-md font-medium">Upload PDF</label>
//                 <input
//                   type="file"
//                   accept="application/pdf"
//                   onChange={(e) => handleFileChange(moduleIndex, chapterIndex, 'pdf', e.target.files[0])}
//                   className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
//                 />
//                 {chapter.pdfUploaded && (
//                   <button
//                     type="button"
//                     onClick={() => viewFile(chapter.pdf)}
//                     className="mt-2 text-blue-500 hover:underline"
//                   >
//                     View PDF
//                   </button>
//                 )}
//                 <label className="block mt-4 text-md font-medium">Upload Video</label>
//                 <input
//                   type="file"
//                   accept="video/*"
//                   onChange={(e) => handleFileChange(moduleIndex, chapterIndex, 'video', e.target.files[0])}
//                   className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
//                 />
//                 {chapter.videoUploaded && (
//                   <div className="mt-2">
//                     <video
//                       controls
//                       className="w-full max-w-md"
//                       src={URL.createObjectURL(chapter.video)}
//                     >
//                       Your browser does not support the video tag.
//                     </video>
//                   </div>
//                 )}
//                 <div className="mt-6">
//                   <h4 className="text-lg font-bold text-blue-300">Quiz Questions</h4>
//                   {chapter.quiz.map((question, questionIndex) => (
//                     <div key={questionIndex} className="mb-4">
//                       <label className="block text-md font-medium">Question {questionIndex + 1}</label>
//                       <input
//                         type="text"
//                         value={question.question}
//                         onChange={(e) => handleQuizChange(moduleIndex, chapterIndex, questionIndex, 'question', e.target.value)}
//                         placeholder="Enter question text"
//                         className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                       />
//                       <div className="mt-2">
//                         <label className="block text-sm font-medium">Options</label>
//                         {question.options.map((option, optionIndex) => (
//                           <input
//                             key={optionIndex}
//                             type="text"
//                             value={option}
//                             onChange={(e) => {
//                               const newOptions = [...question.options];
//                               newOptions[optionIndex] = e.target.value;
//                               handleQuizChange(moduleIndex, chapterIndex, questionIndex, 'options', newOptions);
//                             }}
//                             placeholder={`Option ${optionIndex + 1}`}
//                             className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2 mb-2"
//                           />
//                         ))}
//                         <label className="block text-sm font-medium">Correct Option</label>
//                         <select
//                           value={question.correctOption}
//                           onChange={(e) => handleQuizChange(moduleIndex, chapterIndex, questionIndex, 'correctOption', parseInt(e.target.value, 10))}
//                           className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                         >
//                           {question.options.map((_, optionIndex) => (
//                             <option key={optionIndex} value={optionIndex}>
//                               Option {optionIndex + 1}
//                             </option>
//                           ))}
//                         </select>
//                         <button
//                           type="button"
//                           onClick={() => removeQuizQuestion(moduleIndex, chapterIndex, questionIndex)}
//                           className="mt-2 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md"
//                         >
//                           Remove Question
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={() => addQuizQuestion(moduleIndex, chapterIndex)}
//                     className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
//                   >
//                     Add Quiz Question
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
        
//         <button
//           type="submit"
//           className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md"
//         >
//           Create Course
//         </button>
//       </form>
//       <br></br>
//       <hr></hr>
//       <br></br>
//       <div className="mt-8  space-x-6 space-y-6 border-x-2 border-y-2 rounded-xl">
        
//         <h2 className="text-2xl font-bold lg:ml-[580px] text-blue-300 mt-3 ">Existing Courses</h2>
//         <ul>
//           {courses.map((course, courseIndex) => (
//             <li key={courseIndex} className="mb-4">
//               <h3 className="text-xl font-bold text-blue-300">Course {courseIndex +1} : {course.name}</h3>
//               {course.modules.map((module, moduleIndex) => (
//                 <div key={moduleIndex} className="mb-4">
//                   <h4 className="text-lg font-bold text-blue-200">Module {moduleIndex + 1}: {module.name}</h4>
//                   {module.chapters.map((chapter, chapterIndex) => (
//                     <div key={chapterIndex} className="mb-4">
//                       <h5 className="text-md font-bold text-blue-100">Chapter {chapterIndex + 1}: {chapter.name}</h5>
//                       {chapter.pdf && (
//                         <div className="mt-2 flex items-center space-x-4">
//                           <button
//                             onClick={() => viewFile(chapter.pdf)}
//                             className="text-blue-500 hover:underline"
//                           >
//                             View PDF
//                           </button>
//                           <button
//                             onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
//                             className="text-red-500 hover:underline"
//                           >
//                             Delete PDF
//                           </button>
//                         </div>
//                       )}
//                       {chapter.video && (
//                         <div className="mt-2 flex flex-col items-center">
//                           <video
//                             controls
//                             className="w-full max-w-md mb-2"
//                             src={URL.createObjectURL(chapter.video)}
//                           >
//                             Your browser does not support the video tag.
//                           </video>
//                           <button
//                             onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
//                             className="text-red-500 hover:underline"
//                           >
//                             Delete Video
//                           </button>
//                         </div>
//                       )}
//                       {chapter.quiz.length > 0 && (
//                         <div className="mt-4">
//                           <h6 className="text-md font-bold text-blue-200">Quiz Questions</h6>
//                           {chapter.quiz.map((question, questionIndex) => (
//                             <div key={questionIndex} className="mb-4">
//                               <p className="font-semibold">Question {questionIndex + 1}: {question.question}</p>
//                               <ul>
//                                 {question.options.map((option, optionIndex) => (
//                                   <li key={optionIndex} className={`ml-4 ${optionIndex === question.correctOption ? 'text-green-500' : 'text-gray-400'}`}>
//                                     {optionIndex + 1}. {option}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                   <button
//                     onClick={() => handleDeleteCourse(courseIndex)}
//                     className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md"
//                   >
//                     Delete Course
//                   </button>
//                 </div>
//               ))}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useState } from 'react';

// const AdminDashboard = () => {
//   const [courseName, setCourseName] = useState('');
//   const [modules, setModules] = useState([
//     {
//       name: '',
//       chapters: [
//         {
//           name: '',
//           pdf: null,
//           video: null,
//           pdfUploaded: false,
//           videoUploaded: false,
//           quiz: [],
//         },
//       ],
//     },
//   ]);
//   const [courses, setCourses] = useState([]);

//   const handleCourseNameChange = (e) => setCourseName(e.target.value);

//   // Function to handle adding new modules
//   const addModule = () => {
//     setModules((prevModules) => [
//       ...prevModules,
//       {
//         name: '',
//         chapters: [
//           {
//             name: '',
//             pdf: null,
//             video: null,
//             pdfUploaded: false,
//             videoUploaded: false,
//             quiz: [],
//           },
//         ],
//       },
//     ]);
//   };

//   // Function to handle adding new chapters in a particular module
//   const addChapter = (moduleIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters.push({
//         name: '',
//         pdf: null,
//         video: null,
//         pdfUploaded: false,
//         videoUploaded: false,
//         quiz: [],
//       });
//       return updatedModules;
//     });
//   };

//   const handleModuleChange = (index, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[index][field] = value;
//       return updatedModules;
//     });
//   };

//   const handleChapterChange = (moduleIndex, chapterIndex, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
//       return updatedModules;
//     });
//   };

//   const handleFileChange = (moduleIndex, chapterIndex, fileType, file) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex][fileType] = file;
//       updatedModules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = true;
//       return updatedModules;
//     });
//   };

//   const handleQuizChange = (moduleIndex, chapterIndex, questionIndex, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex].quiz[questionIndex][field] = value;
//       return updatedModules;
//     });
//   };

//   const addQuizQuestion = (moduleIndex, chapterIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex].quiz.push({
//         question: '',
//         options: ['', '', '', ''],
//         correctOption: 0,
//       });
//       return updatedModules;
//     });
//   };

//   const removeQuizQuestion = (moduleIndex, chapterIndex, questionIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex].quiz.splice(questionIndex, 1);
//       return updatedModules;
//     });
//   };

//   const handleCreateCourse = (e) => {
//     e.preventDefault();
//     if (!courseName) {
//       alert('Course name is required.');
//       return;
//     }
//     if (modules.some((module) => !module.name)) {
//       alert('All modules must have names.');
//       return;
//     }
//     if (modules.some((module) =>
//       module.chapters.some((chapter) =>
//         !chapter.name || !chapter.pdf || !chapter.video || chapter.quiz.some(q => !q.question || q.options.some(o => !o))
//       )
//     )) {
//       alert('All chapters must have a name, PDF, and video. Each quiz question must have a question and options.');
//       return;
//     }
//     setCourses((prevCourses) => [...prevCourses, { name: courseName, modules }]);
//     resetForm();
//   };

//   const resetForm = () => {
//     setCourseName('');
//     setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false, quiz: [] }] }]);
//   };

//   const handleDeleteCourse = (index) => {
//     setCourses((prevCourses) => prevCourses.filter((_, i) => i !== index));
//   };

//   const viewFile = (file) => {
//     const url = URL.createObjectURL(file);
//     window.open(url, '_blank');
//   };

//   const handleDeleteFile = (courseIndex, moduleIndex, chapterIndex, fileType) => {
//     setCourses((prevCourses) => {
//       const updatedCourses = [...prevCourses];
//       updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][fileType] = null;
//       updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = false;
//       return updatedCourses;
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-900 min-h-screen text-gray-200">
//       <h1 className="text-3xl font-bold text-blue-300 mb-6">Admin Dashboard</h1>
//       <form onSubmit={handleCreateCourse} className="space-y-6">
//         <div>
//           <label className="block text-lg font-medium">Course Name</label>
//           <input
//             type="text"
//             value={courseName}
//             onChange={handleCourseNameChange}
//             className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//           />
//         </div>
//         {modules.map((module, moduleIndex) => (
//           <div key={moduleIndex} className="mb-6">
//             <label className="block text-lg font-medium">Module {moduleIndex + 1} Name</label>
//             <input
//               type="text"
//               value={module.name}
//               onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
//               className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//             />
//             {module.chapters.map((chapter, chapterIndex) => (
//               <div key={chapterIndex} className="mt-6">
//                 <label className="block text-md font-medium">Chapter {chapterIndex + 1} Name</label>
//                 <input
//                   type="text"
//                   value={chapter.name}
//                   onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
//                   className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                 />
//                 {/* File upload sections here */}
//               </div>
//             ))}
//             {/* Button to add new chapters */}
//             <button
//               type="button"
//               onClick={() => addChapter(moduleIndex)}
//               className="mt-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
//             >
//               Add Chapter
//             </button>
//           </div>
//         ))}
//         {/* Button to add new modules */}
//         <button
//           type="button"
//           onClick={addModule}
//           className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
//         >
//           Add Module
//         </button>
//         <button
//           type="submit"
//           className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md"
//         >
//           Create Course
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminDashboard;
//
//
//
//
//
//
//
//
//
//

// import React, { useState } from 'react';

// const AdminDashboard = () => {
//   const [courseName, setCourseName] = useState('');
//   const [modules, setModules] = useState([
//     {
//       name: '',
//       chapters: [
//         {
//           name: '',
//           pdf: null,
//           video: null,
//           pdfUploaded: false,
//           videoUploaded: false,
//           playgroundURL: '', // Added field for playground URL
//           quiz: [], // State for quiz questions
//         },
//       ],
//     },
//   ]);
//   const [courses, setCourses] = useState([]);

//   const handleCourseNameChange = (e) => setCourseName(e.target.value);

//   const handleModuleChange = (index, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[index][field] = value;
//       return updatedModules;
//     });
//   };

//   const handleChapterChange = (moduleIndex, chapterIndex, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
//       return updatedModules;
//     });
//   };

//   const handleFileChange = (moduleIndex, chapterIndex, fileType, file) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex][fileType] = file;
//       updatedModules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = true;
//       return updatedModules;
//     });
//   };

//   const handleQuizChange = (moduleIndex, chapterIndex, questionIndex, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       if (field.startsWith('options[')) {
//         const optionIndex = field.match(/\[(\d+)\]/)[1]; // Extract the index from 'options[0]', 'options[1]', etc.
//         updatedModules[moduleIndex].chapters[chapterIndex].quiz[questionIndex].options[optionIndex] = value;
//       } else {
//         updatedModules[moduleIndex].chapters[chapterIndex].quiz[questionIndex][field] = value;
//       }
//       return updatedModules;
//     });
//   };

//   const addQuizQuestion = (moduleIndex, chapterIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex].quiz.push({
//         question: '',
//         options: ['', '', '', ''],
//         correctOption: 0,
//       });
//       return updatedModules;
//     });
//   };

//   const removeQuizQuestion = (moduleIndex, chapterIndex, questionIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex].quiz.splice(questionIndex, 1);
//       return updatedModules;
//     });
//   };

//   const addModule = () => {
//     setModules((prevModules) => [
//       ...prevModules,
//       {
//         name: '',
//         chapters: [
//           {
//             name: '',
//             pdf: null,
//             video: null,
//             pdfUploaded: false,
//             videoUploaded: false,
//             playgroundURL: '',
//             quiz: [],
//           },
//         ],
//       },
//     ]);
//   };

//   const addChapter = (moduleIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters.push({
//         name: '',
//         pdf: null,
//         video: null,
//         pdfUploaded: false,
//         videoUploaded: false,
//         playgroundURL: '',
//         quiz: [],
//       });
//       return updatedModules;
//     });
//   };

//   const handleCreateCourse = (e) => {
//     e.preventDefault();
//     if (!courseName) {
//       alert('Course name is required.');
//       return;
//     }
//     if (modules.some((module) => !module.name)) {
//       alert('All modules must have names.');
//       return;
//     }
//     if (modules.some((module) =>
//       module.chapters.some((chapter) =>
//         !chapter.name || !chapter.pdf || !chapter.video || chapter.quiz.some(q => !q.question || q.options.some(o => !o))
//       )
//     )) {
//       alert('All chapters must have a name, PDF, and video. Each quiz question must have a question and options.');
//       return;
//     }
//     setCourses((prevCourses) => [...prevCourses, { name: courseName, modules }]);
//     resetForm();
//   };

//   const resetForm = () => {
//     setCourseName('');
//     setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false, playgroundURL: '', quiz: [] }] }]);
//   };

//   const handleDeleteCourse = (index) => {
//     setCourses((prevCourses) => prevCourses.filter((_, i) => i !== index));
//   };

//   const viewFile = (file) => {
//     const url = URL.createObjectURL(file);
//     window.open(url, '_blank');
//   };

//   const handleDeleteFile = (courseIndex, moduleIndex, chapterIndex, fileType) => {
//     setCourses((prevCourses) => {
//       const updatedCourses = [...prevCourses];
//       updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][fileType] = null;
//       updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = false;
//       return updatedCourses;
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-900 min-h-screen text-gray-200">
      
//       <h1 className="text-3xl font-bold text-blue-300 mb-6">Admin Dashboard</h1>
//       <form onSubmit={handleCreateCourse} className="space-y-6">
//         <div>
//           <label className="block text-lg font-medium">Course Name</label>
//           <input
//             type="text"
//             value={courseName}
//             onChange={handleCourseNameChange}
//             className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//           />
//         </div>
//         {modules.map((module, moduleIndex) => (
//           <div key={moduleIndex} className="mb-6">
//             <label className="block text-lg font-medium">Module {moduleIndex + 1} Name</label>
//             <input
//               type="text"
//               value={module.name}
//               onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
//               className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//             />
//             {module.chapters.map((chapter, chapterIndex) => (
//               <div key={chapterIndex} className="mt-6">
//                 <label className="block text-md font-medium">Chapter {chapterIndex + 1} Name</label>
//                 <input
//                   type="text"
//                   value={chapter.name}
//                   onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
//                   className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                 />
//                 <label className="block mt-4 text-md font-medium">Upload PDF</label>
//                 <input
//                   type="file"
//                   accept="application/pdf"
//                   onChange={(e) => handleFileChange(moduleIndex, chapterIndex, 'pdf', e.target.files[0])}
//                   className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
//                 />
//                 {chapter.pdfUploaded && (
//                   <button
//                     type="button"
//                     onClick={() => viewFile(chapter.pdf)}
//                     className="mt-2 text-blue-500 hover:underline"
//                   >
//                     View PDF
//                   </button>
//                 )}
//                 <label className="block mt-4 text-md font-medium">Upload Video</label>
//                 <input
//                   type="file"
//                   accept="video/*"
//                   onChange={(e) => handleFileChange(moduleIndex, chapterIndex, 'video', e.target.files[0])}
//                   className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
//                 />
//                 {chapter.videoUploaded && (
//                   <div className="mt-2">
//                     <video
//                       controls
//                       className="w-full max-w-md"
//                       src={URL.createObjectURL(chapter.video)}
//                     >
//                       Your browser does not support the video tag.
//                     </video>
//                   </div>
//                 )}

//                 <label className="block mt-4 text-md font-medium">Access Playground URL</label>
//                 <input
//                   type="url"
//                   value={chapter.playgroundURL}
//                   onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'playgroundURL', e.target.value)}
//                   placeholder="Enter playground URL"
//                   className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                 />

//                 {/* Quiz Questions */}
//                 <div className="mt-6">
//                   <h4 className="text-lg font-normal text-white">Quiz Questions</h4>
//                   {chapter.quiz.map((question, questionIndex) => (
//                     <div key={questionIndex} className="mb-4">
//                       <label className="block text-md font-medium">Question {questionIndex + 1}</label>
//                       <input
//                         type="text"
//                         value={question.question}
//                         onChange={(e) =>
//                           handleQuizChange(moduleIndex, chapterIndex, questionIndex, 'question', e.target.value)
//                         }
//                         className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                       />
//                       <div className="mt-2 space-y-2">
//                         {question.options.map((option, optionIndex) => (
//                           <div key={optionIndex} className="flex items-center space-x-2">
//                             <label className="block text-sm">Option {optionIndex + 1}</label>
//                             <input
//                               type="text"
//                               value={option}
//                               onChange={(e) =>
//                                 handleQuizChange(moduleIndex, chapterIndex, questionIndex, `options[${optionIndex}]`, e.target.value)
//                               }
//                               className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                             />
//                           </div>
//                         ))}
//                       </div>
//                       <label className="block text-md font-medium mt-4">Correct Option</label>
//                       <select
//                         value={question.correctOption}
//                         onChange={(e) =>
//                           handleQuizChange(moduleIndex, chapterIndex, questionIndex, 'correctOption', e.target.value)
//                         }
//                         className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                       >
//                         {question.options.map((_, optionIndex) => (
//                           <option key={optionIndex} value={optionIndex}>
//                             Option {optionIndex + 1}
//                           </option>
//                         ))}
//                       </select>
//                       <button
//                         type="button"
//                         onClick={() => removeQuizQuestion(moduleIndex, chapterIndex, questionIndex)}
//                         className="mt-2 text-red-500 hover:underline"
//                       >
//                         Remove Question
//                       </button>
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={() => addQuizQuestion(moduleIndex, chapterIndex)}
//                     className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
//                   >
//                     Add Quiz Question
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => addChapter(moduleIndex)}
//               className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
//             >
//               Add Chapter
//             </button>
//           </div>
//         ))}
        
//         <button
//           type="button"
//           onClick={addModule}
//           className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
//         >
//           Add Module
//         </button>
//         <br></br>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md lg:ml-[650px]"
//         >
//           Create Course
//         </button>
        
//       </form>
//       <br></br>
//       <hr></hr>

//       <div className="mt-8 ">
//         <h1 className="text-3xl font-bold text-blue-300 mb-4">Existing Courses</h1>
//         {courses.length === 0 ? (
//           <p>No courses created yet.</p>
//         ) : (
//           courses.map((course, courseIndex) => (
//             <div key={courseIndex} className="mb-6">
//               <h3 className="text-xl font-semibold">Course {courseIndex + 1}:{course.name}</h3>
//               {course.modules.map((module, moduleIndex) => (
//                 <div key={moduleIndex} className="ml-4 mt-4">
//                   <h4 className="text-lg font-semibold">Module {moduleIndex + 1}: {module.name}</h4>
//                   {module.chapters.map((chapter, chapterIndex) => (
//                     <div key={chapterIndex} className="ml-4 mt-2">
//                       <h5 className="font-semibold">Chapter {chapterIndex + 1}: {chapter.name}</h5>
//                       <p>PDF: {chapter.pdfUploaded ? <a href={URL.createObjectURL(chapter.pdf)} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View PDF</a> : 'Not uploaded'}</p>
//                       <p>Video: {chapter.videoUploaded ? <video controls src={URL.createObjectURL(chapter.video)} className="w-full max-w-md" /> : 'Not uploaded'}</p>
//                       <p>Playground URL: <a href={chapter.playgroundURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{chapter.playgroundURL}</a></p>
//                       <div>
//                         <h6 className="font-semibold mt-2">Quiz Questions:</h6>
//                         {/* {chapter.quiz.length === 0 ? (
//                           <p>No quiz questions added.</p>
//                         ) : (
//                           chapter.quiz.map((q, i) => (
//                             <div key={i} className="mt-2">
//                               <p>Question {i + 1}: {q.question}</p>
//                               <ul className="ml-4 list-disc">
//                                 {q.options.map((option, optionIndex) => (
//                                   <li key={optionIndex} className={q.correctOption === optionIndex ? 'text-green-500' : ''}>
//                                     {optionIndex + 1}. {option}
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           ))
//                         )} */}
//                        {/* {chapter.quiz.length === 0 ? (
//   <p>No quiz questions added.</p>
// ) : (
//   chapter.quiz.map((q, i) => (
//     <div key={i} className="mt-4 p-4 border rounded-lg shadow-sm">
//       <p className="font-semibold">Question {i + 1}: {q.question}</p>
//       {q.options.length === 0 ? (
//         <p className="text-red-500">No options available.</p>
//       ) : (
//         <ul className="ml-6 mt-2 list-disc">
//           {q.options.map((option, optionIndex) => (
//             <li 
//               key={optionIndex} 
//               className={`mt-1 ${q.correctOption === optionIndex ? 'text-green-500 font-bold' : 'text-gray-200'}`}
//             >
//               {optionIndex + 1}. {option}
//               {q.correctOption === optionIndex && (
//                 <span className="ml-2 text-green-500">✔</span> // Icon for correct answer
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   ))
// )} */}
// {chapter.quiz.length === 0 ? (
//   <p>No quiz questions added.</p>
// ) : (
//   chapter.quiz.map((q, i) => (
//     <div key={i} className="mt-4 p-4 border rounded-lg shadow-sm">
//       <p className="font-semibold">Question {i + 1}: {q.question}</p>
//       <ul className="ml-6 mt-2 list-disc">
//         {q.options.map((option, optionIndex) => (
//           <li 
//             key={optionIndex} 
//             className={`mt-1 ${q.correctOption === optionIndex ? 'text-green-500 font-bold' : 'text-gray-200'}`}
//           >
//             {optionIndex + 1}. {option}
//             {q.correctOption === optionIndex && (
//               <span className="ml-2 text-green-500">✔</span> // Optional icon for the correct answer
//             )}
//           </li>
//         ))}
//       </ul>
//       {q.correctOption !== null && (
//         <p className="mt-2 font-semibold text-blue-500">
//           Correct Answer: Option {q.correctOption + 1} - {q.options[q.correctOption]}
//         </p>
//       )}
//     </div>
//   ))
// )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={() => handleDeleteCourse(courseIndex)}
//                 className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
//               >
//                 Delete Course
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



// import React, { useState } from 'react';

// const AdminDashboard = () => {
//   const [courseName, setCourseName] = useState('');
//   const [modules, setModules] = useState([
//     {
//       name: '',
//       chapters: [
//         {
//           name: '',
//           pdf: null,
//           video: null,
//           pdfUploaded: false,
//           videoUploaded: false,
//           playgroundURL: '',
//           quiz: [],
//         },
//       ],
//     },
//   ]);
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleCourseNameChange = (e) => setCourseName(e.target.value);

//   const handleModuleChange = (index, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[index][field] = value;
//       return updatedModules;
//     });
//   };

//   const handleChapterChange = (moduleIndex, chapterIndex, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
//       return updatedModules;
//     });
//   };

//   const handleFileChange = (moduleIndex, chapterIndex, fileType, file) => {
//     if (file) {
//       setModules((prevModules) => {
//         const updatedModules = [...prevModules];
//         updatedModules[moduleIndex].chapters[chapterIndex][fileType] = file;
//         updatedModules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = true;
//         return updatedModules;
//       });
//     }
//   };

//   const updateQuizQuestion = (moduleIndex, chapterIndex, questionIndex, field, value) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       if (field.startsWith('options[')) {
//         const optionIndex = field.match(/\[(\d+)\]/)[1];
//         updatedModules[moduleIndex].chapters[chapterIndex].quiz[questionIndex].options[optionIndex] = value;
//       } else {
//         updatedModules[moduleIndex].chapters[chapterIndex].quiz[questionIndex][field] = value;
//       }
//       return updatedModules;
//     });
//   };

//   const addQuizQuestion = (moduleIndex, chapterIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex].quiz.push({
//         question: '',
//         options: ['', '', '', ''],
//         correctOption: 0,
//       });
//       return updatedModules;
//     });
//   };

//   const removeQuizQuestion = (moduleIndex, chapterIndex, questionIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters[chapterIndex].quiz.splice(questionIndex, 1);
//       return updatedModules;
//     });
//   };

//   const addModule = () => {
//     setModules((prevModules) => [
//       ...prevModules,
//       {
//         name: '',
//         chapters: [
//           {
//             name: '',
//             pdf: null,
//             video: null,
//             pdfUploaded: false,
//             videoUploaded: false,
//             playgroundURL: '',
//             quiz: [],
//           },
//         ],
//       },
//     ]);
//   };

//   const addChapter = (moduleIndex) => {
//     setModules((prevModules) => {
//       const updatedModules = [...prevModules];
//       updatedModules[moduleIndex].chapters.push({
//         name: '',
//         pdf: null,
//         video: null,
//         pdfUploaded: false,
//         videoUploaded: false,
//         playgroundURL: '',
//         quiz: [],
//       });
//       return updatedModules;
//     });
//   };

//   const handleCreateCourse = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setCourses((prevCourses) => [...prevCourses, { name: courseName, modules }]);
//     resetForm();
//     setLoading(false);
//   };

//   const resetForm = () => {
//     setCourseName('');
//     setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false, playgroundURL: '', quiz: [] }] }]);
//   };

//   const handleDeleteCourse = (index) => {
//     if (window.confirm('Are you sure you want to delete this course?')) {
//       setCourses((prevCourses) => prevCourses.filter((_, i) => i !== index));
//     }
//   };

//   const viewFile = (file) => {
//     const url = URL.createObjectURL(file);
//     window.open(url, '_blank');
//   };

//   const handleDeleteFile = (courseIndex, moduleIndex, chapterIndex, fileType) => {
//     setCourses((prevCourses) => {
//       const updatedCourses = [...prevCourses];
//       updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][fileType] = null;
//       updatedCourses[courseIndex].modules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = false;
//       return updatedCourses;
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-900 min-h-screen text-gray-200">
//       <h1 className="text-3xl font-bold text-blue-300 mb-6">Admin Dashboard</h1>
//       <form onSubmit={handleCreateCourse} className="space-y-6">
//         <div>
//           <label className="block text-lg font-medium">Course Name</label>
//           <input
//             type="text"
//             value={courseName}
//             onChange={handleCourseNameChange}
//             className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//           />
//         </div>
//         {modules.map((module, moduleIndex) => (
//           <div key={moduleIndex} className="mb-6">
//             <label className="block text-lg font-medium">Module {moduleIndex + 1} Name</label>
//             <input
//               type="text"
//               value={module.name}
//               onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
//               className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//             />
//             {module.chapters.map((chapter, chapterIndex) => (
//               <div key={chapterIndex} className="mt-6">
//                 <label className="block text-md font-medium">Chapter {chapterIndex + 1} Name</label>
//                 <input
//                   type="text"
//                   value={chapter.name}
//                   onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
//                   className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                 />
//                 <label className="block mt-4 text-md font-medium">Upload PDF</label>
//                 <input
//                   type="file"
//                   accept="application/pdf"
//                   onChange={(e) => handleFileChange(moduleIndex, chapterIndex, 'pdf', e.target.files[0])}
//                   className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
//                 />
//                 {chapter.pdfUploaded && (
//                   <button
//                     type="button"
//                     onClick={() => viewFile(chapter.pdf)}
//                     className="mt-2 text-blue-500 hover:underline"
//                   >
//                     View PDF
//                   </button>
//                 )}
//                 <label className="block mt-4 text-md font-medium">Upload Video</label>
//                 <input
//                   type="file"
//                   accept="video/*"
//                   onChange={(e) => handleFileChange(moduleIndex, chapterIndex, 'video', e.target.files[0])}
//                   className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
//                 />
//                 {chapter.videoUploaded && (
//                   <div className="mt-2">
//                     <video
//                       controls
//                       className="w-full max-w-md"
//                       src={URL.createObjectURL(chapter.video)}
//                     >
//                       Your browser does not support the video tag.
//                     </video>
//                   </div>
//                 )}

//                 <label className="block mt-4 text-md font-medium">Access Playground URL</label>
//                 <input
//                   type="url"
//                   value={chapter.playgroundURL}
//                   onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'playgroundURL', e.target.value)}
//                   placeholder="Enter playground URL"
//                   className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                 />

//                 <div className="mt-6">
//                   <button
//                     type="button"
//                     onClick={() => addQuizQuestion(moduleIndex, chapterIndex)}
//                     className="bg-blue-500 text-white px-4 py-2 rounded"
//                   >
//                     Add Quiz Question
//                   </button>
//                   {chapter.quiz.map((quiz, quizIndex) => (
//                     <div key={quizIndex} className="mt-4 p-4 border border-gray-600 rounded">
//                       <label className="block text-md font-medium">Question {quizIndex + 1}</label>
//                       <input
//                         type="text"
//                         value={quiz.question}
//                         onChange={(e) => updateQuizQuestion(moduleIndex, chapterIndex, quizIndex, 'question', e.target.value)}
//                         className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                       />
//                       {quiz.options.map((option, optionIndex) => (
//                         <div key={optionIndex} className="mt-2">
//                           <label className="block text-md font-medium">Option {String.fromCharCode(65 + optionIndex)}</label>
//                           <input
//                             type="text"
//                             value={option}
//                             onChange={(e) => updateQuizQuestion(moduleIndex, chapterIndex, quizIndex, `options[${optionIndex}]`, e.target.value)}
//                             className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                           />
//                         </div>
//                       ))}
//                       <label className="block mt-4 text-md font-medium">Correct Option</label>
//                       <input
//                         type="number"
//                         min="0"
//                         max="3"
//                         value={quiz.correctOption}
//                         onChange={(e) => updateQuizQuestion(moduleIndex, chapterIndex, quizIndex, 'correctOption', Number(e.target.value))}
//                         className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => removeQuizQuestion(moduleIndex, chapterIndex, quizIndex)}
//                         className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
//                       >
//                         Remove Question
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => addChapter(moduleIndex)}
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Add Chapter
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={addModule}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add Module
//         </button>
//         <br></br>
//         <button
//           type="submit"
//           className="bg-green-500 text-white px-4 py-2 rounded lg:ml-[600px]"
//         >
//           {loading ? 'Creating Course...' : 'Create Course'}
//         </button>
//       </form>
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold text-blue-300">Existing Courses</h2>
//         {courses.length === 0 ? (
//           <p>No courses created yet.</p>
//         ) : (
//           courses.map((course, courseIndex) => (
//             <div key={courseIndex} className="mt-6 p-4 border border-gray-600 rounded">
//               <h3 className="text-xl font-semibold text-blue-300">Course {courseIndex + 1} : {course.name}</h3>
//               {course.modules.map((module, moduleIndex) => (
//                 <div key={moduleIndex} className="mt-4">
//                   <h4 className="text-lg font-semibold">Module {moduleIndex + 1}: {module.name}</h4>
//                   {module.chapters.map((chapter, chapterIndex) => (
//                     <div key={chapterIndex} className="mt-4">
//                       <h5 className="text-md font-semibold">Chapter {chapterIndex + 1}: {chapter.name}</h5>
//                       {chapter.pdfUploaded && (
//                         <div className='flex flex-wrap gap-4'>
//                           <p>PDF Uploaded:</p>
//                           <button
//                             type="button"
//                             onClick={() => viewFile(chapter.pdf)}
//                             className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
//                           >
//                             View PDF
//                           </button>
//                           <button
//                         type="button"
//                         onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
//                         className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
//                       >
//                         Delete PDF
//                       </button>
//                         </div>
//                       )}
//                       {chapter.videoUploaded && (
//                         <div>
//                           <p>Video Uploaded:</p>
//                           <video
//                             controls
//                             className="w-full max-w-md mt-2"
//                             src={URL.createObjectURL(chapter.video)}
//                           >
//                             Your browser does not support the video tag.
//                           </video>
//                         </div>
//                       )}
//                       <button
//                         type="button"
//                         onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
//                         className="mt-2 bg-red-500 text-white px-4 py-2 rounded lg:ml-[150px]"
//                       >
//                         Delete Video
//                       </button>
//                       <br></br>
//                       {/* <p>Playground URL: {chapter.playgroundURL || 'N/A'}</p> */}
//                       {/* <p>Playground URL: <a href={chapter.playgroundURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{chapter.playgroundURL}</a></p> */}
//                       {/* <p>Playground URL: <a href={chapter.playgroundURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{chapter.playgroundURL}</a></p> */}
//                       <br></br>
//                       <br></br>
//                       <p>

//   <a 
//     href={chapter.playgroundURL} 
//     target="_blank" 
//     rel="noopener noreferrer" 
//     className="inline-block mt-2 bg-blue-500 text-white px-4 py-2 rounded "
//   >
//     Access Playground
//   </a>
// </p>
// <br></br>

                      
//                       {chapter.quiz.length > 0 && (
//                         <div className="mt-4">
//                           <h6 className="text-md font-semibold">Quiz Questions</h6>
//                           {chapter.quiz.map((quiz, quizIndex) => (
//                             <div key={quizIndex} className="mt-2">
//                               <p><strong>Question:</strong> {quizIndex + 1} : {quiz.question}</p>
//                               {quiz.options.map((option, optionIndex) => (
//                                 <p
//                                   key={optionIndex}
//                                   className={`font-semibold ${quiz.correctOption === optionIndex ? 'text-green-500' : ''}`}
//                                 >
//                                   <strong>Option {String.fromCharCode(65 + optionIndex)}:</strong> {option}
//                                 </p>
//                               ))}
//                               <p><strong>Correct Option:</strong> {String.fromCharCode(65 + quiz.correctOption)}</p>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       {/* <button
//                         type="button"
//                         onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
//                         className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
//                       >
//                         Delete PDF
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
//                         className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
//                       >
//                         Delete Video
//                       </button> */}
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={() => handleDeleteCourse(courseIndex)}
//                     className="mt-4 bg-red-500 text-white px-4 py-2 rounded lg:ml-[600px]"
//                   >
//                     Delete Course
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const AdminDashboard = () => {
  const [courseName, setCourseName] = useState('');
  const [modules, setModules] = useState([
    {
      name: '',
      chapters: [
        {
          name: '',
          pdf: null,
          video: null,
          pdfUploaded: false,
          videoUploaded: false,
          playgroundURL: '',
          quiz: [],
        },
      ],
    },
  ]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCourseNameChange = (e) => setCourseName(e.target.value);

  const handleModuleChange = (index, field, value) => {
    setModules((prevModules) => {
      const updatedModules = [...prevModules];
      updatedModules[index][field] = value;
      return updatedModules;
    });
  };

  const handleChapterChange = (moduleIndex, chapterIndex, field, value) => {
    setModules((prevModules) => {
      const updatedModules = [...prevModules];
      updatedModules[moduleIndex].chapters[chapterIndex][field] = value;
      return updatedModules;
    });
  };

  const handleFileChange = (moduleIndex, chapterIndex, fileType, file) => {
    if (file) {
      setModules((prevModules) => {
        const updatedModules = [...prevModules];
        updatedModules[moduleIndex].chapters[chapterIndex][fileType] = file;
        updatedModules[moduleIndex].chapters[chapterIndex][`${fileType}Uploaded`] = true;
        return updatedModules;
      });
    }
  };

  const addModule = () => {
    setModules((prevModules) => [
      ...prevModules,
      {
        name: '',
        chapters: [
          {
            name: '',
            pdf: null,
            video: null,
            pdfUploaded: false,
            videoUploaded: false,
            playgroundURL: '',
            quiz: [],
          },
        ],
      },
    ]);
  };

  const addChapter = (moduleIndex) => {
    setModules((prevModules) => {
      const updatedModules = [...prevModules];
      updatedModules[moduleIndex].chapters.push({
        name: '',
        pdf: null,
        video: null,
        pdfUploaded: false,
        videoUploaded: false,
        playgroundURL: '',
        quiz: [],
      });
      return updatedModules;
    });
  };

  // Function to process the XLS file and extract quiz data
  // const handleQuizXLSUpload = (moduleIndex, chapterIndex, file) => {
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const data = new Uint8Array(e.target.result);
  //     const workbook = XLSX.read(data, { type: 'array' });

  //     // Assuming the first sheet contains the quiz
  //     const sheetName = workbook.SheetNames[0];
  //     const worksheet = workbook.Sheets[sheetName];

  //     // Convert sheet to JSON format
  //     const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  //     const quizQuestions = jsonData.slice(1).map((row) => ({
  //       question: row[0],
  //       options: [row[1], row[2], row[3], row[4]],
  //       correctOption: parseInt(row[5]),
  //     }));

  //     // Update state with extracted quiz data
  //     setModules((prevModules) => {
  //       const updatedModules = [...prevModules];
  //       updatedModules[moduleIndex].chapters[chapterIndex].quiz = quizQuestions;
  //       return updatedModules;
  //     });
  //   };
  //   reader.readAsArrayBuffer(file);
  // };
  const handleQuizXLSUpload = (moduleIndex, chapterIndex, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
  
      // Assuming the first sheet contains the quiz
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
  
      // Convert sheet to JSON format
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
      const quizQuestions = jsonData.slice(1).map((row) => ({
        question: row[0],                 // Quiz question
        options: [row[1], row[2], row[3], row[4]], // Four options
        correctOption: row[5],            // Correct option (should be A, B, C, D)
      }));
  
      // Update state with extracted quiz data
      setModules((prevModules) => {
        const updatedModules = [...prevModules];
        updatedModules[moduleIndex].chapters[chapterIndex].quiz = quizQuestions;
        return updatedModules;
      });
    };
    reader.readAsArrayBuffer(file);
  };
  

  const handleCreateCourse = (e) => {
    e.preventDefault();
    setLoading(true);
    setCourses((prevCourses) => [...prevCourses, { name: courseName, modules }]);
    resetForm();
    setLoading(false);
  };

  const resetForm = () => {
    setCourseName('');
    setModules([{ name: '', chapters: [{ name: '', pdf: null, video: null, pdfUploaded: false, videoUploaded: false, playgroundURL: '', quiz: [] }] }]);
  };

  const viewFile = (file) => {
    const url = URL.createObjectURL(file);
    window.open(url, '_blank');
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-200">
      <h1 className="text-3xl font-bold text-blue-300 mb-6">Admin Dashboard</h1>
      <form onSubmit={handleCreateCourse} className="space-y-6">
        <div>
          <label className="block text-lg font-medium">Course Name</label>
          <input
            type="text"
            value={courseName}
            onChange={handleCourseNameChange}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
          />
        </div>
        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="mb-6">
            <label className="block text-lg font-medium">Module {moduleIndex + 1} Name</label>
            <input
              type="text"
              value={module.name}
              onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
            />
            {module.chapters.map((chapter, chapterIndex) => (
              <div key={chapterIndex} className="mt-6">
                <label className="block text-md font-medium">Chapter {chapterIndex + 1} Name</label>
                <input
                  type="text"
                  value={chapter.name}
                  onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'name', e.target.value)}
                  className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
                />

                <label className="block mt-4 text-md font-medium">Upload PDF</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange(moduleIndex, chapterIndex, 'pdf', e.target.files[0])}
                  className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
                />
                {chapter.pdfUploaded && (
                  <button
                    type="button"
                    onClick={() => viewFile(chapter.pdf)}
                    className="mt-2 text-blue-500 hover:underline"
                  >
                    View PDF
                  </button>
                )}

                <label className="block mt-4 text-md font-medium">Upload Video</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileChange(moduleIndex, chapterIndex, 'video', e.target.files[0])}
                  className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
                />
                 

                {chapter.videoUploaded && (
                  <div className="mt-2">
                    <video
                      controls
                      className="w-full max-w-md"
                      src={URL.createObjectURL(chapter.video)}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                <label className="block mt-4 text-md font-medium">Access Playground URL</label>
                <input
                  type="url"
                  value={chapter.playgroundURL}
                  onChange={(e) => handleChapterChange(moduleIndex, chapterIndex, 'playgroundURL', e.target.value)}
                  placeholder="Enter playground URL"
                  className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-200 p-2"
                />


                <label className="block mt-4 text-md font-medium">Upload Quiz (XLS)</label>
                <input
                  type="file"
                  accept=".xls,.xlsx"
                  onChange={(e) => handleQuizXLSUpload(moduleIndex, chapterIndex, e.target.files[0])}
                  className="mt-1 block w-full border-x-2 border-y-2 rounded-xl"
                />

                <div className="mt-6">
                  {chapter.quiz.length > 0 ? (
                    <ul className="list-disc list-inside text-gray-400">
                      {chapter.quiz.map((quiz, quizIndex) => (
                        <li key={quizIndex}>
                          {quiz.question} (Correct Option: {quiz.options[quiz.correctOption]})
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400">No quiz questions uploaded yet.</p>
                  )}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addChapter(moduleIndex)}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Chapter
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addModule}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Module
        </button>
        <br></br>
        <button
          type="submit"
          className={`mt-6 ${loading ? 'bg-gray-500' : 'bg-green-500'} text-white px-4 py-2 rounded lg: ml-[620px]`}
          disabled={loading}
        >
          {loading ? 'Creating Course...' : 'Create Course'}
        </button>
      </form>

      <div className="mt-12">
        <h1 className="text-2xl font-bold text-blue-200">Existing Courses</h1>
        <ul className="mt-4">
          {courses.map((course, index) => (
            <li key={index} className="bg-gray-800 p-4 mb-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-blue-300">{course.name}</h3>
              {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex}>
                  <h4 className="text-md font-semibold mt-4 text-blue-200">Module {moduleIndex + 1}: {module.name}</h4>
                  {module.chapters.map((chapter, chapterIndex) => (
                    <div key={chapterIndex} className="mt-2">
                      <h5 className="font-medium text-blue-100">Chapter {chapterIndex + 1}: {chapter.name}</h5>
                      {/* <p className="text-sm text-gray-400">
                        PDF: {chapter.pdf ? 'Uploaded' : 'Not uploaded'} | Video: {chapter.video ? 'Uploaded' : 'Not uploaded'}
                      </p> */}
                      {chapter.pdfUploaded && (
                        <div className='flex flex-wrap gap-4'>
                          <p>PDF Uploaded:</p>
                          <button
                            type="button"
                            onClick={() => viewFile(chapter.pdf)}
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                          >
                            View PDF
                          </button>
                          <button
                        type="button"
                        onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'pdf')}
                        className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Delete PDF
                      </button>
                        </div>
                      )}
                      {chapter.videoUploaded && (
                        <div>
                          <p>Video Uploaded:</p>
                          <video
                            controls
                            className="w-full max-w-md mt-2"
                            src={URL.createObjectURL(chapter.video)}
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDeleteFile(courseIndex, moduleIndex, chapterIndex, 'video')}
                        className="mt-2 bg-red-500 text-white px-4 py-2 rounded lg:ml-[150px]"
                      >
                        Delete Video
                      </button>
                      <br></br>
                      {/* <p>Playground URL: {chapter.playgroundURL || 'N/A'}</p> */}
                      {/* <p>Playground URL: <a href={chapter.playgroundURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{chapter.playgroundURL}</a></p> */}
                      {/* <p>Playground URL: <a href={chapter.playgroundURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{chapter.playgroundURL}</a></p> */}
                      <br></br>
                      <br></br>
                      <p>

  <a 
    href={chapter.playgroundURL} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="inline-block mt-2 bg-blue-500 text-white px-4 py-2 rounded "
  >
    Access Playground
  </a>
</p>
<br></br>

                      {/* <h6 className="text-sm mt-2 text-blue-100">Quiz Questions:</h6>
                      {chapter.quiz.length > 0 ? (
                        <ul className="list-disc list-inside text-gray-400">
                          {chapter.quiz.map((quiz, quizIndex) => (
                            <li key={quizIndex}>
                              {quiz.question} (Correct Option: {quiz.options[quiz.correctOption]})
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-400">No quiz questions added.</p>
                      )} */}
                     <div className="mt-6 text-white">
                     {chapter.quiz.length > 0 ? (
    <ul className=" list-inside text-white-400 ">
      {chapter.quiz.map((quiz, quizIndex) => (
        <li key={quizIndex}>
          <p className="font-semibold text-lg">
            Q{quizIndex + 1}: {quiz.question}
          </p>
          <ul className="pl-6 mt-2">
            {quiz.options.map((option, optionIndex) => (
              <li key={optionIndex} className="flex items-center">
                <span className="mr-2">
                  {String.fromCharCode(65 + optionIndex)}. {option}
                </span>
              </li>
            ))}
          </ul>
          {/* <p className="mt-2 text-green-400">
            Correct Option: {String.fromCharCode(65 + quiz.correctOption)}. {quiz.options[quiz.correctOption]}
          </p> */}
          <p className="mt-2 text-green-400">
          Correct Answer: {quiz.correctOption} 
                          </p>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-400">No quiz questions uploaded yet.</p>
  )}
</div>


                    </div>
                  ))}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
