import React, { useState } from "react"

function Footer() {


    //SETTIMEOUT: É UM MÉTODO QUE EXECUTARÁ UM CÓDIGO APÓS O TEMPO ESPECIFICADO (DELAY), O TEMPO É CORRESPONDIDO POR MILISSEGUNDOS, EXEMPLO: 3SEG EQUIVALE 3000, 6SEG EQUIVALE 6000

    const Mensagem = () => {
        setTimeout(() => {
            alert("Você recebeu 1 milhão")
        }, 1000)
    }


    //---Exemplo 2 com setTimeout

    const [numero, setNumero] = useState(0)

    const Add = () => {
        setTimeout(() => {
            setNumero(numero + 1)
        }, 2000)
    }

//--SETINTERVAL É UM MÉTODO QUE PERMITE EXECUTAR REPETIDAMENTE UM BLOCO DE CÓDIGO, A CADA INTERVALO DE TEMPO. EXEMPLO: DE 3 EM 3 SEGUNDOS FAÇA TAL COISA.

const [numero2, setNumero2] = useState(0)

const Iniciar = () => {
    
 setInterval(()=>{
    setNumero2((valor) => valor + 1 )
}, 1000)

}


    return (
        <footer>
            <button onClick={Mensagem}>MENSAGEM</button>

            <div className="boxFooter">
                <h2>Contador usando o setTimeout</h2>
                <h2>{numero}</h2>
                <button onClick={Add}> Add + 1 </button>
            </div>

            <div className="boxFooter">
                <h2>Cronômetro</h2>
                <h2> {numero2} </h2>
                <button onClick={Iniciar}>Start</button>
                <button>Pause</button>
                <button>Clear</button>
            </div>


        </footer>
    )

}

export default Footer