interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}

interface Todo {
    id: number;
    name: string;
    state: TodoState;
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}
