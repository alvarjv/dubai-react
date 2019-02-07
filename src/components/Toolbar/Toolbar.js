import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../Button';
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar fixed-top">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar__logo">
        <a href="/"> Banquetes Dubai </a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to='/'>Nosotros</Link>
          </li>
          <li>
          <Link to='/'>Portafolio</Link>
          </li>
          <li>
          <Link to='/servicios'>Servicios</Link>
          </li>
          <li>
          <Link to='/'>Contacto</Link>
          </li>
          <li>
        <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" /> 
                    </span>
                    presupuesto
                </ButtonContainer>
            </Link>
            </li>
            </ul>
      </div>
    </nav>
  </header>
)

export default toolbar;

