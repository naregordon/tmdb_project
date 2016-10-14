App.factory('MDConfigFactory', function ($http) {
    var configs = {
        getConfigs() {
            let promise = $http.get(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`).then(function(response) {
                let configsData = response.data

                return configsData;
            });
            //Returns the promise to the controller
            return promise;
        }
    };
    return configs;
});