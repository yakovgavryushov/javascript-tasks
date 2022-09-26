
function task2(num){
    let enter = num;
    let i = enter;
    let arr = [];

    if(typeof num == "number"){
    do{ if(i > 1){      // if its more than 1 -- runs as usual, then 3 is 
        let impNum = ((i*2)-1);
        arr.push(impNum);// the lowest number
        i-=1;
    }
    else if(!arr.includes(0)) arr.push(0);   // if it drops lower than 1 --> push(0)
    else return console.log(String(arr));
} while(i >= 0);
    } else {
        enter = +prompt('Enter a number:','');
        task2(enter)
    }
}


function task3(num){
let enter = num;
let i = enter;          // made for keeping the number that is added every time
let arr = [];
    if(typeof num == "number"){
    do{
        arr.push(i*i);     // it multiplies itself
        i+=enter;       // and increments by itself after the first loop

        
    } while(i < 30);
    return console.log(String(arr));}
    else {
        enter = +prompt('Enter a number:', 1);
        task3(enter)
    }
}

function task4(num1, num2, num3){

    let enterStart = num1; // +prompt('Enter a start number','');
    let enterLines = num2; // +prompt('Enter number of lines', '');
    let enterJump = num3; // +prompt('Enter a jump', '');

    let lines = 0;
    let jump = enterJump;
    let arr = [];

    if(typeof num1 == "number" || typeof num2 == "number" || typeof num3 == "number") {

        arr.push(enterStart); // shows start number firstly as it is
        enterStart++;
        lines++;
        console.log(String(arr));

        for (let i = enterStart; lines < enterLines; i++) {
            let arr = [];

            for (i; arr.length <= jump; i++) {
                arr.push(i);
            }                           // makes a line with incrementing numbers.

            if (arr[0] !== i) {
                arr.push(i);
                arr.pop();
                i--;
            }
            // because the for loop is omitting first value (probably because of i++ or sth else), it regulates itself with this if statement.
            jump += enterJump;            // counts and adds a jump for new line.
            lines++;                    // counts lines to end when needed.

            console.log(String(arr));                 // shows the result.
        }
    }
    else {

        enterStart = +prompt('Enter a number:', '');;
        enterLines = +prompt('Enter number of lines', '');
        enterJump = +prompt('Enter a jump', '');
        task4(enterStart, enterLines, enterJump)
    }
}



function taskExam(num){

    let arr = [];
    let num1 = 1;
    if(typeof num == "number"){
        for(let i = 0; num1 < num; i++){
            arr.push(num1);
            num1 = i*i;

        } console.log(String(arr))
            alert(String(arr))

    } else {
        num2 = +prompt('Enter a numeber:', 1);
        taskExam(num2);
}
}

function taskExam2(num){

}