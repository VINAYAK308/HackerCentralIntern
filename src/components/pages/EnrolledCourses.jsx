import React from 'react';

const EnrolledCourses = () => {
  const courses = ['React Basics', 'Advanced JavaScript', 'Cybersecurity 101'];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index} className="border-b py-2">{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default EnrolledCourses;
