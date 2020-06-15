import { ProductFilter } from '../productFilter';

describe('Product filter', () => {
    it('should have public functions', () => {
        expect(ProductFilter).toMatchSnapshot();
    });
});