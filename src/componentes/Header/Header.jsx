import React from "react";
import Logo from "../Header/pastelaria.png"
//import Instagram from "../../assets/pastelaria.png"
//import Hemorio from "../../assets/1.png"

//import Apelido from "caminho da imagem"
// ../ sai da pasta/arquivo 
// img src = {apelido}


function Header() {
  return (

    <header>
      <nav>
        {/* <img src="https://static.wixstatic.com/media/9ed99d_2481b4ef3c244aacb4a7be867214cd2b~mv2.png/v1/fill/w_464,h_376,al_c,lg_1,q_85,enc_auto/logo.png" alt="" /> 

<img src={Instagram} alt="" />
<img src={Hemorio} alt="" /> */}
        <img src={Logo} alt="" />

        <ul>
          <li>Cardápio</li>
          <li>Lojas</li>
          <li>Sobre</li>
          <li>Contatos</li>
          <li>Delivery</li>
        </ul>

      </nav>
    </header>

  )
}

export default Header
