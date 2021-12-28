import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
   const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

   // para desplegar el recuadro
   const displaySubmenu = e => {
      const page = e.target.textContent;
      const tempBtn = e.target.getBoundingClientRect();
      const center = (tempBtn.left + tempBtn.right) / 2;
      const bottom = tempBtn.bottom - 3;

      openSubmenu(page, { center, bottom });
   };

   // remueve el recuadro 1/2 , al estar en el navbar fuera de un boton
   const handleSubmenu = event => {
      if (!event.target.classList.contains('link-btn')) {
         closeSubmenu();
      }
   };

   return (
      <nav className="nav" onMouseOver={handleSubmenu}>
         <div className="nav-center">
            <div className="nav-header">
               <img src={logo} alt="stripe" className="nav-logo" />

               <button className="btn toggle-btn" onClick={openSidebar}>
                  <FaBars />
               </button>
            </div>

            <ul className="nav-links">
               <li>
                  <button className="link-btn" onMouseOver={displaySubmenu}>
                     products
                  </button>
               </li>
               <li>
                  <button className="link-btn" onMouseOver={displaySubmenu}>
                     developers
                  </button>
               </li>
               <li>
                  <button className="link-btn" onMouseOver={displaySubmenu}>
                     company
                  </button>
               </li>
            </ul>

            <button className="btn signin-btn">sign in</button>
         </div>
      </nav>
   );
};

export default Navbar;
