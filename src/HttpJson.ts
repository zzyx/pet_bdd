import type { Options, Method, GotRequestFunction } from 'got';
import got from 'got';

type ElementOf<T> = T extends (infer E)[] ? E : T;

export abstract class BaseHttpRequest {
    protected options: ElementOf<Parameters<GotRequestFunction>> = {
        http2: false,
    };

    public url(url: string): this {
        this.options.url = url;
        return this;
    }

    public method(method: Method): this {
        this.options.method = method;
        return this;
    }

    public responseType(responseType: Options['responseType']): this {
        this.options.responseType = responseType;
        return this;
    }

    public async send<T = any>() {
        try {
            return await got<T>(this.options as any);
        } catch (err) {
            throw err;
        }
    }
}

export class HttpJsonRequest extends BaseHttpRequest {
    constructor() {
        super();
        this.options = {
            ...this.options,
            responseType: 'json',
        };
    }

    public json(body: any): this {
        this.options.json = body;
        return this;
    }
}
