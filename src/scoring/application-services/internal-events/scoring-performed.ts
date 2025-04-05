import {ApplicationNumber} from "../../sharedmodel/application-number";
import {PersonId} from "../../sharedmodel/personId";

export class ScoringPerformed {
    private applicationNumber: ApplicationNumber;
    private personId: PersonId;
    private scoreColor: string;
    private points: number;

    constructor(applicationNumber?: string, personId?: PersonId, scoreColor?: string, points?: number) {
        if (applicationNumber) {
            this.applicationNumber = new ApplicationNumber(applicationNumber);
        }
        if (personId) {
            this.personId = personId;
        }
        if (scoreColor) {
            this.scoreColor = scoreColor;
        }
        if (points) {
            this.points = points;
        }
    }

    getApplicationNumber() {
        return this.applicationNumber;
    }

    getPersonId() {
        return this.personId;
    }

    getScoreColor() {
        return this.scoreColor;
    }

    getPoints() {
        return this.points;
    }

}