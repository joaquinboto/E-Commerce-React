import {Link} from 'react-router-dom'
import {products} from '../products'
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
            {products.map(product => {
                return (
                    <BotonSubMenu key={product.id}>
                        <Link className="nav-subMenu" to={product.categoria}>{product.categoria}</Link>
                    </BotonSubMenu>
                )
            })}
        </ContainerSubmenu>
    )



}