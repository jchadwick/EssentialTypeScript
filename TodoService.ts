class TodoService {

    private static _lastId: number = 0;

    get nextId() {
        return TodoService._lastId += 1;
    }

    constructor(private todos: Todo[]) {
    }

    add(todo: Todo) {
        var newId = this.nextId;
    }

    getAll() {
        return this.todos;
    }
    
}
