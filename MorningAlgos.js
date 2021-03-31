/* 
    Interview question that Neil received.
    Given two vars, x and y that store integers, swap their values WITHOUT
    creating any new variables or using any data types.
    Don't worry about creating a function either.
    No destructuring
*/
let x = 5;
let y = 3;
(x == 3 && y == 5);
console.log(x);
console.log("** ** ** **")
console.log(y)


console.log(x, y);

// your code here

console.log(x, y);


/* 
    Time in Words
    Write a function that accepts 2 numbers, hour and minute, for hour of the day and minutes of the hour,
    and return a string of the time. Follow these patterns:
                5:00 --> five o' clock
                5:01 --> one minute past five
                5:10 --> ten minutes past five
                5:15 --> quarter past five
                5:30 --> half past five
                5:40 --> twenty minutes to six
                5:45 --> quarter to six
                5:47 --> thirteen minutes to six
                5:28 --> twenty eight minutes past five

    EXAMPLE:
    let h = 5;
    let m = 47;

    timeInWords(h, m) should return "thirteen minutes to six"
*/
function timeInWords(hour, minute) {
    var dict = {
        00: " o' clock ",
        1: "one minute past ",
        59: "one minute to ",
        45: "quarter to ",
        30: " minutes to ",
        30: " minutes past "


    }
    let words = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eightteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine"
    ];
    if (m == 0) {
        return (words[h] + " o' clock ");
    } else
    if ((m == 1)) {
        return ("one minute past " + words[h]);
    } else if (m == 59) {
        return ("one minute to " + words[(h % 12) + 1]);
    } else if (m == 45) {
        return ("quarter to " + words[(h % 12) + 1]);

    } else if (m <= 30) {
        return (words[m] + " minutes past " + words[h])
    } else if (m > 30) {
        return (words[60 - m] + " minutes to " + words[(h % 12) + 1])
    }
    console.log(words[h], words[m]);
}

let h = 4;
let m = 15;
console.log(timeInWords(h, m))