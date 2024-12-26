// CHAPTER-3

// TYPE OF LOOPS IN JAVASCRIPT
// 1.For Loop
// let sum = 1
// let n = prompt("Enter is value of n:")
// n = Number.parseInt(n)
// for(let i=1;i<11;i++) {
// 	// sum += (i+1)
// 	// console.log(i+1), "+"
// 	console.log(i*n)
// }
// console.log("Sum of first " + n + " natural number is "+ sum)

// NOTES OF FOOR LOOPS=>
// [Isme 3 statement hote = statement-1(i=0), statement-2(i<5), statement-3(i++)]
// [First statement 1 baar hi execute/run hota h]
// [statement 2 check krti h ki di gyi condition true h ya nhi]
// [statement 3 har baar execute hotih jab loop body execute hoti h]

// 2.For in Loop
// let obj={
//     Harry: "Programer",
// 	Raju: "Learner",
// 	Naveen: "Friend",
// 	Op: "Friend"
// }
// for(let b in obj){
// 	console.log(b + " is " + obj[b])
// }
// NOTES OF FOOR IN LOOPS=>
// [Foor in loop m only keys print krne k liye=>console.log(b)]
// [Foor in loop m only values print krne k liye=>console.log(obj[b])]
// [Foor in loop m pure obj(loop) ko print krne k liye=>console.log(b + " is " + obj[b])]

// 3.For of Loop
// for(let b of "Raju"){
// 	console.log(b)
// }
// NOTES OF FOOR OF LOOPS=>
// [Iska use kisi bhi element ko row m print krne k liye kiya jata h]

// 4.While Loop
// let n = prompt("Enter value of n:")
// n = Number.parseInt(n)

// let i = 1;
// while(i<=n){
// 	console.log(i)
//    i++;
// }

// 5.Do while Loop
let n = prompt("Enter value of n:")
n = Number.parseInt(n)

let i = 1;
do{
	console.log(i)
   i++;
}while(i<=n)
// NOTES OF DO WHILE LOOPS=>
// [pehle execute hoga fir condition check krega]