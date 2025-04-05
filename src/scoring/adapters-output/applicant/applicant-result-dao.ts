import {ApplicantResultProjection} from "./applicant-result-projection";

export interface ApplicantResultDao {
    findByApplicationNumber(applicationNumber: string): ApplicantResultProjection;
    findByPersonId(personId: string): ApplicantResultProjection;
}