import React, { useState } from "react"; //Chamando o hook useState
import Pastel from "./pastel.png"
import Caldo from "./caldo.png"
import Coca from "./coca.png"
import Carrinho from "./carrinho.png" //importando a imagem da pasta main
import Carrinho2 from "../../assets/carrinho2.png" //importando a imagem da pasta assets
import Lixeira from "./lixeira.png"

export default function Main() {

    //1º criar uma const 
    //2º criar uma array [] que vai guardar duas coisas, dois parâmetros. [estado, setEstado]
    //3º receber = o hook useState ()
    //4º dentro do () colocar o valor inicial (0) ("Karynne") ("Zebra") ("azul")

    const [numero, setNumero] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [numero3, setNumero3] = useState(0)


    //const [a coisa, habilidade de mudar essa coisa] = useState(valor inicial)


    //---- Função para o card 1


    //-----------------SEM CONDIÇÃO USANDO ARROW FUNCTION

    // const AdicionarCardUm = () => {
    // setNumero(numero + 1)
    // }

    //-----------------COM CONDIÇÃO USANDO ARROW FUNCTION

    const AdicionarCardUm = () => {

        if (numero < 10) {
            setNumero(numero + 1)
        }
    }

    //USANDO FUNCTION NORMAL, PARA REMOVER
    function RemoverCardUm() {

        if (numero > 0) {
            setNumero(numero - 1)
        }
    }

    //USANDO FUNCTION NORMAL, PARA LIMPAR

    function LimparCardUm() {
        setNumero(0)
    }

    //---- Função para o card 2

    const AdicionarCardDois = () => {
        if (numero2 < 10) {
            setNumero2(numero2 + 1)
        }
    }


    //USANDO FUNCTION NORMAL, PARA REMOVER
    function RemoverCardDois() {

        if (numero2 > 0) {
            setNumero2(numero2 - 1)
        }
    }

    //USANDO FUNCTION NORMAL, PARA LIMPAR

    function LimparCardDois() {
        setNumero2(0)
    }


    //---- Função para o card 3

    const AdicionarCardTres = () => {
        if (numero3 < 15) {
            setNumero3(numero3 + 1)
        }
    }


  //USANDO FUNCTION NORMAL, PARA REMOVER
  function RemoverCardTres() {

    if(numero3 > 0) {
        setNumero3(numero3 - 1)
    }
}

//USANDO FUNCTION NORMAL, PARA LIMPAR

function LimparCardTres(){
setNumero3(0)
}




    return (
        <main>

            <section>
                <img className="galeriaMain" src={Pastel} alt="Imagem de um pastel apetitoso" />
                <h3>R$10,00</h3>
                <img onClick={AdicionarCardUm} src={Carrinho} alt="" />
                <h2> {numero} Itens </h2>
                <button onClick={RemoverCardUm}> - </button>
                 <img onClick={LimparCardUm} src={Lixeira} alt=""/> 
            </section>

            <section>
                <img className="galeriaMain" src={Caldo} alt="Imagem de um caldo de cana geladinho" />
                <h3>R$7,00</h3>
                <button onClick={AdicionarCardDois}>   <img src={Carrinho2} alt="" /> Carrinho </button>
                <h2> {numero2} </h2>
                <button onClick={RemoverCardDois}> - </button>
                <button onClick={LimparCardDois}> Limpar </button>
            </section>

            <section>
                <img className="galeriaMainCoquinha" src={Coca} alt="Imagem de uma coca de pastelaria" />
                <h3>R$6,00</h3>
                <button onClick={AdicionarCardTres}> Carrinho </button>
                <h2> {numero3} </h2>
                <button onClick={RemoverCardTres}> - </button>
                <button onClick={LimparCardTres}> Limpar </button>
            </section>
        </main>
    )
}
