import React from 'react'

interface InsuranceDetailsProps {
    foundUniversity:any
}

export const InsuranceDetails:React.FC<InsuranceDetailsProps> = ({foundUniversity}) => {
  return (
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
  )
}
