'use strict';

angular.module('yyPageApp')
  .directive('exampleTodo', function () {
    return {
      templateUrl: 'components/example-todo/example-todo.html',
      restrict: 'EA',
      controller:function(localStorageService){
        var _this =this;

        _this.todo = {};
        _this.tempArchiveList = [];
        _this.archivedList = [];
        _this.todoList = [];
        _this.toDoTabs = [
          {'title': 'Current List', 'content': 'todoCurrentList.tpl.html'},
          {'title': 'Archived List', 'content': 'todoArchivedList.tpl.html'}
        ];

        setData();

        /**
         * Retrieve data from local storage if existed, if not set it to default values
         * @returns {*[]}
         */
        function setData() {

          var toDoList, tempArchiveList;

          if (localStorageService.get('yyPage-portfolio-todo-example-list') !== null) {
            toDoList = localStorageService.get('yyPage-portfolio-todo-example-list');

              var getTempArchiveList = function () {
              var tempList = [];
              angular.forEach(toDoList, function (todo) {
                if (todo.isDone) {
                  tempList.unshift(todo);
                }
              });
              return tempList;
            };
            tempArchiveList =getTempArchiveList();
          } else {
            toDoList = [
              {'description': 'Need to call ...', 'isDone': false},
              {'description': 'Need to buy ...', 'isDone': false}
            ];
            tempArchiveList = [];
          }

          _this.toDoList = toDoList;
          _this.tempArchiveList = tempArchiveList;
        };

        if (localStorageService.get('yyPage-portfolio-archived-list') !== null) {
          _this.archivedList = localStorageService.get('yyPage-portfolio-archived-list');
        } else {
          _this.archivedList = [];
        }

        /**
         * Add item todo-example into the beginning of the toDoList array
         * @param {Object} todo
         * @returns {{}}
         */
        _this.addToList = function (todo) {
          _this.toDoList.unshift(
            {
              'description': todo.description,
              'isDone': false
            }
          );
          _this.todo = {};
        };

        _this.addToTempArchiveList = function (todo) {
          console.log(_this.tempArchiveList)
          if (_this.tempArchiveList.indexOf(todo) === -1) {
            _this.tempArchiveList.unshift(todo);
          }
          else {
            _this.tempArchiveList.remove(todo);
          }
        };

        _this.selectAll = function () {
          _this.tempArchiveList = angular.copy(_this.toDoList);
        };
        _this.unselectAll = function () {
          _this.tempArchiveList = [];
        };

        _this.archiveTodo = function () {
          var tempToDoList = [];
          angular.forEach(_this.toDoList, function (todo) {
            if (todo.isDone) {
              _this.archivedList.unshift(todo);
            }
            else {
              tempToDoList.unshift(todo);
            }
          });
          _this.toDoList = tempToDoList;
        };

        _this.saveToDoLocally = function () {
          localStorageService.set('yyPage-portfolio-todo-example-list', _this.toDoList);
          localStorageService.set('yyPage-portfolio-archived-list', _this.archivedList);
        };

        _this.clearLocalToDo = function () {
          localStorageService.remove('yyPage-portfolio-todo-example-list');
          localStorageService.remove('yyPage-portfolio-archived-list');
          _this.toDoList = [
            {'description': 'Need to call ...', 'isDone': false},
            {'description': 'Need to buy ...', 'isDone': false}
          ];
          _this.tempArchiveList = [];
          _this.archivedList = [];
        };

        _this.removeFromList = function (array, indexToBeRemoved) {
          array.splice(indexToBeRemoved, 1);
        };

      },
      controllerAs:'todoCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
