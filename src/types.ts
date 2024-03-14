export interface Data {
    id: string;
    university_name: string;
    university_required_plan?: string;
    university_insurance_cost?: string | number;
    highOOPCosts?: string;
  }

 export interface Plan {
    travelInsurance: number;
    healthInsurance: number;
    wellnessProgram?: number;
  }
  