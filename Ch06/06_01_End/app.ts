function clone<T>(value: T): T {
    let serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}

clone('Hello!')

clone(123)

var todo: Todo = {
    id: 1,
    name: 'Pick up drycleaning',
    state: TodoState.Active
};

clone(todo)

clone({ name: 'Jess' })