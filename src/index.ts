import { CompanyRegisterInterface } from "./CompanyRegisterInterface";
import { CompanyRepository } from "./CompanyRepository";
import { Company } from "./Company";
import { GeoLocationService } from "./GeoLocationService";

const repository = new CompanyRepository();
const geoLocationService = new GeoLocationService();

const payload = <CompanyRegisterInterface>{
    legal_name: "PIOTROSZ dystrybucja niszczarek",
};

(async () => {
    const geolocationData = await geoLocationService.getGeolocation(payload.locality);

    return repository.addCompany(new Company(
        payload.legal_name,
        payload.locality,
        geolocationData.lat,
        geolocationData.lon
    ))
        .then((result: boolean) => {
            console.log("Successfully saved a company");

        }).catch(e => {
            console.log(e)
        });

})();


