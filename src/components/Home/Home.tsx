import React, { ChangeEvent, useMemo, useState } from "react";
import { data, plansForAge18To25, plansForAge26To30 } from "../../Data/data";
import { Data, Plan } from "../../types";
import "./home.css";
import { StudentDetails } from "../studentDetails/StudentDetails";
import { InsuranceDetails } from "../insuranceDetails/InsuranceDetails";
import { AcrossAssistPlans } from "../acrossAssistPlans/AcrossAssistPlans";
import { ProgramDropdown } from "../programDropdown/ProgramDropdown";
import { UniversityDropdown } from "../universityDropdown/UniversityDropdown";
import { PdfComponent } from "../PdfComponent/PdfComponent";

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

  // It handles student details change
  const handleStudentDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentDetails((prev) => ({ ...prev, [name]: value }));
  };

  // getting all names of universities
  const universityNames = data.map((data: Data) => data.university_name);

  // It find the university if user selects the university name from dropdown.
  const foundUniversity = useMemo(() => {
    return data?.find(
      (item: Data) => item.university_name === selectedUniversity
    );
  }, [selectedUniversity]);

  // It handles university select change
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
    <>
    <div className="home">
      <div className="left_container">
        {/* program dropdown */}
        <ProgramDropdown
          handleProgramChange={handleProgramChange}
          program={program}
        />
        {/* university select pdropdown */}
        <UniversityDropdown
          universityNames={universityNames}
          handleUniversitySelect={handleUniversitySelect}
          selectedUniversity={selectedUniversity}
        />
        {/* student details */}
        <StudentDetails
          studentDetails={studentDetails}
          handleStudentDetailsChange={handleStudentDetailsChange}
        />
      </div>

      {/* insurance details */}
      <InsuranceDetails foundUniversity={foundUniversity} />

      {/* across assist plans */}
      <AcrossAssistPlans
        selectedAccrossAssistPlans={selectedAccrossAssistPlans}
        handleAcrossAssistPlans={handleAcrossAssistPlans}
        pricesToShow={pricesToShow}
      />

    </div>
      {/* Pdf download */}
      <PdfComponent/>
    </>
  );
};
