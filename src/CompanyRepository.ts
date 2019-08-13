import { Company } from "./Company";

export class CompanyRepository {
    public addCompany(company: Company): Promise<boolean> {
        return Promise.resolve(true);
    }
}
