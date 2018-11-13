import ProductFilter from './../scripts/product-filter.js';

describe('Product Filter', () => {
    let filterComponent;
    beforeAll(() => {
        filterComponent = document.createElement('<div class="product-filter" />');        
    });

    it('should initialise when the filter is present', ()=> {
        expect(filterComponent).toBeTruthy();        
    });
});