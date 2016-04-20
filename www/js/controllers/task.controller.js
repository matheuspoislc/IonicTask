controllers.controller('TaskCtrl', function($scope, TaskService, $ionicPopup, $ionicListDelegate){
  $scope.lista = TaskService.recuperarTarefas();

  $scope.showPopup = function(item) {
    var isUpdate = angular.isDefined(item);
    if(isUpdate){
      $scope.task = item
    }else{
      $scope.task = {
      pronto: false
    };
  }

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
              alert ('Nome obrigatorio');
              e.preventDefault();
            } else {
              if(!isUpdate){
              $scope.lista.push($scope.task);
            }
            $ionicListDelegate.closeOptionButtons();
            }
          }
        }
      ]
    });
  };

$scope.toggleDelete = function() {
  $scope.shouldShowDelete = !$scope.shouldShowDelete;
}

$scope.deletar = function(item) {
  $scope.lista.splice($scope.lista.indexOf(item), 1);
}

$scope.showConfirm = function(item) {
  var confirmPopup = $ionicPopup.confirm({
    title: 'Excluir tarefa',
    template: 'Voce tem certeza que quer excluir esta tarefa?'
  });

confirmPopup.then(function(res) {
    if(res) {
      $scope.deletar(item);
      alert ('Tarefa excluida com sucesso!')
    } else {
      console.log('You are not sure');
    }
  });
};


});
