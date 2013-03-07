
todomvc.controller('TodoCtrl', function TodoCtrl( $scope, $location, todoStorage, ){
    var todos = $scope.todos = todoStorage.get();

    $scope.newTodo = "";
    $scope.editedTodo = null;

    $scope.$watch("todos", function(){
        $scope.remainingCount = filterFilter(todos, {completed: false}).length;
        $scope.doneCount = todos.length - $scope.remainingCount;
        
    })
})
      <form id="todo-form" ng-submit="addTodo()">
        <input id="new-todo" placeholder="What needs to be done?" ng-model="newTodo" autofocus>
      </form>


        <li ng-repeat="todo in todos | filter:statusFilter" ng-class="{completed: todo.completed, editing: todo == editedTodo}">
          <div class="view">
            <input class="toggle" type="checkbox" ng-model="todo.completed">
            <label ng-dblclick="editTodo(todo)">{{todo.title}}</label>
            <button class="destroy" ng-click="removeTodo(todo)"></button>
          </div>
          <form ng-submit="doneEditing(todo)">
            <input class="edit" ng-model="todo.title" todo-blur="doneEditing(todo)" todo-focus="todo == editedTodo">
          </form>
        </li>

define(
    [
        "components/flight/lib/component",
        "components/mustache/mustache",
        "app/data",
        "app/templates"
    ],

    function(defineComponent, Mustache, dataStore, templates) {
        return defineComponent(composeBox);

        function composeBox() {
            this.defaultAttrs({
                recipientHintId: "recipient_hint",
                
            })
        }
    }
)