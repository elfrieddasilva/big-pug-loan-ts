import {PersonId} from "../../sharedmodel/personId";
import {FinancialSituationAggregate} from "../../aggregates/financialSituation/financial-situation-aggregate";

export interface FinancialSituationResultRepository {
    save(financialSituationAggregate: FinancialSituationAggregate): void;

    retrieve(personId: PersonId): FinancialSituationAggregate;
}