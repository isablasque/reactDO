import { useEffect, useState } from "react";
import "./App.css"

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
    <div className="top"></div>
    <header>
      <h1>TO DO LIST</h1>
    </header>
      <div className="addBox">
        <input type="text" nome= "tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value, status: false})} />
        <button onClick={addTarefa}><i class="fa-solid fa-circle-plus"></i></button>
      </div>
      <div className="principal">
        <div className="tarefaBox">
          <ul> 
            {listaTarefas.map( (item, index ) => (
            <li className={item.status ? "itemAtivo" : "itemInativo"} key={index}>
            <button onClick={ () => statusTarefa(item.id, item.status)}>{item.status ? <i class="fa-solid fa-circle-check"></i> : <i class="fa-regular fa-circle"></i> }</button> 
            <button onClick={ () => excluirTarefa(item.id)}><i class="fa-solid fa-trash"></i></button>
            {item.texto}
            </li>
            ))}
          </ul>
        </div>
      </div>     
    </>
  );
}

export default App;