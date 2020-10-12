export const filter = (() => {
    const getResults = (url, obj) => {
        return fetch(url, obj)
            .then((response) => response.json())
            .catch((error) => console.error(error));
    };

    const filterOptions = () => {
        // some filtering code here
    };

    return {
        filterOptions,
        getResults
    };
})();
