class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List{
  constructor() {

    //chama o método construtor da classe pai
    super();

    this.usuario = 'João';
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}