function mostrar(tarefa) {
  let div = document.querySelector('div')
  div.innerHTML = `
    <p>Usuário:  ${tarefa.userId}</p>
    <p>Tarefa:  ${tarefa.title}</p>
  `
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    return response.json()
  })
  .then(json => {
    mostrar(json)
  })




fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    return response.json()
  })
  .then(json => console.log(json))

