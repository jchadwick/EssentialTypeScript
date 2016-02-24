interface Todo {
    id: number;
    name: string;
    state: TodoState;
}

enum TodoState {
    Active = 1,
    Complete = 2
}