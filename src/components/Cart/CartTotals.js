import React from 'react';
import {Link} from 'react-router-dom';


export default function CartTotals({value}) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
 <React.Fragment>
     <div className="container">
     <div className="row">
     <div className="col-10 mt-2 ml-5 ml-m-auto col-s-8 text-capitalize text-right">
     <Link to="/"> 
     <button className="btn btn-outline-danger text-uppercase px-5"
     type="button"
     onClick={()=> clearCart()}>Limpiar Carrito</button>
     </Link>
     <h5>
         <span className="text-title">subtotal : </span> <strong>$ {cartSubTotal}</strong>
     </h5>
     <h5>
         <span className="text-title">iva: </span> <strong>$ {cartTax}</strong>
     </h5>
     <h5>
         <span className="text-title">total : </span> <strong>$ {cartTotal}</strong>
     </h5>
     </div>
     </div>
     </div>
 </React.Fragment>
  );
}
