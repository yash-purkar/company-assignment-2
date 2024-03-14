import React, { ChangeEvent, useMemo, useState } from "react";
import { data, plansForAge18To25, plansForAge26To30 } from "../../Data/data";
import { Data, Plan } from "../../types";
import "./home.css";

// 1838
export const Home = () => {
  const [program, setProgram] = useState("Select Program");
  const [selectedUniversity, setSelectedUniversity] =
    useState<string>("Select University");
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    dob: "",
    age: "",
    location: "",
  });
  const [selectedAccrossAssistPlans, setSelectedAcrossAssistPlans] = useState({
    travelInsurance: false,
    healthInsurance: false,
    wellnessProgram: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const universityNames = data.map((data: Data) => data.university_name);

  const foundUniversity = useMemo(() => {
    return data?.find(
      (item: Data) => item.university_name === selectedUniversity
    );
  }, [selectedUniversity]);

  const handleUniversitySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedUniversity(value);
  };

  // handle across assist plan
  const handleAcrossAssistPlans = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setSelectedAcrossAssistPlans((prev) => ({
      ...prev,
      [name]:
        !prev[
          name as "travelInsurance" | "healthInsurance" | "wellnessProgram"
        ],
    }));
  };

  // prices to show
  const pricesToShow: Plan | null =
    Number(studentDetails?.age) >= 18 && Number(studentDetails?.age) <= 25
      ? plansForAge18To25
      : Number(studentDetails?.age) >= 26 && Number(studentDetails?.age) <= 30
      ? plansForAge26To30
      : null;

  // program change
  const handleProgramChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProgram(e.target.value);
  };

  return (
    <div className="home">
      <div className="left_container">
        <div>
          <h5 className="heading orange_color">
            <span className="blue_color">Select</span>{" "}
            <span className="orange_color">Program</span>{" "}
          </h5>
          <select
            name="program"
            id=""
            className="program_dropdown"
            onChange={handleProgramChange}
            value={program}
          >
            <option value="Select Program" disabled selected>
              --Select Program--
            </option>
            <option value="STEM">STEM</option>
            <option value="MBA">MBA</option>
          </select>
        </div>
        <div>
          <h5 className="heading orange_color">
            <span className="blue_color">Select</span>{" "}
            <span className="orange_color">University</span>{" "}
          </h5>
          <select
            name="university"
            id=""
            className="university_dropdown"
            onChange={handleUniversitySelect}
            value={selectedUniversity}
          >
            <option value="Select University" disabled selected>
              --Select University--
            </option>
            {universityNames?.map((name, i) => (
              <option value={name} key={i}>
                {name}
              </option>
            ))}
          </select>
        </div>
        {/* student details */}
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
              onChange={handleChange}
              value={studentDetails?.name}
            />
          </div>
          <div className="student_detail">
            <label htmlFor="dob">Date Of Birth: </label>
            <input
              type="date"
              name="dob"
              id="dob"
              onChange={handleChange}
              value={studentDetails?.dob}
            />
          </div>
          <div className="student_detail">
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              name="age"
              id="age"
              onChange={handleChange}
              value={studentDetails?.age}
            />
          </div>
          <div className="student_detail">
            <label htmlFor="location">Location: </label>
            <input
              type="text"
              name="location"
              id="location"
              onChange={handleChange}
              value={studentDetails?.location}
            />
          </div>
        </div>
      </div>
      {/* Insurance details */}
      <div className="insurance_details_container">
        <div>
          <h5 className="heading orange_color">
            <span className="blue_color">Insurance</span>{" "}
            <span className="orange_color">Details</span>{" "}
          </h5>
          {foundUniversity && (
            <small>({foundUniversity?.university_name})</small>
          )}
        </div>
        <>
          {foundUniversity ? (
            <div className="insurance_plan_details">
              <p>
                Plan Required as per university:{" "}
                <span className="orange_color bold">
                  {foundUniversity?.university_required_plan ?? "Not Available"}
                </span>
              </p>
              <p>
                University Insurance Cost -{" "}
                <span className="orange_color bold">
                  {foundUniversity?.university_insurance_cost ??
                    "Not Available"}
                </span>
              </p>
            </div>
          ) : (
            <small className="warning_message">
              Select university to see Insurance Details
            </small>
          )}
        </>
      </div>
      <div className="across_assist_plans">
        <h5 className="heading orange_color">
          <span className="blue_color">Across</span>{" "}
          <span className="orange_color">Assist Plans</span>{" "}
        </h5>

        <div className="plans_container">
          <div className="across_assist_single_plan">
            <input
              type="checkbox"
              checked={selectedAccrossAssistPlans.healthInsurance}
              name="healthInsurance"
              id="health_insurance"
              onChange={handleAcrossAssistPlans}
            />
            <label htmlFor="health_insurance" className="cursor_pointer">
              Health Insurance
            </label>
            {pricesToShow && <p>${pricesToShow?.healthInsurance ?? "NA"}</p>}
          </div>
          <div className="across_assist_single_plan">
            <input
              type="checkbox"
              name="travelInsurance"
              checked={selectedAccrossAssistPlans.travelInsurance}
              id="travel_insurance"
              onChange={handleAcrossAssistPlans}
            />
            <label htmlFor="travel_insurance" className="cursor_pointer">
              Travel Insurance
            </label>
            {pricesToShow && <p>${pricesToShow?.travelInsurance ?? "NA"}</p>}
          </div>
          <div className="across_assist_single_plan">
            <input
              type="checkbox"
              name="wellnessProgram"
              id="wellness_program"
              onChange={handleAcrossAssistPlans}
              checked={selectedAccrossAssistPlans.wellnessProgram}
            />
            <label htmlFor="wellness_program" className="cursor_pointer">
              Wellness Program
            </label>
            {pricesToShow && <p>$50</p>}
          </div>
          {!pricesToShow && (
            <small className="warning_message">
              Enter Age Range between 18-25 | 26-30
            </small>
          )}
        </div>
      </div>
    </div>
  );
};
