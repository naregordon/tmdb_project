App.controller('CompaniesCtrl', ['$scope', 'CompaniesFactory', 'MoviesFactory', function($scope, CompaniesFactory, MoviesFactory) {
  
	$scope.movieList = [];
	$scope.companyList = [];
	$scope.currentPage = 1;

	$scope.selectCompany = (company) => {
		getMoviesData(company.id);
	};

	$scope.searchCompany = (search) => {
		if (search.length > 0) {
			getCompanyList(search);
		};
	};

	var getCompanyList = (query) => {
		CompaniesFactory.getCompanies(query).then((data) => {
			console.log("Companies", data);
			$scope.companyList = data.results;
		});
	};

	var getMoviesData = (companyId, page = $scope.currentPage) => {
		MoviesFactory.getMovies(companyId, page).then((data) => {
			console.log("Movies", data);
			$scope.movieList = data.results;
		});
	};

}]);