/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function(x,y){
    return x*y
}

//for testing
//console.log("The area of the rectangle: ", area(11,12))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function (x,y){
    if (x===y){
        return (x+y)*3
    } else{
        return x + y
    }
}
//for testing
//console.log(crazySum(3,4))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function(x){
    if (x>0){ //for x greater than 0 
        if (x>19){
            return (x-19)*3
        }
        return 19-x //the number has to be greater than 0 and smaller than 19 here
    } else { //for the <= 0, multiply them with -1 to get the absolute difference
        if (x<-19){
            return (-1*x - 19)*3
        }
        return (19-(-x))
    }
}

/*
Another way of solving using the abs function 
function crazyDiff(num) {
  if (num > 19) {
    return Math.abs(num - 19) * 3;
  } else {
    return Math.abs(num - 19);
  }
}
*/
//for testing
/*
console.log(crazyDiff(100))
console.log(crazyDiff(-20))
*/

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
const boundary = function(n){
    if (Number.isInteger(n)){
        if ((n>20 && n<=100) || n===400){
            return true
        }
        else{
            return false
        }
    }
    
}
// for testing
// console.log(boundary(19))

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
const strivify = function (str) {
    if (str.startsWith("Strive")) {
      return str;
    } else {
      return "Strive " + str;
    }
  }
// for testing  
// console.log (strivify("xxx"))


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(x) {
    if (x>0){
        if (x%3==0){
                return `${x} is a multiple of 3`
        } else if (x%7==0){
                return `${x} is a multiple of 7`
        } else {
                return "The number is not a multiple of 3 or 7."
        }
    }else {
        return "The number is negative. We don't do that here."
    }
}
//for testing
//console.log(check3and7(-3))
//console.log(check3and7(27))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
const reverseString = function(x){
    let reverseName = "" 
    for (let i =x.length-1;i>=0;i--){
        reverseName += x[i] 
    }
    return reverseName
}
//for testing 
// console.log(reverseString("Weoy"))


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

//Not sure what went wrong here


const upperFirst = function(x){
    const words = x.split(" ") //to split the sentence into an array of words

    for (let i =0; i < words.length; i ++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1) //capitalize the first letter of each word and rejoin them with them remaining of the words
    } 
    return words.join(" ") // return the words in a string using the join function 
}
// for testing
//console.log(upperFirst("weoy howe ang"))

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
const cutString = function(x){
    let cutString = ""
    for (let i=1; i< x.length -1; i++){
        cutString += x[i]
    }
    return cutString
}
// for testing
// console.log(cutString("WeoyHowe"))

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
const giveMeRandom = function(x){
    const minNum = 0
    const maxNum = 10
    const diffNum = maxNum - minNum
    let randomNumberArray = []
    for (let i =0; i< x; i++){
        randomNumberArray.push(Math.floor(Math.random()*diffNum)+minNum)
        
    }
    return randomNumberArray

}
// for testing
console.log(giveMeRandom(7))
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/