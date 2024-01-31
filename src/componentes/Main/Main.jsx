import React from "react";
import Pastel from "./pastel.png"
import Caldo from "./caldo.png"
import Coca from "./coca.png"

export default function Main() {
    return (
        <main>
            {/* <h1>Olá eu sou a main</h1> */}

            {/* <div className="produtos">
<img src={Pastel} alt="Imagem de um pastel apetitoso" />
<img src={Caldo} alt="Imagem de um caldo de cana geladinho" />
<img className="coquinha" src={Coca} alt="Imagem de uma coca de pastelaria" />

</div> */}

            <section>
                <img className="galeriaMain" src={Pastel} alt="Imagem de um pastel apetitoso" />
                <h3>R$10,00</h3>
                <button> Carrinho </button>
            </section>

            <section>
                <img className="galeriaMain" src={Caldo} alt="Imagem de um caldo de cana geladinho" />
                <h3>R$7,00</h3>
                <button> Carrinho </button>
            </section>

            <section>
                <img className="galeriaMainCoquinha" src={Coca} alt="Imagem de uma coca de pastelaria" />
                <h3>R$6,00</h3>
                <button> Carrinho </button>
            </section>

        </main>
    )
}
