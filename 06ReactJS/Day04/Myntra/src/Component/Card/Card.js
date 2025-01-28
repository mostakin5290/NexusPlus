import React from "react";
import "./Card.css"



function Cart(props) {
    return (
        <>
        <div className='card'>
            <img src='https://www.creativefabrica.com/wp-content/uploads/2023/06/05/Mans-Black-TShirt-Mockup-Hyper-Realistic-71403112-1-1.png'></img>
            <div className='card-footer'>
                <h3>{props.name}</h3>
                <h2>{props.discount}</h2>
                <h3>Shop now</h3>
            </div>
        </div>
        </>
    )
}
export default Cart;