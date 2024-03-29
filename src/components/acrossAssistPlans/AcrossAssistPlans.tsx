import React, { ChangeEvent } from "react";
import { type Plan } from "../../types";
import "./acrossAssistPlans.css";
interface AcrossAssistPlansProps {
  selectedAccrossAssistPlans: {
    travelInsurance: boolean;
    healthInsurance: boolean;
    wellnessProgram: boolean;
  };
  handleAcrossAssistPlans: (e: ChangeEvent<HTMLInputElement>) => void;
  pricesToShow: Plan | null;
  studentAge: number | string;
}

export const AcrossAssistPlans: React.FC<AcrossAssistPlansProps> = ({
  selectedAccrossAssistPlans,
  handleAcrossAssistPlans,
  pricesToShow,
  studentAge,
}) => {
  let totalAmount: number = 0;
  // It calculates the sum of selected plans.
  selectedAccrossAssistPlans.travelInsurance &&
    (totalAmount += pricesToShow?.travelInsurance ?? 0);
  selectedAccrossAssistPlans.wellnessProgram &&
    (totalAmount += pricesToShow?.wellnessProgram ?? 0);
  selectedAccrossAssistPlans.healthInsurance && (totalAmount += 50);

  // disable checkboxes if age is not there or not in between 18-25 | 26-30.
  let isDisabled = true;
  if (
    (Number(studentAge) >= 18 && Number(studentAge) <= 25) ||
    (Number(studentAge) >= 26 && Number(studentAge) <= 30)
  )
    isDisabled = false;

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
            disabled={isDisabled}
          />
          <label htmlFor="health_insurance" className="cursor_pointer">
            Health Insurance
          </label>
          {pricesToShow && <p>$50</p>}
        </div>
        <div className="across_assist_single_plan">
          <input
            type="checkbox"
            name="travelInsurance"
            checked={selectedAccrossAssistPlans.travelInsurance}
            id="travel_insurance"
            onChange={handleAcrossAssistPlans}
            disabled={isDisabled}
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
            disabled={isDisabled}
          />
          <label htmlFor="wellness_program" className="cursor_pointer">
            Wellness Program
          </label>
          {pricesToShow && <p>${pricesToShow?.wellnessProgram ?? "NA"}</p>}
        </div>
        {!pricesToShow && (
          <small className="warning_message">
            Age Range should be in between 18-25 | 26-30
          </small>
        )}
        {(selectedAccrossAssistPlans.healthInsurance ||
          selectedAccrossAssistPlans.travelInsurance ||
          selectedAccrossAssistPlans.wellnessProgram) && (
          <h3 className="heading total_price">
            <span className="blue_color">Total</span>{" "}
            <span className="orange_color">Amount</span> : ${totalAmount}
          </h3>
        )}
      </div>
    </div>
  );
};
