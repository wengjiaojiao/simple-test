function calculate_median(arr) {
    var result = arr.filter(function(n, i) {
        return i % 2 === 1;
    });
    var midLength = result.length / 2;

    if(result.length % 2 === 0) {
        return (result[midLength] + result[midLength - 1]) / 2;
    }else {
        return result[parseInt(midLength)];
    }
}
