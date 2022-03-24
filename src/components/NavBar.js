



const navBar = () => {

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
            <span class="material-icons-outlined">
            shopping_cart
            </span>
          </div>
        </>
      );
}



export default navBar
