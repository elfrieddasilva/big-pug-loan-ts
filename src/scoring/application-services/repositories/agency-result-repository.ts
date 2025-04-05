import {AgencyResultAggregate} from "../../aggregates/agencyResult/agency-result-aggregate";
import {PersonId} from "../../sharedmodel/personId";

export interface AgencyResultRepository {
    save(agencyResultAggregate: AgencyResultAggregate): void;

    retrieve(personId: PersonId): AgencyResultAggregate;
}