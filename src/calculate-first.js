function single_element(arr) {
    var filterNum = arr.filter(function(item, i) {
        return i % 2 === 1;
    });
    var objectArray = getObjectArray(filterNum);
    var result = [];

    objectArray.forEach(function(n, i) {
        if (n.count === 1) {
            result.push(n.num);
        }
    });
    return result;
}

function getObjectArray(arr) {
    var objectArray = [];

    arr.forEach(function(n, i) {
        var exist = false;

        objectArray.forEach(function (m, j) {
            if(n === m.num) {
                m.count ++;
                exist = true;
            }
        });
        if(!exist) {
            objectArray.push({
                num: n,
                count: 1
            });
        }
    });
    return objectArray;
}
