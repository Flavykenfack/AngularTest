angular
  .module('app')
  .component('home', {
    templateUrl: 'app/home.html',
    controller: function (Save) {
      var $ctrl = this;
      $ctrl.maVariable = 'hello';
      $ctrl.maListe = ['Hello', 'Fruits'];
      $ctrl.maListe.push('toto');

      $ctrl.addItem = function () {
        $ctrl.maListe.push($ctrl.maVariable);
        Save.save($ctrl.maListe);
      };

      //    $ctrl.delItem = function (item) {
      //      var index = $ctrl.maListe.indexOf(item);
      //      $ctrl.maListe.splice(index, 1);
      //    };
    }
  });

