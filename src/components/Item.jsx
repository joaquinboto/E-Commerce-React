
import './Button.css'
import {Link} from 'react-router-dom'



export default function Items ({imagen , nombre , precio , id}) {


    return (

        <div className="cardProducto">
            <img className="card-img-top" alt='imagenProducto' src={imagen}>
            </img>
            <div className="cardBody">
                <span className="card-title">
                    {nombre}
                </span>
                <strong className="card-text">
                   Precio: ${precio}
                </strong>
                <button class="cta">
                    <span class="hover-underline-animation"> <Link to={`/Item/${id}`}>Shop now </Link></span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                        <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                    </svg>
                </button>
            </div>
        </div>





    )

}





