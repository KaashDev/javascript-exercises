const reverseString = function(word) {
    if(word == ""){
        return "";
    }

    reverse = "";

    for(const char of word){
        reverse = char + reverse;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
