import React from 'react'
import './Map.sass'

import { useEffect } from "react";

export default function Map() {
    useEffect(() => {
        const iframe = document.querySelector('#map iframe');
    
        // wait for the iframe to load
        iframe.addEventListener('load', () => {
          const iframeWindow = iframe.contentWindow;
    
          // add a message event listener to the iframe window
          iframeWindow.addEventListener('message', event => {
            if (event.origin !== 'https://www.google.com') return;
    
            // get the place-name element from the message data
            const placeName = event.data.querySelector('.place-name');
            placeName.textContent = 'Boucherie Fellah';
          });
    
          // send a message to the iframe to request the place-name element
          iframeWindow.postMessage({ type: 'GET_PLACE_NAME' }, 'https://www.google.com');
        });
      }, []);

  return (
    <div id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157.41067353304854!2d4.320334501727031!3d50.857632142321464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3faefb60f3b%3A0x3be8b7861b0ae6a1!2sChau.%20de%20Gand%20399%2C%201080%20Molenbeek-Saint-Jean!5e0!3m2!1sfr!2sbe!4v1677677040154!5m2!1sfr!2sbe"
        width="100%"
        height="350"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}


