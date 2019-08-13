import { CompanyRegisterInterface } from "./CompanyRegisterInterface";
import { CompanyRepository } from "./CompanyRepository";
import { Company } from "./Company";

const repository = new CompanyRepository();

const payload = <CompanyRegisterInterface>{
    legal_name: "PIOTROSZ dystrybucja niszczarek",
};

const company = new Company(
    payload.legal_name,
    payload.coordinates.lat,
    payload.coordinates.lon
);

(() => {
    return repository.addCompany(company)
        .then((result: boolean) => {
            console.log("Successfully saved a company");

        }).catch(e => {
            console.log(e)
        });

})();


