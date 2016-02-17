interface Todo {
    name: string;
    state: TodoState;
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}


class TodoService {

    private static _lastId: number = 0;

    private get nextId() {
        return TodoService.getNextId();
    }

    private set nextId(nextId) {
        TodoService._lastId = nextId - 1;
    }

    constructor(private todos: Todo[]) {
    }

    add(todo: Todo) {
        var newId = this.nextId;
    }

    private getAll() {
        return this.todos;
    }

    static getNextId() {
        return TodoService.lastId += 1;
    }
}


abstract class TodoStateChanger {

    constructor(protected newState: TodoState) {
    }

    abstract canChangeState(todo: Todo): boolean;

    changeState(todo: Todo): Todo {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }

        return todo;
    }

}

class CompleteTodoStateChanger extends TodoStateChanger {

    constructor() {
        super(TodoState.Complete);
    }

    canChangeState(todo: Todo): boolean {
        return !!todo && (
            todo.state == TodoState.Active
            || todo.state == TodoState.Deleted
        )
    }

}


class SmartTodo {
    constructor(public name: string) {
    }
}