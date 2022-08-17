import React, { useContext, useEffect, useState } from 'react';
import './CartWidget.css';
import { CartContext } from '../../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartWidget(){

    const {cartData} = useContext(CartContext);

    const navegar = useNavigate()
    const goCart = () => {
      navegar(`/cart`)
    }
    return(
        //<img className="d-block mx-auto mb-4" src="./robot.png" alt="" width="150" height="57"/>
        <div className='CartWidget'>
        <span>{cartData.length}</span>  
        <img className='material-symbols-outlined' onClick={goCart} src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/cart.jpg`} width="80" height="70"></img>  
        </div>
    )
}