import {AgencyMessage} from "./agency-message";

export class AgencyResultProjection {
    id!: number;
    personId!: string;
    points!: number;
    koCriteria: Set<AgencyMessage> = new Set();
    warnings: Set<AgencyMessage> = new Set();


    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }


    getPersonId(): string {
        return this.personId;
    }

    setPersonId(personId: string): void {
        this.personId = personId;
    }


    getPoints(): number {
        return this.points;
    }

    setPoints(points: number): void {
        this.points = points;
    }


    getKoCriteria(): Set<AgencyMessage> {
        return this.koCriteria;
    }

    setKoCriteria(koCriteria: Set<AgencyMessage>): void {
        this.koCriteria = koCriteria;
    }


    getWarnings(): Set<AgencyMessage> {
        return this.warnings;
    }

    setWarnings(warnings: Set<AgencyMessage>): void {
        this.warnings = warnings;
    }


    addWarning(agencyMessage: AgencyMessage): void {
        this.warnings.add(agencyMessage);
    }

    addKoCriteria(agencyMessage: AgencyMessage): void {
        this.koCriteria.add(agencyMessage);
    }
}

