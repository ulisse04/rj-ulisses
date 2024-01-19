import React from 'react';
import { Categorias } from './Categorias';

export const ListadoCategorias = () => {
  return (
    <nav className="navbar">
      <ul className='navbar__botones'>
        <Categorias href='index.html' texto='MOTHERS' />
        <Categorias href='index.html' texto='CPUS' />
        <Categorias href='index.html' texto='RAMS' />
        <Categorias href='index.html' texto='ALMAC.' />
        <Categorias href='index.html' texto='GPUS' />
        <Categorias href='index.html' texto='REFRIG.' />
        <Categorias href='index.html' texto='PSUS' />
        <Categorias href='index.html' texto='GABINETES' />
        <Categorias href='index.html' texto='PERIFERICOS' />
      </ul>
    </nav>
  )
}

export default ListadoCategorias