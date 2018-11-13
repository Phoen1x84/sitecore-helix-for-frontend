const ProductFilter = (() => {

    const getResults = (url, obj) => {
        return fetch(url, obj)
            .then((response) => response.json())
            .catch((error) => console.error(error));
    };

    const filterOptions = () => {
        
    };

    const deleteResults = () => {

    };

    return {
        filterOptions,
        getResults,
        deleteResults
    };

})();

export default ProductFilter;