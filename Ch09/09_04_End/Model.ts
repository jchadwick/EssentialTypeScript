export interface Todo {
    id: number;
    name: string;
    state: TodoState;
}

export enum TodoState {
    Active = 1,
    Complete = 2
}