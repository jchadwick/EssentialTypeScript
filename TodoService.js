var TodoService = (function () {

    var _lastId = 0;

    function generateTodoId() {
        return _lastId += 1;
    }
    
    function clone(src) {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    };


    function TodoService(todos) {
        var _this = this;
        
        this.todos = [];
        
        if(todos) {
            todos.forEach(function(todo) {
              _this.add(todo);  
            })
        }
    }

    // Accepts a todo name or todo object
    TodoService.prototype.add = function (input) {

        var todo = {
            id: generateTodoId(),
            name: null,
            state: 1
        };

        if(typeof input === 'string') {
            todo.name = input;
        } 
        else if(typeof input.name === 'string') {
            todo.name = input.name;
        } else {
            throw 'Invalid Todo name!';
        }

        this.todos.push(todo);

        return todo;
    };


    TodoService.prototype.clearCompleted = function () {
       
        this.todos = this.todos.filter(function(x) { 
            return x.state == 1; 
        });
    }
    

    TodoService.prototype.getAll = function () {
        return clone(this.todos);
    };


    TodoService.prototype.getById = function (todoId) {
        var todo = this._find(todoId);
        return clone(todo);
    };
    
    TodoService.prototype.toggle = function (todoId) {

        var todo = this._find(todoId);
        
        if(!todo) return;
        
        switch(todo.state) {
            case 1:
                todo.state = 2;
                break;
            case 2:
                todo.state = 1;
                break;
        }
    }

    TodoService.prototype._find = function (todoId) {
        var filtered = this.todos.filter(function (x) { 
            return x.id == todoId; 
        });
        
        if (filtered.length) {
            return filtered[0];
        }
        
        return null;
    }
    
    return TodoService;
})();