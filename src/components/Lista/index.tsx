import { ITarefa } from "../../types/ITarefa";
import Item from '../Lista/Item';
import style from "./Lista.module.scss";

interface Props{
    tarefas: ITarefa[],
    selecionarTarefa(tarefaSelecionada: ITarefa) : void
}

function Lista({tarefas, selecionarTarefa} : Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item key={item.id} detalheItem={item} selecionarTarefa={selecionarTarefa}/>
                ))}
            </ul>
        </aside>
    );
}

export default Lista;
