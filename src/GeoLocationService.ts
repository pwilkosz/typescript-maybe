export class GeoLocationService {
    public constructor() {
    }

    public getGeolocation(locality: string): Promise<any> {
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
