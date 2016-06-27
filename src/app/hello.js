function helloController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: helloController
  });
