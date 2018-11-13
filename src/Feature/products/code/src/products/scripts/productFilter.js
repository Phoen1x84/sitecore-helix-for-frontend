const ProductFilter = (() => {

    const getResults = (url, obj) => {
        return fetch(url, obj)
            .then((response) => response.json())
            .catch((error) => console.error(error));
    };

    const filterOptions = () => {
        // some filtering code here
    };

    const deleteResults = () => {
        // some code here
    };

    return {
        filterOptions,
        getResults,
        deleteResults
    };

})();

export default ProductFilter;