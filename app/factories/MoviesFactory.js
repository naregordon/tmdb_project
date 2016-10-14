App.factory('MoviesFactory', function ($http) {
    var movies = {
        getMovies(company_id, page) {
            let promise = $http.get(`https://api.themoviedb.org/3/company/${company_id}/movies?api_key=${api_key}&page=${page}`).then(function(response) {
                let moviesData = response.data

                return moviesData;
            });
            //Returns the promise to the controller
            return promise;
        }
    };
    return movies;
});