import React from 'react'
import './Map.sass'

export default function Map() {
  return (
    <div id='map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157.41082802011582!2d4.320608966014857!3d50.85758637502537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3a84904fc81%3A0xe1ad440588b80c5b!2sPoissonerie%20Fellah!5e0!3m2!1sfr!2sbe!4v1677183070841!5m2!1sfr!2sbe"
          width="100%"
          height="350"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  )
}
