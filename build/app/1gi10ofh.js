/*! Built with http://stenciljs.com */
App.loadComponents("1gi10ofh",function(t,e,o,i,n){var l=function(){function t(){}return t.prototype.changed=function(t){this.toggledAllCompleted.emit(t.target.checked)},t.prototype.render=function(){return this.todos.length>0?e("section",{c:{main:!0}},e("input",{c:{"toggle-all":!0},o:{change:this.changed.bind(this)},a:{id:"toggle-all",type:"checkbox"},p:{checked:this.allCompleted}}),e("label",{p:{htmlFor:"toggle-all"}},o("Mark all as complete")),e("div",{c:{"todo-list":!0}},this.todos.map(function(t){return e("todo-view",{p:{todo:t}})}))):e("span",0)},t}(),r=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++){e=arguments[o];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},d=function(){function t(){this.todos=[]}return t.prototype.save=function(){},t.prototype.newTodoKeyUp=function(t){if("Enter"===t.key){var e=t.target,o=e.value.trim();o.length&&(this.todos=this.todos.concat([{title:o,completed:!1}]),this.save(),e.value="")}},t.prototype.getRemaining=function(){return this.todos.filter(function(t){return!t.completed})},t.prototype.getCompleted=function(){return this.todos.filter(function(t){return t.completed})},t.prototype.allCompleted=function(){return!this.todos.find(function(t){return!t.completed})},t.prototype.removeCompleted=function(){this.todos=this.getRemaining(),this.save()},t.prototype.toggledCompleted=function(t){var e=t.srcElement.todo,o=this.todos.slice();o[o.findIndex(function(t){return t===e})]=r({},e,{completed:!e.completed}),this.todos=o,this.save()},t.prototype.toggledAllCompleted=function(t){var e=t.detail;console.log("toggledAllCompleted",e),this.todos=this.todos.map(function(t){return r({},t,{completed:e})}),this.save()},t.prototype.updatedTitle=function(t){var e=t.srcElement.todo,o=t.detail;console.log("updatedTitle",e,o),this.save()},t.prototype.deleted=function(t){var e=t.srcElement.todo,o=this.todos.slice();o.splice(this.todos.indexOf(e),1),this.todos=o,this.save()},t.prototype.render=function(){return e("div",0,e("section",{c:{todoapp:!0}},e("header",{c:{header:!0}},e("h1",0,o("todos")),e("input",{c:{"new-todo":!0},o:{keyup:this.newTodoKeyUp.bind(this)},a:{placeholder:"What needs to be done?"},p:{autoFocus:!0}})),e("stencil-router",{a:{id:"router"}},e("stencil-route",{a:{url:"/",component:"todo-welcome",router:"#router"},p:{exact:!0}}),e("stencil-route",{a:{url:"/all",component:"todo-list",router:"#router"},p:{componentProps:{todos:this.todos,allCompleted:this.allCompleted()}}}),e("stencil-route",{a:{url:"/active",component:"todo-list",router:"#router"},p:{componentProps:{todos:this.getRemaining(),allCompleted:this.allCompleted()}}}),e("stencil-route",{a:{url:"/completed",component:"todo-list",router:"#router"},p:{componentProps:{todos:this.getCompleted(),allCompleted:this.allCompleted()}}})),this.todos.length>0?e("footer",{c:{footer:!0}},e("span",{c:{"todo-count":!0}},e("strong",0,this.getRemaining().length),1===this.getRemaining().length?" item ":" items ",o("left")),e("ul",{c:{filters:!0}},e("li",0,e("stencil-route-link",{a:{url:"/all",router:"#router"},p:{activeClass:"selected"}},o("All"))),e("li",0,e("stencil-route-link",{a:{url:"/active",router:"#router"},p:{activeClass:"selected"}},o("Active"))),e("li",0,e("stencil-route-link",{a:{url:"/completed",router:"#router"},p:{activeClass:"selected"}},o("Completed")))),this.getCompleted().length>0?e("button",{c:{"clear-completed":!0},o:{click:this.removeCompleted.bind(this)}},o("Clear completed")):void 0):void 0),e("footer",{c:{info:!0}},e("p",0,o("Double-click to edit a todo")),e("p",0,o("Created by "),e("a",{a:{href:"http://kylecordes.com"}},o("Kyle Cordes")),o(" at "),e("a",{a:{href:"https://oasisdigital.com"}},o("Oasis Digital"))),e("p",0,o("Part of "),e("a",{a:{href:"http://todomvc.com"}},o("TodoMVC")))))},t}(),s=function(){function t(){}return t.prototype.stopEditing=function(t){var e=t.target;this.updatedTitle.emit(e.value.trim()),this.editing=!1},t.prototype.toggleCompleted=function(t){t.preventDefault(),t.stopPropagation(),this.toggledCompleted.emit()},t.prototype.keyUp=function(t){var e=t.target.value.trim();"Enter"===t.key&&(e.length?this.updatedTitle.emit(e):this.deleted.emit(),this.editing=!1),"Esc"===t.key&&(this.editing=!1)},t.prototype.render=function(){var t=this;return e("li",{c:{completed:this.todo.completed,editing:this.editing}},e("div",{c:{view:!0}},e("input",{c:{toggle:!0},o:{click:this.toggleCompleted.bind(this)},a:{type:"checkbox"},p:{checked:this.todo.completed}}),e("label",{o:{dblclick:function(){return t.editing=!0}}},this.todo.title),e("button",{c:{destroy:!0},o:{click:function(){return t.deleted.emit()}}})),this.editing?e("input",{c:{edit:!0},o:{blur:this.stopEditing.bind(this),keyup:this.keyUp.bind(this)},p:{value:this.todo.title}}):void 0)},t}(),c=function(){function t(){}return t.prototype.render=function(){return e("stencil-router-redirect",{a:{url:"/all"}})},t}();t["TODO-LIST"]=l,t["TODO-MVC"]=d,t["TODO-VIEW"]=s,t["TODO-WELCOME"]=c},["TODO-LIST",[["allCompleted",1,1],["todos",1]],{},[["toggledAllCompleted"]]],["TODO-MVC",[["todos",5]],{}],["TODO-VIEW",[["editing",5],["todo",1]],{},[["toggledCompleted"],["updatedTitle"],["deleted"]]],["TODO-WELCOME",0,{}]);