import React from 'react';
import electroBitsLogo from '../img/electrobits.png';
import { ListadoCategorias } from './ListadoCategorias';
import { CartWidget } from './CartWidget';

export const Navbar = () => {
  return (
    <header>
      <h1 className='header__logo'>
        <a href="index.html">
          <img src={electroBitsLogo} alt="Electro-Bits" className="logo__imagen" width={250} height={30} />
        </a>
      </h1>

      <div className='header__cateYcarro'>
        <ListadoCategorias />
        <CartWidget />
      </div>
    </header>
  );
};

export default Navbar