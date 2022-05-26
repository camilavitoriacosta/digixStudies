import React from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component<
    {
        children: any, 
        type?: "button" | "reset" | "submit" | undefined,
        onClick?: () => void
    }> 
{
    render() {
        const {type = "button", onClick} = this.props;
        return (
            <button type={type} className={style.botao} onClick={onClick}> {this.props.children} </button>
        );
    }
}

export default Botao;

// componente possui uma tag pai do HTML