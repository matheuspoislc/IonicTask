controllers.controller('TaskCtrl', function($scope, TaskService, $ionicPopup){
  $scope.lista = TaskService.recuperarTarefas();

  $scope.showPopup = function() {
  $scope.task = {
    pronto: false
  };

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="task.nome">',
      title: 'Escreva a tarefa',
      subTitle: 'Seja suscinto e objetivo',
      scope: $scope,
      buttons: [
        { text: 'Cancelar' },
        {
          text: '<b>Salvar</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.task.nome) {
              alert ('Nome obrigatoria');
              e.preventDefault();
            } else {
              $scope.lista.push($scope.task);
            }
          }
        }
      ]
    });
  };

$scope.toggleDelete = function() {
  $scope.shouldShowDelete = !$scope.shouldShowDelete;
}
});
