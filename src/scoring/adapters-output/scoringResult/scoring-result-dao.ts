import {ScoringResultEntity} from "./scoring-result-entity";

export interface ScoringResultDao {
    findByApplicationNumber(applicationNumber: string): ScoringResultEntity;
}