import "./Header.sass";
import React, { useState, useEffect } from 'react';
import logo from './logofellah.png'

function Header() {
  const [isSolid, setIsSolid] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isSolid ? 'header-solid' : 'header'}>
      <img src={logo} alt="" />
      <h2>Boucherie Fellah</h2>
    </div>
  );
}

export default Header;
