import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { ITarefa } from "../types/ITarefa";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [valorSelecionado, setSelecionado] = useState<ITarefa>();
  const [cronometroAtivado, setCronometro] = useState<boolean>();

  function selecionarTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => (
      {
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id
      }
    )));
  };

  function finalizarTarefa() {
    if (valorSelecionado) {
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === valorSelecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Cronometro selecionado={valorSelecionado} finalizarTarefa={finalizarTarefa} setCronometro={setCronometro} />
      <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa} cronometroAtivado={cronometroAtivado}/>
    </div>
  );
}

export default App;
