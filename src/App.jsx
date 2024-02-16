import React from "react"; //opcional de escrever
import "./App.css"  //entrando no arquivo App.css

import Header from "./componentes/Header/Header.jsx"
import Main from "./componentes/Main/Main.jsx"
import Footer from "./componentes/Footer/Footer.jsx"

function App(){
  return(
    <> 
     {/* <h1> Aqui será exibido no navegador</h1> */}
    <Header />
    <Main />
    <Footer />
    </>

  )
}

export default App;