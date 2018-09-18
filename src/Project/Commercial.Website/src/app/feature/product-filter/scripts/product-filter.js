import ProductFilter from './../../../../../../../Feature/product/src/scripts/ProductFilter.js';

const ProductFilterInterface = (() => {       

    const _makeRequest = function() {
        const resultList = ProductFilter.getResults('//api-url', {
            method: "GET"
        });

        return resultList;
    };

    const _spinnyAnimationResults = (obj) => {
        // for each item in results add animation class or inline class
    };

    const _loadResults = function() {
        _makeRequest().then((data) => {
            _spinnyAnimationResults(...data);
        });
    };

    const init = function() {
        _loadResults();        
    };

    return init;    

})();

export default ProductFilterInterface;