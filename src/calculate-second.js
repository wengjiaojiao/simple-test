function calculate_median(arr) {
    var filterNum = arr.filter(function(n, i) {
        return i % 2 === 1;
    }).sort();
    var result = median(filterNum);

    return result;
}

function median(arr) {
    var midLength = arr.length / 2;

    if(arr.length % 2 === 0) {
        return (arr[midLength] + arr[midLength - 1]) / 2;
    }else {
        return arr[parseInt(midLength)];
    }
}
