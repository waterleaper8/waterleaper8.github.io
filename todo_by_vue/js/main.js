(function() {
  'use strict';

  // Components

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: []
    },
    watch: {
      todos: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true
      }
    },
    mounted: function() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if (confirm('こちらを削除してもよろしいですか？')) {
          this.todos.splice(index, 1);
        }
      },
      purge: function() {
        if (!confirm('完了したTodoをすべて削除してもよろしいですか？')) {
          return;
        }
        this.todos = this.remaining;
      },
      toggle: function(text, e) {
        const inputNode = e.currentTarget.previousElementSibling;
        inputNode.click();
      }
    },
    computed: {
      remaining: function() {
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });
})();

const inputNode = document.getElementById('input');
inputNode.focus();