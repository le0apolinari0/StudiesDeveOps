import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundo } from "../../common/utils/time";
import { IntTarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";


interface Props {
    selecionado: IntTarefa | undefined
    finalizarTarefa: () => void
}
export default function Cronometro( {selecionado, finalizarTarefa }: Props ){
    const [tempo, setTempo] = useState<number>();

       useEffect(() =>{
        if (selecionado?.tempo){
            setTempo(tempoParaSegundo(selecionado.tempo));
        }
       }, [selecionado]);

       function regressivaTempo(contadorTempo: number = 0){
         setTimeout(() =>{
            if ( contadorTempo > 0){
                setTempo(contadorTempo - 1);
                return regressivaTempo( contadorTempo - 1);
            }
            finalizarTarefa();
         }, 1000);
       }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um Curso para Iniciar o Cronômetro !
            </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo ={tempo}/>
            </div>
            <div>
            <Botao onClick ={() => regressivaTempo(tempo)}>
              Começar !
            </Botao>
        </div>
        </div>
        
    )
}




