
interface Todo {
    name: string;
    completed?: boolean;
}

interface ITodoService {
    add(todo: Todo): Todo;
    delete(todo: Todo): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}

var todo: Todo = {
    name: "Pick up drycleaning"
};