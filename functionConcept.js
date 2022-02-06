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



//this keyword behaviour in both cases


let me={
	name:'sohel shaikh',
	thisInArrow:()=>{
		console.log("hey my self "+this.name);//hey my self
	},
	thisInNormal(){
		console.log("hey my self "+this.name);//hey my self sohel shaikh
	}
}

// me.thisInArrow();//hey my self
// me.thisInNormal();//hey my self sohel shaikh






// 'use strict'
// function Normal(x,x) {
// 	console.log(x);
// 	console.log(arguments);
// }

// Normal(2, 3);

// var add = (a, b) => {
// 	console.log("asdsf ", (a + b));
// 	console.log(this);
// }

// console.log(add)
// new add(2, 5);



function Normal() {
	console.log(this);
	// console.log(arguments);
}


// Normal();

let myObj = {
	innerNormal:Normal
}

myObj.innerNormal();