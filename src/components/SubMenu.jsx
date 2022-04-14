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

    appearance: none;
    background-color: transparent;
    border: 0.125em solid #1A1A1A;
    box-sizing: border-box;
    color: #3B3B3B;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 5px 0;
    min-height: 3rem;
    min-width: 0;
    outline: none;
    padding: 7px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
   
   
   &:disabled {
    pointer-events: none;
   }
   
   &:hover {
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
   }
   
   &:active {
    box-shadow: none;
    transform: translateY(0);
   } 
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
        </ContainerSubmenu>
    )



}