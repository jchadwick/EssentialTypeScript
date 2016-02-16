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

abstract class TodoStateChanger {
    
    constructor(private newState: TodoState) {
    }
    
    abstract canChangeState(todo: Todo): boolean;
    
    changeState(todo: Todo): Todo {
        if(this.canChangeState(todo)) {
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

