import {DetailedScoringResults} from "./detailed-scoring-results";

export class ScoringResultEntity {
    id!: number;
    applicationNumber!: string;
    scorePoints!: number;
    detailedScoringResults!: DetailedScoringResults;
}