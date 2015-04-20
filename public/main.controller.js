app.controller('MainController', function ($scope, FlashCardsFactory) {
	$scope.flashCards = FlashCards.getFlashCards();

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}

	$scope.categories = [
	  'MongoDB',
	  'Express',
	  'Angular',
	  'Node'
	];

	$scope.getCategoryCards = function(category){

	};
});
