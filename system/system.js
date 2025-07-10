document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('#input');
  const btn = document.querySelector('#plus');
  const List = document.querySelector('#list');

  // Carregar tarefas do localStorage
  carregarTarefas();

  // Clique no botão "+"
  btn.addEventListener('click', () => {
    const texto = input.value.trim();
    if (texto === '') return;

    adicionarTarefaNaLista(texto);
    atualizarLocalStorage();
    input.value = '';
  });

  function adicionarTarefaNaLista(texto, concluida = false) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = texto;
    li.appendChild(span);

    // Grupo de botões
    const btnGroup = document.createElement('div');
    btnGroup.className = "btn-group";

    const marcarBtn = document.createElement('button');
    marcarBtn.textContent = '✔';
    marcarBtn.className = 'done';
    marcarBtn.addEventListener('click', () => {
      li.classList.toggle('done');
      atualizarLocalStorage();
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '🗑';
    removeBtn.className = 'remove';
    removeBtn.addEventListener('click', () => {
      li.remove();
      atualizarLocalStorage();
    });

    btnGroup.appendChild(marcarBtn);
    btnGroup.appendChild(removeBtn);
    li.appendChild(btnGroup);

    if (concluida) li.classList.add('done');

    List.appendChild(li);
  }

  function atualizarLocalStorage() {
    const tarefas = Array.from(List.querySelectorAll('li')).map(li => ({
      texto: li.querySelector('span').textContent,
      concluida: li.classList.contains('done')
    }));

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  function carregarTarefas() {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefasSalvas.forEach(tarefa => {
      adicionarTarefaNaLista(tarefa.texto, tarefa.concluida);
    });
  }
});
