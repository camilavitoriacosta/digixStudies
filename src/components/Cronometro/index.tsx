import style from './Cronometro.module.scss'
import Botao from '../Botao'
import Relogio from './Relogio';
import { tempoParaSegundos } from '../../common/utils/date';

export default function Cronometro() {
    console.log('conversao', tempoParaSegundos('01:00:00'));

    return (
        <div className={style.cronometro}>
            <p className='titulo'>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>Iniciar</Botao>
        </div>
    );
}
