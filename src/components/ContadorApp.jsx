import { useState } from "react";
const ContadorApp = ({ value }) => {

    const[contador, setContador] = useState (value)

    const handletbuton = () => {
        setContador(contador +1 )
    };
    return (
        <>
            <h1>Contador:</h1>
            <p>{contador}</p>
            <button onClick={handletbuton}>
                Soy un botton
            </button>
        </>
    )
}

export default ContadorApp
