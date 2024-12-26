// FUNCTIONS IN JAVASCRIPT=>

// OLD JS FUNCTION
// function avg(x,y){
// 	console.log("Perfect")
// 	return 1+(x+y)/2
// }
// let a = 1;
// let b = 2;
// let c = 3;

// console.log("Average of a and b= "+ avg(a,b))
// console.log("Average of b and c= "+ avg(b,c))
// console.log("Average of c and a= "+ avg(c,a))


// IN MODERN JS(Arrow Function)
const sum =(p,q)=>{
return p+q
}
console.log(sum(5,6))
//==========//
const Hello =()=>{
	console.log("HEY HOW ARE YOU.")
	return "Hi"
}
let v = Hello()
console.log(v)