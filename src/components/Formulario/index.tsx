
import React, { useState } from "react"; 
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { IntTarefa } from "../../types/tarefas";
import {v4 as uuidv4} from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<IntTarefa[]>>
    
}

function Formulario({setTarefas}: Props){
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");
  function  addTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
          setTarefas(
           tarefasAntigas => [...tarefasAntigas,{
                    tarefa,
                    tempo,
                    selecionado:false,
                      completado:false,
                        id: uuidv4()
       }]);
         setTarefa("");
         setTempo("00:00");

        }
    return(
<form className={style.novaTarefa} onSubmit={addTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                 Adicione um Novo Estudo
                </label>
                <input 
                type="text"
                name="tarefa"
                id="tarefa"
                value={tarefa}
                onChange={eventoTarefa => setTarefa(eventoTarefa.target.value)}
                placeholder=" O que voçê deseja estudar ?"
                required />

            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                  Adicione um Tempo
                </label>
                <input 
                type="time"
                step="1"
                name="tempo"
                value={tempo}
                onChange={eventoTempo => setTempo( eventoTempo.target.value)}
                id="tempo"
                min="00:00:00"
                max="10:30:00"
                required
                 />

            </div>
            <Botao type= "submit">
                Adicionar 
            </Botao>
            </form>
    )
  }


export default Formulario;