import hasError from './hasError';

describe('hasError', () => {
    it('should return false', () => {
        const obj = {
            name: 'test',
            password: 'test',
        };
        expect(hasError(obj)).toEqual(false);
    });

    it('should return true', () => {
        const obj = {
            name: '',
            password: 'test',
        };
        expect(hasError(obj)).toEqual(true);
    });

    it('should return true', () => {
        const obj = {
            name: [],
            password: {},
        };
        expect(hasError(obj)).toEqual(true);
    });

    it('should return true', () => {
        const obj = {
            name: {},
            password: undefined,
        };
        expect(hasError(obj)).toEqual(true);
    });
});
