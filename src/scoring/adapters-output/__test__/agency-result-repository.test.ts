import {AgencyResultAggregate} from "../../aggregates/agencyResult/agency-result-aggregate";
import {AgencyResultRepository} from "../../application-services/repositories/agency-result-repository";
import {MockAgencyRepository} from "./mock-agency-repository";

describe('AgencyResultRepository', () => {
    let repository: AgencyResultRepository;
    let aggregate: AgencyResultAggregate;

    beforeEach(() => {
        repository = new MockAgencyRepository();
    })

    it('should save', () => {
        aggregate = AgencyResultAggregate.AgencyResultBuilder()
            .forPerson("Michael", "Plöd", "teststr", "40789", "Testcity")
            .withPoints(100)
            .withWarning("234", "test")
            .withKoCriteria("123", "test test")
            .withKoCriteria("342", "testing")
            .build();
        repository.save(aggregate);

        const resultAggregate = repository.retrieve(aggregate.getPersonId());

        expect(resultAggregate.getPersonId().toString()).toEqual(aggregate.getPersonId().toString());

    });
});