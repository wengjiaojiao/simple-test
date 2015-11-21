function single_element(arr) {
    var result = arr.filter(function(item, i) {
        return i % 2 === 1;
    });

    return result;
}
