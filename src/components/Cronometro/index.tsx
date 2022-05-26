import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/date';
import { ITarefa } from '../../types/ITarefa';
import Botao from '../Botao';
import style from './Cronometro.module.scss';
import Relogio from './Relogio';

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);

    return (
        <div className={style.cronometro}>
            <p className='titulo'>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao>Iniciar</Botao>
        </div>
    );
}
