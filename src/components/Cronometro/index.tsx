import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/date';
import { ITarefa } from '../../types/ITarefa';
import Botao from '../Botao';
import style from './Cronometro.module.scss';
import Relogio from './Relogio';

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void,
    setCronometro: (cronometroAtivado : boolean) => void
}

export default function Cronometro({ selecionado, finalizarTarefa, setCronometro }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);

    function regressiva(contador : number = 0) {
        setTimeout(() => {
            if(contador > 0){
                // Bloquear Lista
                setCronometro(true);
                setTempo(contador - 1)
                return regressiva(contador - 1);
            }
            finalizarTarefa();
            // Desbloquear Lista
            setCronometro(false);
        }, 1000);

    }

    return (
        <div className={style.cronometro}>
            <p className='titulo'>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)}>Iniciar</Botao>
        </div>
    );
}
