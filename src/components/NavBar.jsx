import CartWidget from "./CartWidget";
import React, {useState} from "react"

function NavBar () {

    const [item , setItem] = useState()

    return (
        <>
        <div className="divNav">
            <h1 className="h1Logo">Logo</h1>
            <nav className="navE">
            <ul className="lista">
                <li className="listadoItem">Inicio</li>
                <li className="listadoItem">E-SHOP
                <ul className="listaDrop">
                <li className="listadoItem drop">Remeras</li>
                <li className="listadoItem drop">Pantalones</li>
                <li className="listadoItem drop">Camisas</li>
                <li className="listadoItem drop">Buzos</li>
                </ul>
                </li>
                <li className="listadoItem">Preguntas frecuentes</li>
                <li className="listadoItem">Contacto</li>
            </ul>
            </nav>
            <CartWidget></CartWidget>
          </div>
        </>
      );
}



export default NavBar
