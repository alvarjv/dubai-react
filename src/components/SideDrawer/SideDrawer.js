import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../Button';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
return (    
<nav className={drawerClasses}>
<ul>
            <li>
          <br></br><br></br><br></br><br></br>
          </li>
          <li>
          <Link to='/' className="ml-auto">
        <button className="cart-btn"> Nosotros </button>
            </Link>
          </li>
          <li>
          <Link to='/' className="ml-auto">
        <button className="cart-btn"> Portafolio </button>
            </Link>
          </li>
          <li>
          <Link to='/servicios' className="ml-auto">
        <button className="cart-btn"> Servicios </button>
            </Link>
          </li>
          <li>
          <Link to='/' className="ml-auto">
        <button className="cart-btn"> Contacto </button>
            </Link>
          </li>
          <li>
        <Link to='/presupuesto' className="ml-auto">
        <button className="cart-btn"> Presupuesto </button>
            </Link>
            </li>
            </ul>
</nav>
);
};

export default sideDrawer;