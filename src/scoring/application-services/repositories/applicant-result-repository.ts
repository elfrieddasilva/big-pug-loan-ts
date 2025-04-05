import {ApplicantAggregate} from "../../aggregates/applicant/applicant-aggregate";
import {ApplicationNumber} from "../../sharedmodel/application-number";
import {PersonId} from "../../sharedmodel/personId";

export interface ApplicantResultRepository {
    save(applicantAggregate: ApplicantAggregate): void;

    retrieve(applicationNumber: ApplicationNumber): ApplicantAggregate;

    retrieve(personId: PersonId): ApplicantAggregate;
}