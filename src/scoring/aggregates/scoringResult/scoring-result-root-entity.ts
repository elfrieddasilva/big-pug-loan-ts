import {ApplicationNumber} from "../../sharedmodel/application-number";
import {OverallScoringResult} from "./overall-scoring-result";
import {ScoringCalculationResults} from "./scoring-calculation-results";

export class ScoringResultRootEntity {
    readonly applicationNumber: ApplicationNumber;
    readonly overallScoringResult: OverallScoringResult;
    readonly scoringCalculationResults: ScoringCalculationResults;

    constructor(
        applicationNumber: ApplicationNumber,
        applicantScoringResult: number,
        financialSituationScoringResult: number,
        agencyScoringResult: number,
        noGoCriteriaPresent: boolean,
    ) {
        this.applicationNumber = applicationNumber;
        this.scoringCalculationResults = new ScoringCalculationResults(applicantScoringResult, financialSituationScoringResult, agencyScoringResult, noGoCriteriaPresent);
        this.overallScoringResult = this.scoringCalculationResults.calculateOverallResult();
    }
}