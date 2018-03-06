import React from 'react';

class AddFishForm extends React.Component{
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();



  createFish = (e) =>{
    //1. no submit on reload
    e.preventDefault();
    //2. pull values out of the inputs
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value), //parseFloat allows for num instead of integers, everything is cents
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    }
    this.props.addFish(fish);
    //refresh form
    e.currentTarget.reset();
  };
    render(){
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name"  ref={this.nameRef} type="text" placeholder="Name"/>
                <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
                <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>
                <button type="submit">+ Add Item</button>
            </form>
        )

    }

}

export default AddFishForm;
