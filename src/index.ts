import { CompanyRegisterInterface } from "./CompanyRegisterInterface";
import { CompanyRepository } from "./CompanyRepository";
import { Company } from "./Company";
import { GeoLocationService } from "./GeoLocationService";
import { Maybe } from "./Maybe";

const repository = new CompanyRepository();
const geoLocationService = new GeoLocationService();

const payload = <CompanyRegisterInterface>{
    legal_name: "PIOTROSZ dystrybucja niszczarek",
};

(async () => {

    const geolocationData = Maybe.from(payload)
        .map(payload => payload.locality)
        .map(async (locality) => await geoLocationService.getGeolocation(locality))
        .getValueOr({lat: null, lon: null});


    return repository.addCompany(new Company(
        payload.legal_name,
        Maybe.from(payload.locality),
        geolocationData.lat,
        geolocationData.lon
    ))
        .then((result: boolean) => {
            console.log("Successfully saved a company");

        }).catch(e => {
            console.log(e)
        });

})();


