import { useEffect, useState } from "react";

function App() {

  const [ listaTarefas, setListaTarefas ] = useState ([]);
  const [tarefa, setTarefa ] = useState ( {id: '' , texto: "", status: ""});

  function addTarefa()
  {
    if( tarefa.texto !=="" ){
      setListaTarefas([...listaTarefas, tarefa ]);
    }
  }

  useEffect(() =>{
      setTarefa( { id: "", texto: "" });
  }, [listaTarefas])

  function excluirTarefa(id) {
    const novalista = listaTarefas.filter( tarefa => tarefa.id !== id);
    setListaTarefas(novalista);
  }

  function statusTarefa(id, status)
  {
    const index = listaTarefas.findIndex((tarefa) => tarefa.id === id );
    listaTarefas[index].status = !status;
    setListaTarefas( [...listaTarefas ] )
  }

  return (
    <>
    <div></div>
    <header>
      <h1>TO DO LIST</h1>
    </header>
      <div>
        <input type="text" nome= "tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value, status: false})} />
        <button onClick={addTarefa}>Adicionar</button>
      </div>
      <div>
        <ul> 
          {listaTarefas.map( (item, index ) => (
           <li key={index}>{item.texto} <button onClick={ () => statusTarefa(item.id, item.status)}>{item.status ? 'Concluida' : 'Nao concluida' }</button> <button onClick={ () => excluirTarefa(item.id)}>Excluir</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;