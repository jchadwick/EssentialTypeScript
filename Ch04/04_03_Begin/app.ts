var $ = <jQuery>function(selector: string) {
    // Find DOM element
}

$.version = 1.18;


interface Todo {
    name: string;
    completed?: boolean;
}

interface jQuery {
    (selector: (string | any)): HTMLElement;
    fn: any;
    version: number;
}

var todo = { name: "Pick up drycleaning" };
var container = $('#container');
