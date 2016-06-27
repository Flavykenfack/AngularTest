angular
  .module('app')
  .service('Save', function () {
    var Save = this;
    Save.save = function (toBeSaved) {
      console.log('Todo save', toBeSaved);
      var TodoSerializable = JSON.stringify(toBeSaved);
      localStorage.setItem("TodoSerializable", TodoSerializable);
    };
  });

