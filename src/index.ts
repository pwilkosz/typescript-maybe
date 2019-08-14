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

    return repository.addCompany(<Company>{
        legalName: payload.legal_name,
        locality: payload.locality,
        lat: geolocationData.lat,
        lon: geolocationData.lon
    })
        .then((result: boolean) => {
            console.log("Successfully saved a company");

        }).catch(e => {
            console.log(e)
        });

})();


