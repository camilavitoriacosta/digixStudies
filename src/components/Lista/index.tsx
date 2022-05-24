import style from "./Lista.module.scss";
import Item from '../Lista/Item'
import { ITarefa } from "../../types/ITarefa";

function Lista({tarefas}:{tarefas: ITarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} tarefa={item.tarefa} tempo={item.tempo}/>
                ))}
            </ul>
        </aside>
    );
}

export default Lista;