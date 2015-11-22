function even_group_calculate_average(arr) {
    var filterArr = arr.filter(function(n, i) {
        return i % 2 === 1;
    }).filter(function(n, i) {
        return n % 2 === 0;
    });

    var temp = filterGroup(filterArr);
    var result = calculateSum(temp);

    return result.length === 0 ? [0] : result;
}

function filterGroup(arr) {
    var temp = {};

    arr.forEach(function(n, i) {
        var numberLen = n.toString().length;

        temp[numberLen] = temp[numberLen] || [];
        temp[numberLen].push(n);
    });
    return temp;
}

function calculateSum(temp) {
    var result = [];

    for (var key in temp) {
        var sum = 0;
        var keyLength = temp[key].length;

        if (keyLength !== 0) {
            for (var i = 0; i < keyLength; i++) {
                sum += temp[key][i];
            };
        }
        result.push(sum / keyLength);
    }
    return result
}
