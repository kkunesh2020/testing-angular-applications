import { ContactsComponent } from './contacts.component';
import { Contact } from './shared/models';

describe('ContactsComponents tests', () => {
    let contactsComponent: ContactsComponent = null;

    beforeEach(() => {
        contactsComponent = new ContactsComponent();
    });

    it('should set instance correctly', () => {
        expect(contactsComponent).not.toBeNull();
    });

    it('should be no contacts if there is no data', () => {
        expect(contactsComponent.contacts.length).toBe(0);
    });

    it('should be contacts if there is data', () => {
        const newContact: Contact = {
            id: 1,
            name: 'JD'
        };
        const contactsList: Array<Contact> = [newContact];
        contactsComponent.contacts = contactsList;

        expect(contactsComponent.contacts.length).toBe(1);
    });
});