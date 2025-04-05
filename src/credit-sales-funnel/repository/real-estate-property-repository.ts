import {RealEstateProperty} from "../model/realEstate/real-estate-property";


export interface RealEstatePropertyRepository {
    findByApplicationNumber(applicationNumber: string): RealEstateProperty;
}