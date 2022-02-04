//the difference between arrow function and normal function


//arguments object


//1) First Example
//in case of normal function
var myobj1={
	show_args(){
		console.log(arguments);//succesfully run
	}
}

// myobj1.show_args(1,2,3,4,5,6);




//in case of arrow Function
var myobj2={
	show_args:()=>{
		console.log(arguments);//error :functionConcept.js:23 Uncaught ReferenceError: arguments is not defined
	}
}

// myobj2.show_args();



//arrow function reffers arguments variable of its non arrow parent function
//2) Second Example
var arrowFun1=()=>{

	var arrowFun2=()=>{
		console.log(arguments);//error :functionConcept.js:36 Uncaught ReferenceError: arguments is not defined
	}
	arrowFun2();
}
// arrowFun1(1,2,3);



//in case of normal function
function fun(){
var arrowFun2=()=>{
		console.log(arguments);//successfully run
	}
	arrowFun2();	
}
// fun(1,2,3,4);



// 3)

var arrowFun2=()=>{
			console.log(arguments);//functionConcept.js:58 Uncaught ReferenceError: arguments is not defined
		}

// arrowFun2(1,2,3,4);	
