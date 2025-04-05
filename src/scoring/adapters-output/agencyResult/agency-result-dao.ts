import {AgencyResultProjection} from "./agency-result-projection";

export interface AgencyResultDao  {
    findByPersonId(personId: string): AgencyResultProjection;
    save(agencyResult: AgencyResultProjection): void;
}