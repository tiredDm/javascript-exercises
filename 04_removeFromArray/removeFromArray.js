const removeFromArray = function(array, values) {
    for(let i = 1; i < arguments.length; i++){
        let value = arguments[i];
        let index = array.indexOf(value);
        if (index < array.length && index >=0){
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
