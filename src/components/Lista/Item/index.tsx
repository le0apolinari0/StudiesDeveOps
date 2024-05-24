import { IntTarefa } from '../../../types/tarefas';
import style from './Item.module.scss';

interface Props extends IntTarefa {
    selecionatarefa: (tarefaSelecionada:IntTarefa) => void
}

export default function Item({
    tarefa,
     tempo,
      selecionado,
       completado,
        id,
         selecionatarefa}:
          Props){
    return (
        <li className={`${style.Item} ${selecionado ? style.itemSelecionado : ''}  ${completado ? style.itemCompletado : ''}`} 
        onClick={() => !completado && selecionatarefa ({
            tarefa,
             tempo,
              selecionado,
               completado,
                id
        })}>

       <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido}
       aria-label="Tarefa Concluida"></span>}
    </li>
    )
}
