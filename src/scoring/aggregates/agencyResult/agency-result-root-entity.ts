import {PersonId} from "../../sharedmodel/personId";
import {KoCriteria} from "./ko-criteria";
import {WarningMessage} from "./warning-message";

export class AgencyResultRootEntity {
    readonly id: PersonId;
    readonly points: number;
    private readonly koCriteria: Set<KoCriteria>;
    private readonly warningMessages: Set<WarningMessage>;

    constructor(id: PersonId, points: number) {
        this.id = id;
        this.points = points;
        this.koCriteria = new Set<KoCriteria>();
        this.warningMessages = new Set<WarningMessage>();
    }

    getKoCriteria(): Set<KoCriteria> {
        return this.koCriteria;
    }

    getWarningMessages(): Set<WarningMessage> {
        return this.warningMessages;
    }

    addAllKoCriteria(koCriteria: Set<KoCriteria>): void {
        koCriteria.forEach((criteria: KoCriteria) => {
            this.koCriteria.add(criteria);
        })
    }

    addAllWarningMessage(warningMessages: Set<WarningMessage>): void {
        warningMessages.forEach((message: WarningMessage) => {
            this.warningMessages.add(message);
        })
    }

    isAcceptable(): boolean {
        if (this.koCriteria.size > 0) {
            return false;
        } else return this.warningMessages.size <= 5;
    }

    calculateScoringPoints(): number {
        let result = 0;
        if (this.koCriteria.size > 0) {
            return result;
        }
        if (this.warningMessages.size === 0) {
            result += 5;
        }
        if (this.points > 90) {
            result += 15;
        } else if (this.points > 85) {
            result += 10;
        } else if (this.points > 80) {
            result += 5;
        }
        return result;
    }

}