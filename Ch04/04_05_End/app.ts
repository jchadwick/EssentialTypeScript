var todo: { name: string };

todo = { age: 41 }

function totalLength(x: { length: number }, y: { length: number }): number {
    var total: number = x.length + y.length;
    return total;
}