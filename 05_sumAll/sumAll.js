const sumAll = function(lesser, greater) {
    //Test if lesser and greater are numbers..
    if(typeof lesser == 'number' && typeof greater == 'number' && lesser >= 0 && greater >= 0){
        if(lesser > greater){
            let placeHolder = greater;
            greater = lesser;
            lesser = placeHolder;
        }
        //loop
        let sum = 0;
        for(let i = lesser; i <= greater; i++){
            sum += i;
        }
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
