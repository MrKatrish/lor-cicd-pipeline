import { render, screen } from '@testing-library/react';
import Character from '../components/Character';

const samwiseGamgee = {
    "_id": "5cd99d4bde30eff6ebccfd0d",
    "height": "1.22m (4'0\")",
    "race": "Hobbit",
    "gender": "Male",
    "birth": "April 6 ,2980",
    "spouse": "Rosie Cotton",
    "death": "Still alive, after going to the ,Undying Lands, in ,FO 61",
    "realm": "",
    "hair": "Blond (movie)",
    "name": "Samwise Gamgee",
    "wikiUrl": "http://lotr.wikia.com//wiki/Samwise_Gamgee",
    "imgUrl": "https://www.frontporchrepublic.com/wp-content/uploads/2011/05/Samwise-Gamgee.jpg"
};

it('Character Component Renders Without Error', () => {
    render(<Character />);
});

describe('Character Component Content Structure', () => {

    it("Renders an H2 for the Character's Name", () => {
        render(<Character />);
        const characterHeading = screen.getByRole('heading', { level: 2 });

        expect(characterHeading).toBeDefined();
    });

    it("Renders a img for the Character", () => {
        render(<Character />);
        const charImg = screen.getByRole('img');

        expect(charImg).toBeDefined();
    });

    it("Renders a list for the Character", () => {
        render(<Character />);
        const charList = screen.getByRole("list");

        expect(charList).toBeDefined();
    });

    it("Renders all list items for the Character", () => {
        render(<Character />);
        const items = screen.getAllByRole("listitem");

        expect(items.length).toBe(5);
    });

    it("Renders a list item for the Character's DOB", () => {
        render(<Character />);
        const charDob = screen.getByText(/Date of Birth:/i);

        expect(charDob).toBeDefined();
    });

    it("Renders a list item for the Character's DOD", () => {
        render(<Character />);
        const charDeath = screen.getByText(/Date of Death:/i);

        expect(charDeath).toBeDefined();
    });

    it("Renders a list item for the Character's Race", () => {
        render(<Character />);
        const charRace = screen.getByText(/Race:/i);

        expect(charRace).toBeDefined();
    });

    it("Renders a list item for the Character's Realm", () => {
        render(<Character />);
        const charRealm = screen.getByText(/Realm:/i);

        expect(charRealm).toBeDefined();
    });

    it("Renders a list item for the Character's Spouse", () => {
        render(<Character />);
        const charSpouse = screen.getByText(/Spouse:/i);

        expect(charSpouse).toBeDefined();
    });
});

describe('Character Component Renders Props', () => {

    it("Renders the Character's name", () => {
        render(<Character { ...samwiseGamgee } />);
        const characterHeading = screen.getByRole('heading', { level: 2, name: samwiseGamgee.name });

        expect(characterHeading).toBeDefined();
    });

    it("Renders the Character's DOB", () => {
        render(<Character { ...samwiseGamgee } />);
        const dateOfBirth = screen.getByText(`Date of Birth: ${samwiseGamgee.birth}`);

        expect(dateOfBirth).toBeDefined();
    });

    it("Renders the Character's DOD", () => {
        render(<Character { ...samwiseGamgee } />);
        const charDeath = screen.getByText(`Date of Death: ${samwiseGamgee.death}`);

        expect(charDeath).toBeDefined();
    });

    it("Renders the Character's Race", () => {
        render(<Character { ...samwiseGamgee } />);
        const charRace = screen.getByText(`Race: ${samwiseGamgee.race}`);

        expect(charRace).toBeDefined();
    });

    it("Renders the Character's Realm", () => {
        render(<Character { ...samwiseGamgee } />);
        const charRealm = screen.getByText(`Realm:${samwiseGamgee.realm}`);

        expect(charRealm).toBeDefined();
    });

    it("Renders the Character's Spouse", () => {
        render(<Character { ...samwiseGamgee } />);
        const charSpouse = screen.getByText(`Spouse: ${samwiseGamgee.spouse}`);

        expect(charSpouse).toBeDefined();
    });

});
