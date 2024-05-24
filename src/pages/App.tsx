
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import { IntTarefa } from '../types/tarefas';
import { useState } from 'react';

function App() {
  const [tarefas, setTarefas] = useState<IntTarefa[]>([]);

   const [selecionado, setSelecionado ]= useState<IntTarefa>();
    
   function selecionaTarefa(tarefaSelecionada:IntTarefa) {
     setSelecionado(tarefaSelecionada);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefas =>({
      ...tarefas, selecionado: tarefas.id === tarefaSelecionada.id ? true : false
     })));
  
 }

 function finalizarTarefa() {
  if(selecionado) {
    setSelecionado(undefined);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
      if(tarefa.id === selecionado.id) {
        return {
          ...tarefa,
          selecionado: false,
          completado: true
        }
      }
      return tarefa;
    }))
  }
}
  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas={setTarefas}/>

     <Lista tarefas={tarefas}
      selecionaTarefa = {selecionaTarefa}/>
      
     <Cronometro selecionado = {selecionado}
     finalizarTarefa ={finalizarTarefa}/>
    </div>
  );
}

export default App;
