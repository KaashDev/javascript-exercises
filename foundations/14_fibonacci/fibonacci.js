const fibonacci = function(num) {
    if(typeof num ==='string') num = parseInt(num);
    if(num < 0) return "OOPS";

    let curr = 1;
    let prev = 0;

    for(let i = 0; i < num; i++){
        let temp = curr;
        curr += prev;
        prev = temp;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
