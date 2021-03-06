(function() {

  function TodoItem(content, check) {
    this.content = content;
    this.check = Boolean(check);
    this.time = new Date();
  };

  TodoItem.prototype.getTime = function () {
    return this.time.toDateString();
  };

  TodoItem.prototype.toggle = function () {
    return this.check = !this.check;
  };

  YUI.add('TodoItem', function (Y) {
    Y.TodoItem = TodoItem;
  });
})()