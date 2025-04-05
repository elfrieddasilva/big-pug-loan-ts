import {AgencyResultProjection} from "../agencyResult/agency-result-projection";
import {AgencyResultRepository} from "../../application-services/repositories/agency-result-repository";
import {AgencyResultAggregate} from "../../aggregates/agencyResult/agency-result-aggregate";
import {PersonId} from "../../sharedmodel/personId";

export class MockAgencyRepository implements AgencyResultRepository {
    private agencyResults: AgencyResultAggregate[] = [];
    retrieve(personId: PersonId): AgencyResultAggregate {
       const agencyResult = this.agencyResults.find(agencyResult => agencyResult.getPersonId() === personId);
       if (!agencyResult) {
           throw new Error(`Agency result not found for personId ${personId}`);
       }
       return agencyResult;
    }


    save(agencyResult: AgencyResultAggregate): void {
        this.agencyResults.push(agencyResult);
    }



}