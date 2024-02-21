import React, { useState } from "react"

function Footer() {


    //SETTIMEOUT: É UM MÉTODO QUE EXECUTARÁ UM CÓDIGO APÓS O TEMPO ESPECIFICADO (DELAY), O TEMPO É CORRESPONDIDO POR MILISSEGUNDOS, EXEMPLO: 3SEG EQUIVALE 3000, 6SEG EQUIVALE 6000

    //setTimeout(()=>{}, tempo)


    const Mensagem = () => {
        setTimeout(() => {
            alert("Você recebeu 1 milhão")
        }, 4000)
    }

    //---Exemplo 2 com setTimeout

    const [numero, setNumero] = useState(0)

    const Add = () => {
        setTimeout(() => {
            setNumero(numero + 1)
        }, 2000)
    }

    //--SETINTERVAL É UM MÉTODO QUE PERMITE EXECUTAR REPETIDAMENTE UM BLOCO DE CÓDIGO, A CADA INTERVALO DE TEMPO. EXEMPLO: DE 3 EM 3 SEGUNDOS FAÇA TAL COISA.

    //-------------------------------------------

    //O setInterval fora de uma função pode dar loop, CUIDADO!
    // setInterval(()=>{
    //     setNumero2((numero2)=> numero2 + 1)
    // },1000)

    //---------------------------------------------

    //sintaxe do setIntervak

    //setInterval(()=>{
     //   o que queremos que ele faça
    //},tempo) 

    //1seg= 1000, 2seg=2000, 6seg=6000, 10seg=10000


//----------iniciando o cronômetro

    const [numero2, setNumero2] = useState(0)
    const [parar, setParar] = useState()

    //função de iniciar
    const Start = () => {

        //precisamos guardar o setTinterval em uma variavel para depois acessa-lo e chama-lo para depois mudar o estado de setParar chamando esta variavel.
        const PararoSetInterval = setInterval(() => {
            // o setInterval vai ficar repetindo a função em um tempo de 1 segundo.
            setNumero2((numero2) => numero2 + 1)  // função que vai mudar o estado de 0 para numero(0) + 1;
        }, 1000) //tempo de intervalo que a função vai executar.


        setParar(PararoSetInterval) // mudando o estado do
        //cronometro para deixar de ser null e executar a adição. (numero + 1)
    }

    //// E aqui dentro estamos chamando dentro do clearInterval o estado 'parar' assim que clicarmos no evento chamando a função ParaContagem irá parar de executar a função Start

    const PararContagem = () => {
        clearInterval(parar)
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
                <button onClick={Start}>Iniciar</button>
                <button onClick={PararContagem}>Parar</button>
                <button>Zerar</button>
            </div>

        </footer>
    )

}

export default Footer