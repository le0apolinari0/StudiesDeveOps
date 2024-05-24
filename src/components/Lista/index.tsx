
import style from './Lista.module.scss';
import Item from "./Item";
import { IntTarefa } from '../../types/tarefas';

interface Props{
  tarefas : IntTarefa[],
  selecionaTarefa:(tarefaSelecionada: IntTarefa) => void
}

 export default function Lista({tarefas, selecionaTarefa}: Props){ 
    return(
        <aside className={style.listaTarefas}>
        <h2> Estudos do Dia</h2>
         <ul>
            {tarefas.map(item =>(
              <Item
              selecionatarefa={selecionaTarefa}
              key={item.id}
              {...item}/>
            ))} 
         </ul>
        </aside>
    )
}


