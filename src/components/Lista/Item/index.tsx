import { ITarefa } from '../../../types/ITarefa';
import style from './Item.module.scss';

interface Props {
    detalheItem: ITarefa,
    selecionarTarefa(tarefaSelecionada: ITarefa): void
}

export default function Item({ detalheItem, selecionarTarefa }: Props) {
    return (
        <li
            className={`${style.item} ${detalheItem.selecionado ? style.itemSelecionado : ''} ${detalheItem.completado ? style.itemCompletado : ''}`}
            onClick={() => !detalheItem.completado && selecionarTarefa(detalheItem)}>
            <h3>{detalheItem.tarefa}</h3>
            <span>{detalheItem.tempo}</span>
            {detalheItem.completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    );
}
