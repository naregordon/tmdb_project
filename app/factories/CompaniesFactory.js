App.factory('CompaniesFactory', function ($http) {
    var companies = {
        getCompanies(query) {
            let promise = $http.get(`https://api.themoviedb.org/3/search/company?api_key=${api_key}&query=${query}`).then(function(response) {
                let companiesData = response.data

                return companiesData;
            });
            //Returns the promise to the controller
            return promise;
        }
    };
    return companies;
});