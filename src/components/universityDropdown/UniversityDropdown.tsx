import React, { ChangeEvent } from "react";
interface UniversityDropdownProps {
  handleUniversitySelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  universityNames: string[];
  selectedUniversity: string;
}
export const UniversityDropdown: React.FC<UniversityDropdownProps> = ({
  handleUniversitySelect,
  universityNames,
  selectedUniversity,
}) => {
  return (
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
  );
};
