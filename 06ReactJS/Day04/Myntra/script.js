import React from 'react';
import ReactDom from 'react-dom/client';

const data = [
    { name: "T-Shirts", discount: "40-80% off"},
    { name: "Sports Shoes", discount: "40-80% off" },
    { name: "Shirts", discount: "40-80% off" },
    { name: "Jeans", discount: "40-80% off" },
    { name: "Kurta & Sets", discount: "50-80% off" },
    { name: "Trousers", discount: "40-80% off" },
    { name: "Track Pants", discount: "UP TO 80% off" },
    { name: "Loungewear", discount: "UP TO 80% off" },
    { name: "Innerwear", discount: "UP TO 70% off" },
    { name: "Belts & Wallets", discount: "40-80% off" },
    { name: "Sunglasses & Frames", discount: "30-70% off" },
    { name: "Kids Wear", discount: "50-70% off" },
    { name: "Home Furnishings", discount: "40-70% off" },
    { name: "Casual Shoes", discount: "40-70% off" },
    { name: "Flip-Flops", discount: "30-70% off" },
    { name: "Activewear", discount: "30-70% off" }
];



function Cart(props) {
    return (
        <div className='card'>
            <img src='https://www.creativefabrica.com/wp-content/uploads/2023/06/05/Mans-Black-TShirt-Mockup-Hyper-Realistic-71403112-1-1.png'></img>
            <div className='card-footer'>
                <h3>{props.name}</h3>
                <h2>{props.discount}</h2>
                <h3>Shop now</h3>
            </div>
        </div>
    )
}


function Main() {
    return (
        <div className='container'>
            {data.map((val,index)=> <Cart key={index} name = {val.name} discount = {val.discount} />)};
        </div>
    )

}

const ReactRoot = ReactDom.createRoot(document.querySelector("#root"));
ReactRoot.render(<Main />);