import React, {useState} from "react"; //Chamando o hook useState
import Pastel from "./pastel.png"
import Caldo from "./caldo.png"
import Coca from "./coca.png"
import Carrinho from "./carrinho.png" //importando a imagem da pasta main
import Carrinho2 from "../../assets/carrinho2.png" //importando a imagem da pasta assets

export default function Main() {

//1º criar uma const 
//2º criar uma array [] que vai guardar duas coisas, dois parâmetros. [estado, setEstado]
//3º receber = o hook useState ()
//4º dentro do () colocar o valor inicial (0) ("Karynne") ("Zebra") ("azul")

const [numero, setNumero] = useState (0)
//const [a coisa, habilidade de mudar essa coisa] = useState(valor inicial)


//SEM CONDIÇÃO
// const Adicionar = () => {
// setNumero(numero + 1)
// }

//COM CONDIÇÃO
 
const Adicionar = () => {
  
if(numero < 10){
setNumero(numero +1)
}

    }



    return (
        <main>
           
            <section>
                <img className="galeriaMain" src={Pastel} alt="Imagem de um pastel apetitoso" />
                <h3>R$10,00</h3>
                <img onClick={Adicionar} src={Carrinho} alt="" />
               
                <h2> {numero} Itens </h2>
 
            </section>

            <section>
                <img className="galeriaMain" src={Caldo} alt="Imagem de um caldo de cana geladinho" />
                <h3>R$7,00</h3>
                <button>   <img src={Carrinho2} alt="" /> Carrinho </button>
                <h2>0</h2>
            </section>

            <section>
                <img className="galeriaMainCoquinha" src={Coca} alt="Imagem de uma coca de pastelaria" />
                <h3>R$6,00</h3>
                <button> Carrinho </button>
                <h2>0</h2>

            </section>

        </main>
    )
}
