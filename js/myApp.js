angular.module('myApp', ['ngMessages', 'ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'home.html',
			controller: 'HomeCtrl'
		})
		.when('/new-meal', {
			templateUrl: 'new-meal.html',
			controller: 'newMealCtrl'
		})
		.when('/my-earnings', {
			templateUrl: 'my-earnings.html',
			controller: 'myEarningsCtrl'
		});
	}])
	.run(['$rootScope', function($rootScope) {
			$rootScope.tipTotal = 0;
			$rootScope.mealCount = 0;	
	}])
	.controller('HomeCtrl', function($scope){

	})
	.controller('newMealCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
		$scope.mealPrice = '';
		$scope.taxRate = '';
		$scope.tipPercentage = '';
		$scope.subtotal = 0;
		$scope.tip = 0;
		$scope.total = 0;
		$scope.submitMeal = function(){
			if ($scope.mealDetails.$valid) {
				$scope.subtotal = $scope.mealPrice * (1+ ($scope.taxRate/100));
				$scope.tip = $scope.subtotal * ($scope.tipPercentage/100);
				$scope.total = $scope.subtotal + $scope.tip;
				$rootScope.tipTotal += $scope.tip;
				$rootScope.mealCount++;
				$scope.mealPrice = '';
				$scope.taxRate = '';
				$scope.tipPercentage = '';
			}
		};
		$scope.cancelMeal = function(){
			$scope.mealPrice = '';
			$scope.taxRate = '';
			$scope.tipPercentage = '';
			$scope.subtotal = '';
			$scope.tip = '';
			$scope.total = '';
		};	
	}])
	.controller('myEarningsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
			$scope.avgTipTotal = function(){
			if ($rootScope.mealCount !== 0){
				return $rootScope.tipTotal / $rootScope.mealCount;
			} else {
				return 0;
			}
		};
		$scope.resetEarnings = function(){
			$rootScope.tipTotal = '';
			$rootScope.mealCount = '';
		};	
	}]);
	