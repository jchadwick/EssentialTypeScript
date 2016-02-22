export interface Todo {
    id: number;
    name: string;
    state: TodoState;
}

export enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}
