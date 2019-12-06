import setObjectItem from './setObjectItem';

describe('set Object item', () => {

    it('should set item', () => {
        const obj = {
            name: '',
            email: ''
        };

        expect(setObjectItem(obj, {name: 'hello'})).toEqual({name: 'hello', email: ''});
    });

    it('should return current obj when args = {}', () => {
        const obj = {
            name: '',
            email: ''
        };

        expect(setObjectItem(obj, {})).toEqual(obj);
    });

    it('should return current obj when args is not an obj', () => {
        const obj = {
            name: '',
            email: ''
        };

        expect(setObjectItem(obj, null)).toEqual(obj);
    });
});
