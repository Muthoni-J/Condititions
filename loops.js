// 1. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (var int = 1; int < 100; int++) {
    if (int % 3 == 0 && int % 5 == 0) {console.log("FizzBuzz");}
    else if (int % 3 == 0) {console.log("Fizz");}
    else if (int % 5 == 0) {console.log("Buzz");}
    else console.log(int);
}

// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
  var sum = 0;
for (var y = 0; y < 1000; y++)
{
    if (y % 3 === 0 || y % 5 === 0)
    {
       sum += y;
    }
}
console.log(sum);

// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
for (var i=0; i<=20; i++) {
    if (i === 0) {console.log(i +  " is even"); }
    else if (i % 2 === 0) {console.log(i + " is even");}
    else {console.log(i + " is odd");}
}

// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]

function findLargest(a, b, c, d, e) {
    let numArray = [b, c, d, e];
    let largest = a;
  
    for (let item of numArray) {
      if (item > largest) {
        largest = item;
      }
    }
    return largest;
  }
  
  console.log(getLargest(-2, 4,-5, 6,0));

// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

x=10
y = 40
if(x<y && x>y){
console.log (x)}

else{
    console.log(y)
}

// 6. Write a JavaScript program to find leap years from 2000 to 2022
// function isLeapYear(year)
//     for (var year = 2000; year < 2022; year++) {
// 	if(year % 400 === 0 && year % 4 === 0){
//       return true
//     } else {
//       return false
//     }
// }
