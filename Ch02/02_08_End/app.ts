function calculate(action, ...values) {
    var total = 0;

    for (var value of values) {
        switch(action) {
            case 'add':
                total += value;
                break;
            
            case 'subtract':
                total -= value;
                break;
        }
    }

    return total;
}

calculate('add', 1,2,3,4,5)


var source = [3, 4, 5]
var target = [ 1, 2, ...source, 6, 7 ]


var list = [1,2,3]
var toAdd = [4,5,6];

list.push(...toAdd)
