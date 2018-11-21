export class Environments {
    public static islocal = false;

    public static local = 'http://localhost:59227';

    public static production = 'http://llaneros-dev.azurewebsites.net';

    public static ENDPOINT = Environments.islocal
        ? Environments.local
        : Environments.production;
    public static API_ENDPOINT = `${Environments.ENDPOINT}/api`;
    public static SERVICES_ENDPOINT = `${Environments.ENDPOINT}/services`;
    public static ODATA_ENDPOINT = `${Environments.ENDPOINT}/odata`;
}
