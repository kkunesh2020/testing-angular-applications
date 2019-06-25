import { PhoneNumberPipe } from './phone-number.pipe';

describe('PhoneNumberPipe tests', () => {
    let phoneNumber: PhoneNumberPipe = null;

    beforeEach(() => {
        phoneNumber = new PhoneNumberPipe();
    });

    describe('default behavior', () => {
        it('should transform the string or number into the default phone format', () => {
            const testInputPhoneNumber = '1234567890';
            const transformedPhoneNumber =
                phoneNumber.transform(testInputPhoneNumber);
                const expectedResult = '(123) 456-7890';

                expect(transformedPhoneNumber).toBe(expectedResult);
        });

        it('should not display anything if the length is not 10 digits', () => {
            const testInputPhoneNumber = '123456789';
            const transformedPhoneNumber =
                phoneNumber.transform(testInputPhoneNumber);
                const expectedResult = '';

                expect(transformedPhoneNumber).toBe(expectedResult);
        });
    });

    describe('phone number format tests', () => {
        it('should format phone number using the dots format', () => {
            const testInputPhoneNumber = '1234567890';
            const format = 'dots';
            const transformedPhoneNumber =
                phoneNumber.transform(testInputPhoneNumber, format);
            const expectedResult = '123.456.7890';
    
            expect(transformedPhoneNumber).toBe(expectedResult);
        });
        it('should format phone number using the hyphens format', () => {
            const testInputPhoneNumber = '1234567890';
            const format = 'hyphens';
            const transformedPhoneNumber =
                phoneNumber.transform(testInputPhoneNumber, format);
            const expectedResult = '123-456-7890';
    
            expect(transformedPhoneNumber).toBe(expectedResult);
        });
        it('should format phone number using the gibberish format', () => {
            const testInputPhoneNumber = '1234567890';
            const format = 'frgyestnd';
            const transformedPhoneNumber =
                phoneNumber.transform(testInputPhoneNumber, format);
            const expectedResult = '(123) 456-7890';
    
            expect(transformedPhoneNumber).toBe(expectedResult);
        });
    });

    describe('country code parameter tests', () => {
        it('should add respective country code', () => {
            const testInputPhoneNumber = '1234567890';
            const format = 'default';
            const countryCode = 'us';
            const transformedPhoneNumber =
                phoneNumber.transform(testInputPhoneNumber, format, countryCode);
                const expectedResult = '+1 (123) 456-7890';

                expect(transformedPhoneNumber).toBe(expectedResult);
        });

        it('should not add anything if country code is unrecognized', () => {
            const testInputPhoneNumber = '1234567890';
            const format = 'default';
            const countryCode = 'zz';
            const transformedPhoneNumber =
                phoneNumber.transform(testInputPhoneNumber, format, countryCode);
                const expectedResult = '(123) 456-7890';

                expect(transformedPhoneNumber).toBe(expectedResult);
        });
    });
    afterEach(() => {
        phoneNumber = null;
    });
});