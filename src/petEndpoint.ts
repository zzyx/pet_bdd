import { HttpJsonRequest } from './HttpJson';
import { BaseEndpoint } from './BaseEndpoint';
import { baseUrl } from '../config';

export type Tag = {
    id: number;
    name: string;
};

export type Category = Tag;

export type Pet = {
    id?: number | string;
    category?: Category[];
    name: string;
    photoUrls?: string[];
    tags?: Tag[];
    status?: string;
};

export class PetEndpoint extends BaseEndpoint {
    endpoint: string;
    body: Pet;
    constructor() {
        super({ baseUrl: baseUrl });
        this.endpoint = `${this.baseUrl}/pet`;
    }

    async getPetById(id: number | string): Promise<Pet> {
        this.response = (await new HttpJsonRequest().url(`${this.endpoint}/${id}`).send()).body;
        this.body = this.response.body as Pet;
        return this.body;
    }

    async createNewPet(pet: Pet) {
        this.response = await new HttpJsonRequest().url(this.endpoint).method('POST').json(pet).send<Pet>();
        this.body = this.response.body as Pet;
        return this.response;
    }
}
