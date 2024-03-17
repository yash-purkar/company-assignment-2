import React, { ChangeEvent } from 'react'
interface ProgramDropdownProps {
    handleProgramChange : (e: ChangeEvent<HTMLSelectElement>) => void;
    program:string
}
export const ProgramDropdown:React.FC<ProgramDropdownProps> = ({handleProgramChange,program}) => {
  return (
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
  )
}
