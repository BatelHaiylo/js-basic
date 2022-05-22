// function fibbonacci (num){
//     var fibbonacciNum = 0
//     var sum = 1
//     for(i=0; i<=num; i++){
//         sum+=i
//         console.log(sum)
//     }
// }

// function maxMin (){
//     var input = 0
//     do{
//         var num =+ prompt("please enter a number")
//     }
//     while(num>0){
//         input += num;
//         if (num>input){
//             return "max number is:"+num
//         }
//         return "min number is:"+num
//     }
// }

// function Factorization (num){
//     var num = num.toString()
//     var sum = ""
//     for(char of num){
//         sum += char
//     }
//     return sum
// }

function guessingGame (){
    var guess =+ prompt("take a guess:")
    for (guess of range(0, 99)){
        rightGuess = Math.floor(Math.random())
        if (guess<rightGuess){
            return "you guess is lower then the right guess"
        }
        return "you guess is above the right guess"
    }
    
}

function rectangle (){
    var height =+ prompt("enter the rectangle height:")
    var width =+ prompt("enter the rectangle width:")
    var stars = "*"
    for (i=0; i<height; i++){
        for (j=0; j<width; j++){
            var a =(stars * width) + "<br>";
        }
        var b = (stars * height) + "<br>";
    }
    document.write(a,b)
}
rectangle()