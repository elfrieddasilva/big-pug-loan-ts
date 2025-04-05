import {AgencyResultRootEntity} from "./agency-result-root-entity";
import {PersonId} from "../../sharedmodel/personId";
import {KoCriteria} from "./ko-criteria";
import {WarningMessage} from "./warning-message";
import {IllegalArgumentException} from "../../../utils/illegal-argument-exception";

export class AgencyResultAggregate {
    private readonly agencyResultRootEntity: AgencyResultRootEntity;

    getAgencyResultRootEntity(): AgencyResultRootEntity {
        return this.agencyResultRootEntity;
    }

    constructor(builder: AgencyResultBuilder) {
        this.agencyResultRootEntity = new AgencyResultRootEntity(builder.personId, builder.points);
        this.agencyResultRootEntity.addAllKoCriteria(builder.koCriteria);
        this.agencyResultRootEntity.addAllWarningMessage(builder.warningMessages);
    }

    getPersonId(): PersonId {
        return this.agencyResultRootEntity.id;
    }
    isAcceptable(): boolean {
        return this.agencyResultRootEntity.isAcceptable();
    }
    calculateScoringPoints() {
        return this.agencyResultRootEntity.calculateScoringPoints();
    }
    static AgencyResultBuilder() {
        return new AgencyResultBuilder();
    }
}

export class AgencyResultBuilder {
    personId!: PersonId;
    points!: number;
    readonly koCriteria: Set<KoCriteria>;
    readonly warningMessages: Set<WarningMessage>;

    constructor() {
        this.koCriteria = new Set<KoCriteria>();
        this.warningMessages = new Set<WarningMessage>();
    }

    withPoints(points: number) {
        if (this.points > 0) {
            throw new IllegalArgumentException("You have already set the points");
        }
        if(points <= 0 || points > 100) {
            throw new IllegalArgumentException("The points you set must be > 0 and <= 100 (any number between 1 and 100)");
        }
        this.points = points;
        return this;
    }

    withWarning(key: string, message: string) {
        this.warningMessages.add(new WarningMessage(key, message));
        return this;
    }

    withKoCriteria(key: string, message: string) {
        this.koCriteria.add(new KoCriteria(key, message));
        return this;
    }

    setPersonId(personId: PersonId) {
        this.personId = personId;
        return this;
    }

    forPerson(
        firstName: string,
        lastName: string,
        street: string,
        postCode: string,
        city: string
    ) {
        if(this.personId !== null && this.personId !== undefined) {
            throw new IllegalArgumentException("You have already set a person");
        }
        this.personId = PersonId.PersonIdBuilder(firstName, lastName)
            .setCity(city)
            .setStreet(street)
            .setPostCode(postCode)
            .build();
        return this;
    }

    build() : AgencyResultAggregate {
        if (this.points <= 0) {
            throw new IllegalArgumentException("Please set points > 0 with the withPoints method");
        }
        if (this.personId === null) {
            throw new IllegalArgumentException("Please set a person with the forPerson method");
        }
        return new AgencyResultAggregate(this);
    }

}