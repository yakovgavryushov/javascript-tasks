
function task2(){
    let enter = +prompt('Enter a number:','');
    let i = enter;
    do{ if(i > 1){      // if its more than 1 -- runs as usual, then 3 is 
        alert((i*2)-1); // the lowest number
        i-=1;
    }
    else return alert(0);   // if it drops lower than 1 --> alert(0) 
} while(i >= 0)             
}

function task3(){
let enter = +prompt('Enter a number:', '');
let i = enter;          // made for keeping the number that is added every time
    do{
        alert(i*i);     // it multiplies itself
        i+=enter;       // and increments by itself after the first loop
    } while(i < 30);    
}

function task4(){
    let enterStart = +prompt('Enter a start number','');
    let enterLines = +prompt('Enter number of lines', '');
    let enterJump = +prompt('Enter a jump', '');

    let lines = 0;
    let jump = enterJump;

    let arr = [];
    arr.push(enterStart); // shows start number firstly as it is
    enterStart++;
    lines++;
    alert(arr);

    for(let i = enterStart; lines < enterLines; i++){
        let arr = [];
        
        
        for(i; arr.length <= jump; i++){ 
            arr.push(i);        
        }                           // makes a line with incrementing numbers.

        if(arr[0] !== i){               
            arr.push(i); arr.pop(); i--;
                                        // because the for loop is omitting first value (probably because of i++ or sth else), it regulates itself with this if statement.
            }
            

        // makes length of lines not more then sum..
        // ..of what it was and what was added.
        
        jump+=enterJump;            // counts and adds a jump for new line.
        lines++;                    // counts lines to end when needed.
        alert(arr);                 // shows the result.
    }
}
