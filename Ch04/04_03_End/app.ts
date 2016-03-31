var $ = <jQuery>function(selector: string) {
    // Find DOM element
}

$.version = 1.18;


interface Todo {
    name: string;
    completed?: boolean;
}

interface jQuery {
    (selector: (string | any)): jQueryElement;
    fn: any;
    version: number;
}

interface jQueryElement {
    data(name: string): any;
    data(name: string, data: any): jQueryElement;
}

interface jQueryElement {
    todo(): Todo;
    todo(todo: Todo): jQueryElement;
}

$.fn.todo = function(todo?: Todo): Todo {
    
    if(todo) {
        $(this).data('todo', todo)
    } else {
        return $(this).data('todo');
    }
    
}

var todo = { name: "Pick up drycleaning" };
var container = $('#container');
container.data('todo', todo)
var savedTodo = container.data('todo');

container.todo(todo)