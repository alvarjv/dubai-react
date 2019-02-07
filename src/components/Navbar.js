import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { Transform } from 'stream';
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-4 ">
            {/* 
            https://www.iconfinder.com/icons/1243689/call_phone_icon Creative Commons (Attribution 3.0 Unported); https://www.iconfinder.com/Makoto_msk */}
            <Link to='/'>
            <img src={logo} alt="logo dubai" className="navbar-brand"></img>
            </Link>
            <ul className="navbar-nav align-item-center">
            <li className="nav-item ml-3 "><Link to='/' className="navbar-link">Inicio</Link> </li> 
            <li className="nav-item ml-3 "><Link to='/' className="navbar-link">Nosotros</Link> </li>
            <li className="nav-item ml-3 "><Link to='/portafolio' className="navbar-link">Portafolio</Link> </li>
            <li className="nav-item ml-3 "><Link to='/' className="navbar-link">Contacto</Link> </li>
            </ul>
            <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" /> 
                    </span>
                    presupuesto
                </ButtonContainer>
            </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.div`
background: var(--mainBlue);

a.navbar-link {
    color: var(--mainWhite)  !important;
    font-size: 1.8rem;
    text-transform:capitalize;
}
`;