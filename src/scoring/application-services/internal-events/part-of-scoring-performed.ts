import {ApplicationNumber} from "../../sharedmodel/application-number";
import {PersonId} from "../../sharedmodel/personId";

export class PartOfScoringPerformed {
    private applicationNumber: ApplicationNumber;
    private personId: PersonId;
    private cluster: string;

    constructor(applicationNumber?: string, personId?: PersonId, cluster?: string) {
        if (applicationNumber) {
            this.applicationNumber = new ApplicationNumber(applicationNumber);
        }
        if (personId) {
            this.personId = personId;
        }
        if (cluster) {
            this.cluster = cluster;
        }
    }

    getApplicationNumber() {
        return this.applicationNumber;
    }

    getPersonId() {
        return this.personId;
    }

    getCluster() {
        return this.cluster;
    }

}