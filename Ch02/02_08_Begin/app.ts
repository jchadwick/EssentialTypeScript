function add() {
    var values = Array.prototype.splice.call(arguments, [1]),
        total = 0;

    for (var value of values) {
        total += value;
    }

    return total;
}