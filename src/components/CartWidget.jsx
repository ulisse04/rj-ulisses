import React from 'react';
import carritoLogo from '../img/carrito.png';

export const CartWidget = () => {
    return (
        <div className='carrito'>
            <img src={carritoLogo} alt="Carrito" width={30} className='carrito__logo'/>
            <p className='carrito__cantidadProds'>0</p>
        </div>
    )
}

export default CartWidget