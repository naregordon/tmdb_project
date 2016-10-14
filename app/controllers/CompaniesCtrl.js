App.controller('CompaniesCtrl', ['$scope', 'CompaniesFactory', 'MoviesFactory', 'MDConfigFactory', function($scope, CompaniesFactory, MoviesFactory, MDConfigFactory) {
  
	$scope.movieList = [];
	$scope.companyList = [];
	$scope.currentPage = 1;
	$scope.selectedCompany = {};
	$scope.base_url = "";
	$scope.currentPage = 1;
	$scope.maxSize = 5;
	$scope.totalItems;

	$scope.selectCompany = (company) => {
		getMoviesData(company.id);
		$scope.selectedCompany = company;
	};

	$scope.searchCompany = (search) => {
		if (search.length > 0) {
			getCompanyList(search);
		};
	};

	$scope.$watch('currentPage', () => {
		getMoviesData($scope.selectedCompany.id, $scope.currentPage);
	});

	var canCall = true;
	var getCompanyList = (query) => {
		if (!canCall) return;
        canCall = false;

		CompaniesFactory.getCompanies(query).then((data) => {
			$scope.companyList = data.results;
			$scope.selectedCompany = $scope.companyList[0];
			getMoviesData($scope.selectedCompany.id);
		});

		setTimeout(() => { canCall = true }, 1000);
	};

	var getMoviesData = (companyId, page = $scope.currentPage) => {
		MoviesFactory.getMovies(companyId, page).then((data) => {
			console.log("Movies", data);
			$scope.movieList = data.results;
			$scope.totalItems = data.total_results / 2;
		});
	};

	MDConfigFactory.getConfigs().then((data) => {
		console.log("MD Config", data);
		let movieDatabaseConfigs = data;
		$scope.base_url = movieDatabaseConfigs.images.base_url;
	});

}]);