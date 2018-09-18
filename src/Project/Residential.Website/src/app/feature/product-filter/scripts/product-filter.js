import ProductFilter from './../../../../../../../Feature/productFilter/src/scripts/productFilter.js';

const ProductFilterInterface = (() => {       

    const _makeRequest = function() {
        const resultList = ProductFilter.getResults('//api-url', {
            method: "GET"
        });

        return resultList;
    };

    const _animateResults = (obj) => {
        // for each item in results add animation class or inline class
    };

    const _loadResults = function() {
        _makeRequest().then((data) => {
            _animateResults(...data);
        });
    };

    const init = function() {
        _makeRequest();
    };

    return init;    

})();

export default ProductFilterInterface;