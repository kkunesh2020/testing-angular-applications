import ContactClass from './contact';

describe ('Contact class tests', () => {
    let contact: ContactClass = null;
    beforeEach(() => {
        contact = new ContactClass();
    });
    it('should have a valid constructor', () => {
        expect(contact).not.toBeNull();
    });
    it('should set name correctly through constructor', () => {
        contact = new ContactClass('Liz');
        expect(contact.name).toEqual('Liz');
    });
    it('should get and set id correctly', () => {
        contact.id = 1;
        expect(contact.id).toEqual(1);
    });
    it('should get and set name correctly', () => {
        contact.name = 'Liz';
        expect(contact.name).toEqual('Liz');
    });
    it('should get and set email correctly', () => {
        contact.email = "kunesh@gmail.com";
        expect(contact.email).toEqual("kunesh@gmail.com");
    });
    it('should get and set number', () => {
        contact.number = '33312345678';
        expect(contact.number).toEqual('33312345678');
    });
    it('should get and set country', () => {
        contact.country = 'United States';
        expect(contact.country).toEqual('United States');
    });
    it('should get and set favorite', () => {
        contact.favorite = true;
        expect(contact.favorite).toBe(true);
    });
    afterEach(() => {
        contact = null;
    });
});