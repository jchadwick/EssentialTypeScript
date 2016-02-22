import { Todo as TodoTask, TodoState } from './model';
import { TodoService } from './DataAccess';


let service = new TodoService([]);

service.add({
    id: 1,
    name: 'Pick up drycleaning',
    state: TodoState.New
});

let todos = service.getAll();

todos.forEach(todo =>
    console.log(`${todo.name} [${TodoState[todo.state]}]`) 
)