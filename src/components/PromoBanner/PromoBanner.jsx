import React from 'react'
import banner from "../../img/banner.png"
import "./PromoBanner.css"

const PromoBanner = () => {
  return (
    <div className ="banner-ppal">
       <img src= {banner} alt="Banner promocional destacando envíos gratis a todo el país en compras mayores a $55.000, con una bolsa azul y marrón junto a contenedores de comida." /> 
    </div>
  )
}

export default PromoBanner