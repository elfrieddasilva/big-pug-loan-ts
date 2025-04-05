import {ScoringResultRootEntity} from "./scoring-result-root-entity";
import {ApplicationNumber} from "../../sharedmodel/application-number";

export class ScoringResultAggregate {
    readonly rootEntity: ScoringResultRootEntity;
    constructor(builder: Builder) {
        this.rootEntity = new ScoringResultRootEntity(builder.applicationNumber,
            builder.applicantScoringResult,
            builder.financialSituationScoringResult,
            builder.agencyScoringResult,
            builder.noGoCriteriaPresent);
    }

    static Builder(applicationNumber: ApplicationNumber) {
        return new Builder(applicationNumber);
    }

}

class Builder {
    readonly applicationNumber: ApplicationNumber;
    applicantScoringResult: number;
    financialSituationScoringResult: number;
    agencyScoringResult: number;
    noGoCriteriaPresent: boolean;

    constructor(applicationNumber: ApplicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    setApplicantScoringResult(applicantScoringResult: number) {
        this.applicantScoringResult = applicantScoringResult;
        return this;
    }

    setFinancialSituationScoring(financialSituationScoringResult: number) {
        this.financialSituationScoringResult = financialSituationScoringResult;
        return this;
    }

    setAgencyScoringResult(agencyScoringResult: number) {
        this.agencyScoringResult = agencyScoringResult;
        return this;
    }

    setNoGoCriteriaPresent(noGoCriteriaPresent: boolean) {
        this.noGoCriteriaPresent = noGoCriteriaPresent;
        return this;
    }
    build(): ScoringResultAggregate {
        return new ScoringResultAggregate(this);
    }

}