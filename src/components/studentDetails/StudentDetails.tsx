import React, { ChangeEvent } from "react";
import "./studentDetails.css";
interface StudentDetailsProps {
  studentDetails: {
    name: string;
    dob: string;
    age: string;
    location: string;
  };
  handleStudentDetailsChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const StudentDetails: React.FC<StudentDetailsProps> = ({
  studentDetails,
  handleStudentDetailsChange,
}) => {

  return (
    <div className="student_details_container">
      <h5 className="heading orange_color">
        <span className="blue_color">Student</span>{" "}
        <span className="orange_color">Details</span>{" "}
      </h5>
      <div className="student_detail">
        <label htmlFor="studentName">Student Name: </label>
        <input
          type="text"
          id="studentName"
          name="name"
          onChange={handleStudentDetailsChange}
          value={studentDetails?.name}
        />
      </div>
      <div className="student_detail">
        <label htmlFor="dob">Date Of Birth: </label>
        <input
          type="date"
          name="dob"
          id="dob"
          onChange={handleStudentDetailsChange}
          value={studentDetails?.dob}
        />
      </div>
      <div className="student_detail">
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={handleStudentDetailsChange}
          value={studentDetails?.age}
          disabled
        />
      </div>
      <div className="student_detail">
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleStudentDetailsChange}
          value={studentDetails?.location}
        />
      </div>
    </div>
  );
};
