import { ProductFilter } from '../../../../../Feature/Products/index';

export const ProductFilterInterface = (() => {

    const _makeRequest = function () {
        const resultList = ProductFilter.getResults('//api-url/residential', {
            method: 'GET'
        });

        return resultList;
    };

    const _animateResults = (obj) => {
        // for each item in results add animation class or inline class
    };

    const toggleResultView = (el, cssClass) => {
        return el.classList.toggleClass(cssClass);
    };

    const _loadResults = function () {
        _makeRequest().then((data) => {
            _animateResults(...data);
        });
    };

    const init = function () {
        _loadResults();
    };

    return {
        init: init,
        toggleResultView: toggleResultView
    };

})();
