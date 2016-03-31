class TodoApp {
    
    private todoService: ITodoService;
    private todoList: TodoListComponent;

    constructor(el, todos) {

        this.todoService = new TodoService(todos);
        this.initialize(el);
    }

    addTodo(todoName) {
        this.todoService.add(todoName);
        this.renderTodos();
    }

    clearCompleted() {
        this.todoService.clearCompleted();
        this.renderTodos();
    }

    toggleTodoState(todoId) {
        this.todoService.toggle(todoId);
        this.renderTodos();
    }

    renderTodos() {
        var todos = this.todoService.getAll();
        this.todoList.render(todos);
    }

    initialize(el) {

        var _this = this;

        var addTodoFormEl = el.getElementsByClassName('add-todo')[0],
            addTodoNameEl = addTodoFormEl.getElementsByTagName('input')[0],
            todoListEl = el.getElementsByClassName('todo-list')[0],
            clearCompletedEl = el.getElementsByClassName('clear-completed')[0];

        addTodoFormEl.addEventListener('submit', function(evnt) {
            _this.addTodo(addTodoNameEl.value)
            addTodoNameEl.value = '';
            evnt.preventDefault();
        });

        todoListEl.addEventListener('todo-toggle', function(evnt) {
            var todoId = evnt.detail.todoId;
            _this.todoService.toggle(todoId);
            _this.renderTodos();
        });

        clearCompletedEl.addEventListener('click', function() {
            _this.clearCompleted();
        });

        this.todoList = new TodoListComponent(todoListEl);

        this.renderTodos();
    }

}