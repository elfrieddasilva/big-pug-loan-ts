import {AgencyResultAggregate} from "../agencyResult/agency-result-aggregate";
import {expect} from "vitest";

describe('scoring', () => {
    it('0 Ko and 0 Warn and 95 points', () => {
        const agencyResultAggregate = AgencyResultAggregate.AgencyResultBuilder()
            .forPerson("Michael", "Plöd", "Kreuzstrasse 16", "80331", "München")
            .withPoints(95)
            .build();
        expect(agencyResultAggregate.isAcceptable()).toBe(true);
        expect(agencyResultAggregate.calculateScoringPoints()).toEqual(20);
    });

    it('0 Ko and 6 Warn and 95 points', () => {
        const agencyResultAggregate = AgencyResultAggregate.AgencyResultBuilder()
            .forPerson("Michael", "Plöd", "Kreuzstrasse 16", "80331", "München")
            .withPoints(95)
            .withWarning("1", "---")
            .withWarning("2", "---")
            .withWarning("3", "---")
            .withWarning("4", "---")
            .withWarning("5", "---")
            .withWarning("6", "---")
            .build();
        expect(agencyResultAggregate.isAcceptable()).toBe(false);
        expect(agencyResultAggregate.calculateScoringPoints()).toEqual(15);
    });

    it('0 Ko and 0 Warn and 83 points', () => {
        const agencyResultAggregate = AgencyResultAggregate.AgencyResultBuilder()
            .forPerson("Michael", "Plöd", "Kreuzstrasse 16", "80331", "München")
            .withPoints(83)
            .build();
        expect(agencyResultAggregate.isAcceptable()).toBe(true);
        expect(agencyResultAggregate.calculateScoringPoints()).toEqual(10);
    });

    it('0 Ko and 0 Warn and 90 points', () => {
        const agencyResultAggregate = AgencyResultAggregate.AgencyResultBuilder()
            .forPerson("Michael", "Plöd", "Kreuzstrasse 16", "80331", "München")
            .withPoints(90)
            .build();
        expect(agencyResultAggregate.isAcceptable()).toBe(true);
        expect(agencyResultAggregate.calculateScoringPoints()).toEqual(15);
    });

    it('0 Ko and 1 Warn and 90 points', () => {
        const agencyResultAggregate = AgencyResultAggregate.AgencyResultBuilder()
            .forPerson("Michael", "Plöd", "Kreuzstrasse 16", "80331", "München")
            .withPoints(90)
            .withWarning("00", "has only money for cheap pug food")
            .build();
        expect(agencyResultAggregate.isAcceptable()).toBe(true);
        expect(agencyResultAggregate.calculateScoringPoints()).toEqual(10);
    });

    it('1 Ko and 0 Warn and 90 points', () => {
        const agencyResultAggregate = AgencyResultAggregate.AgencyResultBuilder()
            .forPerson("Michael", "Plöd", "Kreuzstrasse 16", "80331", "München")
            .withPoints(90)
            .withKoCriteria("200", "is bankrupt")
            .build();
        expect(agencyResultAggregate.isAcceptable()).toBe(false);
        expect(agencyResultAggregate.calculateScoringPoints()).toEqual(0);
    });

});