import React, { ChangeEvent } from "react";
import { Plan } from "../../types";

interface AcrossAssistPlansProps {
  selectedAccrossAssistPlans: {
    travelInsurance: boolean;
    healthInsurance: boolean;
    wellnessProgram: boolean;
  };
  handleAcrossAssistPlans: (e: ChangeEvent<HTMLInputElement>) => void;
  pricesToShow: Plan | null;
}

export const AcrossAssistPlans: React.FC<AcrossAssistPlansProps> = ({
  selectedAccrossAssistPlans,
  handleAcrossAssistPlans,
  pricesToShow,
}) => {
  return (
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
  );
};
