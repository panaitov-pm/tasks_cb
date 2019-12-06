import Pluralization from '../Pluralization';

describe('set Object item', () => {

    it('should render items', () => {
        const str = 'item|items';

        expect(Pluralization(3, str)).toEqual('items');
    });

    it('should render item', () => {
        const str = 'item|items';

        expect(Pluralization(1, str)).toEqual('item');
    });

    it('should render empty string', () => {
        const str = '';

        expect(Pluralization(1, str)).toEqual('');
    });
});
