const repeatString = function(word, iterations) {

    if(iterations == -1){
        return "ERROR";
    }
    final = "";

    for(i = 0; i < iterations; i++){
        final = final + word;
    }
    return final;

};

// Do not edit below this line
module.exports = repeatString;
