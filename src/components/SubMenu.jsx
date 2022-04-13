import {Link} from 'react-router-dom'
import {subMenuItems} from '../products'
import styled from 'styled-components'

export const ContainerSubmenu = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: auto;
`

export const BotonSubMenu = styled.button`
    background-color:black;
    border-radius: 5px;
`

export const SubMenu = () => {


    return(
        <ContainerSubmenu>
            {subMenuItems.map(product => {

                return (
                    <BotonSubMenu key={product.id}>
                        <Link className="nav-subMenu" to={product.path}>{product.nombre}</Link>
                    </BotonSubMenu>
                )
            })}
            <Link to='Productos'><button>Destacados</button></Link>
        </ContainerSubmenu>
    )



}