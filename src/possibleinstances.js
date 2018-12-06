function possibleInstances(array, arrayProperty) {
    var tempArray = [];
    var exists = false;

    for(var i = 0; i < array.length; i++) {

        if (array[i][arrayProperty]) {

            exists = true;

            if (Array.isArray(array[i][arrayProperty])) {

                for (var a = 0; a < array[i][arrayProperty].length; a++) {

                    if (!(tempArray.includes(array[i][arrayProperty][a]))) {
                        tempArray.push(array[i][arrayProperty][a]);
                    }
                    
                }

            } else {

                if (!(tempArray.includes(array[i][arrayProperty]))) {
                    tempArray.push(array[i][arrayProperty]);
                }

            }

        } 

    }

    return tempArray;
}