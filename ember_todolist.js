

{{view Todos.CreateTodoView id="new-todo" placeholder="What needs to be done?"}}

<div id="stats">
  {{#view Ember.Button target="Todos.todosController" action="clearCompletedTodos"}}
    Clear Completed Todos
  {{/view}}
  
  {{Todos.todosController.remaining}} remaining
</div>

{{view Ember.Checkbox class="mark-all-done"
  title="Mark All as Done"
  disabledBinding="Todos.todosController.isEmpty"
  valueBinding="Todos.todosController.allAreDone"}}

<ul>
{{#each Todos.todosController}}
  <li {{bindAttr class="isDone"}}>
    {{view Ember.Checkbox titleBinding="title" valueBinding="isDone"}}
  </li>
{{/each}}
</ul>

require('todos/vendor/jquery-1.7.1');
require('todos/vendor/ember-0.9.5');
require('todos/templates/main_view');

Todos = Ember.Application.create();

Todos.Todo = Ember.Object.extend({
  title: null,
  isDone: false
});

Todos.todosController = Ember.ArrayController.create({
  content: [],

  createTodo: function(title) {
    var todo = Todos.Todo.create({ title: title });
    this.pushObject(todo);
  },

  clearCompletedTodos: function() {
    this.filterProperty('isDone', true).forEach(this.removeObject, this);
  },

  remaining: function() {
    return this.filterProperty('isDone', false).get('length');
  }.property('@each.isDone'),

  isEmpty: function() {
    return this.get('length') === 0;
  }.property('length'),

  allAreDone: function(key, value) {
    if (arguments.length === 2) {
      this.setEach('isDone', value);

      return value;
    } else {
      return !this.get('isEmpty') && this.everyProperty('isDone', true);
    }
  }.property('@each.isDone')
});

Todos.CreateTodoView = Ember.TextField.extend({
  insertNewline: function() {
    var value = this.get('value');

    if (value) {
      Todos.todosController.createTodo(value);
      this.set('value', '');
    }
  }
});

Todos.MainView = Ember.View.extend({
  templateName: 'main_view'
});