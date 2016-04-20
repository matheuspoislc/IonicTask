services.factory('TaskService', function(){
  var lista = [
    {nome:'Tarefa 1', pronto: false},
    {nome:'Tarefa 2', pronto: false},
    {nome:'Tarefa 3', pronto: true},
    {nome:'Tarefa 4', pronto: true},
    {nome:'Tarefa 5', pronto: false}
  ];

  this.recuperarTarefas = function () {
    return lista;
  };
  return this;
});
