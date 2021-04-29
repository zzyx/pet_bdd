import { Response } from 'got';

export class BaseEndpoint {
    readonly baseUrl: string;
    response: Response;

    constructor(options: { baseUrl: string }) {
        this.baseUrl = options.baseUrl;
    }
}
