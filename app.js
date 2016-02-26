var app = angular.module('myModule', []);
	app.controller('MyController', function($scope){

		$scope.wordList = ['dog', 'cat'];
		$scope.phraseList = ['wibbly wobbly timey wimey', 'what the frak?'];
		
		$scope.displayRandom = function(){
			var item; 
			var index = Math.floor(Math.random() * $scope.wordList.length);
			item = $scope.wordList[index];
			return item;
		}

		$scope.changeClass = function(){
			$scope.classname = "red";
		}

		$scope.displayRandomPhrase = function(){
			var item2;
			var index2 = Math.floor(Math.random() * $scope.phraseList.length);
			item2 = $scope.phraseList[index];
			return item2;
		}

	});