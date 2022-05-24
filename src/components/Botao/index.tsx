import React from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component<
    {
        children: any, 
        type?: "button" | "reset" | "submit" | undefined
    }> 
{
    render() {
        const {type = "button"} = this.props;
        return (
            <button type={type} className={style.botao}> {this.props.children} </button>
        );
    }
}

export default Botao;

// componente possui uma tag pai do HTML