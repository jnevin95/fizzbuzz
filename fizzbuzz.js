exports.count = function(start, end){
	
	var fizz = start;

	for(counter = start; counter < end; counter += 1){

		fizz = fizz + " " + (counter + 1);
		} 
return fizz;
		};

exports.fizzer = function(num){
	//return 0 === num % 3 ? "fizz"; num
	
	if(num%3 === 0){
return "fizz";
	}else{
		return num;
	}
};

exports.buzzer = function(num){
	//return 0 === num % 5 ? "buzz"; num
	if(num%5 === 0){
return "buzz";
	}else{
		return num;
	}
};

exports.fizzbuzzer = function(num){
	//return (0 === num % 3) && (0 === num % 5) ? "fizzbuzz"; num
	if(num%3 === 0 && num%5 === 0){
return "fizzbuzz";
	}else{
		return num;
	}
};
