var x = 0;
var words = function(name, letter){
var k = letter;
var i = name;
var j = name.length;
	for(var z = 0; z<=j; z++){
		if(i.charAt(z) === k){
			x++;
		}else{

		}
	}
	console.log(x);
}
words("SonKevin", "n");