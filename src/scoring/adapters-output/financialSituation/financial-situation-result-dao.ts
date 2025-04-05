import {FinancialSituationResultProjection} from "./financial-situation-result-projection";

export interface FinancialSituationResultDao {
    findByApplicationNumber(applicationNumber: string): FinancialSituationResultProjection;
}