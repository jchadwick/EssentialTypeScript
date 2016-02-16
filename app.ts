interface Todo {
    name: string;
    state: TodoState;
}

var todo: Todo = {
    name: "Pick up drycleaning",
    state: TodoState.New
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

function delete(todo: Todo) {
    if(todo.state != TodoState.Complete) {
        throw "Can't delete incomplete task!"
    }
}