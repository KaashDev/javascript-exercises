const removeFromArray = function(array, ...values) {
     
    for(let i = 0; i < values.length; i++){
        while(array.includes(values[i])){
            array.splice(array.indexOf(values[i]), 1);
        }
    }

    return array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
