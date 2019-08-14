import { Maybe } from "./Maybe";

export class Company {
    public constructor(
        public legalName: string,
        public locality: Maybe<string>,
        public lat: number,
        public lon: number,
    ) {}
}
