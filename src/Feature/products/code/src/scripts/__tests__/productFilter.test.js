import ProductFilter from './../scripts/ProductFilter.js';

describe('Product filter', () => {
    it('should have public functions', () => {
        expect(ProductFilter).toMatchSnapShot();
    });
});