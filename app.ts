interface IHaveALength {
    length: number;
}

function totalLength<T extends IHaveALength>(x: T, y: T) {
    var total: number = x.length + y.length;
    return total;
}

class CustomArray<T> extends Array<T> {}

var length = totalLength([1, 2, 3], new CustomArray<number>())