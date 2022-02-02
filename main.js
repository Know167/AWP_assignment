const URL ="https://covid19.mathdro.id/api";
var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'myCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
});

mainApp.controller('myCtrl', function($scope,$http) {
	$scope.title = "Stay Home Stay Safe";
	console.log("MAIN CONTROLLER LOADED");
	$http.get(URL).then(
		(response)=>{
			console.log(response);

			$scope.all_data=response.data;
		},
		(error)=>{
			console.log(error);
		}
		
	);
	//get country data
	$scope.get_c_data=()=>{
		console.log($scope.c);
		let country=$scope.c;
		if(country==""){
			$scope.c_data=undefined;
			return;
		}
		$http.get(`${URL}/countries/${country}`)
		.then((response)=>{
			console.log(response.data);
			$scope.c_data = response.data;
		},
		(error)=>{
			console.log(error);
		}
		)
	};
});
