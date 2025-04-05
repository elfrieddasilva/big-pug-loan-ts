import {OverallScoringResult} from "./overall-scoring-result";
import {ScoringColor} from "./scoring-color";

export class ScoringCalculationResults {
    readonly applicantScoringResult: number;
    readonly financialSituationScoringResult: number;
    readonly agencyScoringResult: number;
    readonly noGoCriteriaPresent: boolean;

    constructor(
        applicantScoringResult: number,
        financialSituationScoringResult: number,
        agencyScoringResult: number,
        noGoCriteriaPresent: boolean
    ) {
        this.applicantScoringResult = applicantScoringResult;
        this.financialSituationScoringResult = financialSituationScoringResult;
        this.agencyScoringResult = agencyScoringResult;
        this.noGoCriteriaPresent = noGoCriteriaPresent;
    }

    calculateOverallResult(): OverallScoringResult {
        console.log(`Applicant Result: ${this.applicantScoringResult}`);
        console.log(`FinancialSituation Result: ${this.financialSituationScoringResult}`);
        console.log(`CreditAgency result: ${this.agencyScoringResult}`);
        const overallPoints = this.applicantScoringResult + this.financialSituationScoringResult + this.agencyScoringResult;
        let color: ScoringColor;

        if (this.noGoCriteriaPresent) {
            color = ScoringColor.RED;
        } else {
            if (overallPoints > 40) {
                color = ScoringColor.GREEN;
            }
            color = ScoringColor.RED;
        }
        return new OverallScoringResult(overallPoints, color);
    }

}