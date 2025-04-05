import {PersonId} from "../../sharedmodel/personId";
import {ScoringResultAggregate} from "../../aggregates/scoringResult/scoring-result-aggregate";

export interface ScoringResultRepository {
    save(scoringResultAggregate: ScoringResultAggregate): void;

    retrieve(personId: PersonId): ScoringResultAggregate;
}