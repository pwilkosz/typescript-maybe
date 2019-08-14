export class GeoLocationService {
    public constructor() {
    }

    public getGeolocation(locality?: string): Promise<{lat: number, lon:number} | undefined> {
        return Promise.resolve(undefined);

    }

}
