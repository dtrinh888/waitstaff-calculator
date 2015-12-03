angular.module('myApp', ["ngMessages"])
	.controller('tipCalcCtrl', ['$scope', function($scope){
		$scope.mealPrice = '';
		$scope.taxRate = '';
		$scope.tipPercentage = '';
		$scope.submitMeal = function(){
			if ($scope.mealDetails.$valid) {
				$scope.subtotal = $scope.mealPrice * (1+ ($scope.taxRate/100));
				$scope.tip = $scope.subtotal * ($scope.tipPercentage/100);
				$scope.total = $scope.subtotal + $scope.tip;
			}
		};
		$scope.cancelMeal = function() {
			$scope.mealPrice = '';
			$scope.taxRate = '';
			$scope.tipPercentage = '';
			$scope.subtotal = '';
			$scope.tip = '';
			$scope.total = '';
		};
	}]);