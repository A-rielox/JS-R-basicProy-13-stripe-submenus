import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
   const {
      isSubmenuOpen,
      location,
      page: { page, links },
   } = useGlobalContext();
   const container = useRef(null);
   // console.log(location); // {center: 578.891, bottom: 61.494}

   // las columnas a ver dentro del despliegue
   const [columns, setColumns] = useState('col-2');

   // posicionando el recuadro bajo la palabra
   useEffect(() => {
      setColumns('col-2'); //por default
      const submenu = container.current;
      const { center, bottom } = location;

      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;

      if (links.length === 3) {
         setColumns('col-3');
      }
      if (links.length > 3) {
         setColumns('col-4');
      }
   }, [location, links]);

   return (
      <aside
         className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
         ref={container}
      >
         <h4>{page}</h4>

         <div className={`submenu-center ${columns}`}>
            {links.map((link, index) => {
               const { label, icon, url } = link;

               return (
                  <a href={url} key={index}>
                     {icon}
                     {label}
                  </a>
               );
            })}
         </div>
      </aside>
   );
};

export default Submenu;
