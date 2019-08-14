export class GeoLocationService {
    public constructor() {
    }

    public getGeolocation(locality?: string): Promise<{lat: number, lon:number} | undefined> {
        if (locality) {
            return Promise.resolve({
                lat: 1,
                lon: 2
            });
        } else {
            return Promise.resolve(undefined);
        }

    }

}
