angular.module('myApp', ['ngMessages', 'ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'index.html',
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
	/*.controller('tipCalcCtrl', ['$scope', function($scope){
		$scope.mealPrice = '';
		$scope.taxRate = '';
		$scope.tipPercentage = '';
		$scope.tipTotal = 0;
		$scope.mealCount = 0;
		$scope.subtotal = 0;
		$scope.tip = 0;
		$scope.total = 0;
		$scope.submitMeal = function(){
			if ($scope.mealDetails.$valid) {
				$scope.subtotal = $scope.mealPrice * (1+ ($scope.taxRate/100));
				$scope.tip = $scope.subtotal * ($scope.tipPercentage/100);
				$scope.total = $scope.subtotal + $scope.tip;
				$scope.tipTotal += $scope.tip;
				$scope.mealCount++;
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
		$scope.avgTipTotal = function(){
			if ($scope.mealCount !== 0){
				return $scope.tipTotal / $scope.mealCount;
			} else {
				return 0;
			}
		};
		$scope.reset = function(){
			$scope.mealDetails.$setPristine();
			$scope.mealDetails.$setUntouched();
			$scope.cancelMeal();
			$scope.tipTotal = 0;
			$scope.mealCount = 0;
		};
	}]);*/