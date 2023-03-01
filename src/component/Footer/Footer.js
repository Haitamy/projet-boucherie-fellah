import React from "react";
import './Footer.sass'
import {FaFacebookSquare,FaInstagram,FaTiktok,FaYoutube} from 'react-icons/fa'


export default function Footer() {
  return (
    <div id="footer">
      <h3>Boucherie Fellah</h3>
      <hr />
      <p>Chaussée de Gand 399, 1080 Molenbeek-Saint-Jean</p>
      <div className="social">
        <a href="https://www.facebook.com/profile.php?id=100069264544004&sk=about_contact_and_basic_info&locale=fr_FR" target={"_blank"}>
            <FaFacebookSquare className="icon"/>
        </a>
        <a href="https://www.instagram.com/boucheriefellah/?hl=fr">
        <FaInstagram className="icon"/>
        </a>
        <a href="">
        <FaTiktok className="icon"/>
        </a>
        <a href="https://www.youtube.com/@boucheriefellah">
        <FaYoutube className="icon" />
        </a>
      </div>
    </div>
  );
}
