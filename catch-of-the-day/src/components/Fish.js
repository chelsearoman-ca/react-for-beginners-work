import React from 'react';
import { formatPrice } from "../helpers";

class Fish extends React.Component{
  render(){
    const {image, name, price, desc, status} = this.props.details;
    const isAvailable = status === 'available';

    return(
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable}>{isAvailable ? 'Add to Order' : 'Sold out!'}></button> {/*if it is not available this equals true*/}
      </li>
    )
  }
}

export default Fish;
