export interface Data {
  id: string;
  university_name: string;
  university_required_plan?: string;
  university_insurance_cost?: string | number;
  highOOPCosts?: string;
}

export interface Plan {
  travelInsurance: number;
  wellnessProgram: number;
  healthInsurance?: number;
}

export interface DetailsToPrintInPdf {
  program: string;
  selectedUniversity: string;
  studentDetails: { name: string; dob: string; age: string; location: string };
  InsuranceDetails: Data | undefined;
  selectedAccrossAssistPlans: {
    travelInsurance: boolean;
    healthInsurance: boolean;
    wellnessProgram: boolean;
  };
}
