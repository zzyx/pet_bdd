import { StepDefinitions, loadFeatures, autoBindSteps } from 'jest-cucumber';
import { Pet, PetEndpoint } from '../src/petEndpoint';

export const sharedSteps: StepDefinitions = ({ given, and, when, then }) => {
    let petEndpoint: PetEndpoint;
    beforeAll(async () => {
        petEndpoint = await new PetEndpoint();
    });

    when(/^I create pet with name (.*)$/, async (petName: string) => {
        const body: Pet = { name: petName };
        await petEndpoint.createNewPet(body);
    });

    when(/^I create pet without name (.*)$/, async () => {
        const body: Pet = { name: '' };
        await petEndpoint.createNewPet(body);
    });

    then(/^I see status code is (.*)$/, (statusCode: number) => {
        expect(petEndpoint.response.statusCode).toEqual(+statusCode);
    });

    and(/^I see pet created with correct name (.*)$/, (petName: number) => {
        const pet = petEndpoint.body;
        expect(pet.name).toEqual(petName);
    });
    and(/^I see id of created pet$/, () => {
        const pet = petEndpoint.body;
        expect(pet.id).not.toBeUndefined();
    });

    and(/^I see tags are empty$/, () => {
        const pet = petEndpoint.body;
        expect(pet.tags).toEqual([]);
    });
};

const features = loadFeatures('./features/**/*.feature');
autoBindSteps(features, [sharedSteps]);
