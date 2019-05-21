
// HW2
(function() {
	'use strict';
	var min, max;
	min = prompt('Enter first number');
	max = prompt('Enter second number');
	if ( min||max == typeof(number)) {
	for (var i = min; i <= max; i++) {
		var numSimple = true;
		for (var j = 2; j < i; j++) {
			var number = i%j;
	        if (number==0) {
				numSimple = false;
				break	
			}
			else numSimple = true;
		}
		if (numSimple) alert(i);
	}
	// Проверка на отмену 
	} else if ((min||max) == null){
		alert ("You canceled program")
	// Проверка на пустую строку	
	} else if ((min||max) === '') { 
		alert ("Please enter a digit`s")
	// Иначе	
	}else {
		alert ("Good Bye")
	}

})();

