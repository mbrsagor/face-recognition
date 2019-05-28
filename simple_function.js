var addFunc = new Function("a", "b", "return a+b");
console.log(addFunc(70, 30));

function oddEvent(){
	var num= 10;
	var n;
	for(n=0; n<=num; n++){
		if (n%2 === 0) {
			console.log(n);
		}
	}
}

oddEvent()
