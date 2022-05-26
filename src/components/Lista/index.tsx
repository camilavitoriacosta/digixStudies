import { ITarefa } from "../../types/ITarefa";
import Item from '../Lista/Item';
import style from "./Lista.module.scss";

interface Props{
    tarefas: ITarefa[],
    selecionarTarefa(tarefaSelecionada: ITarefa) : void,
    cronometroAtivado: boolean | undefined
}

function Lista({tarefas, selecionarTarefa, cronometroAtivado} : Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item key={item.id} detalheItem={item} selecionarTarefa={selecionarTarefa} cronometroAtivado={cronometroAtivado}/>
                ))}
            </ul>
        </aside>
    );
}

export default Lista;
