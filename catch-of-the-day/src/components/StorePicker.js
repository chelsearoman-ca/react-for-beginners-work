import React from 'react';
import { getFunName } from '../helpers.js';

class StorePicker extends React.Component{
    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this);

    //hey what up new ref stuff goes here -- it used to be ref = {(input) =>{this.storeInput = input}}
    //now it's this:
    myInput = React.createRef();
    goToStore = e =>{ //so here we've declaired a property called goToStore w/ an arrow function instead of the goToStore(e) method we had before
    // so we don't need to call constructor and do the binding theres
        e.preventDefault();
        //1. grab the text from the input
        // console.log(this.myInput.value.value); //the value.value is a react thing followed by a JS thing... that's all we get. ????
        //end up with React.createRef()
        //2. we're going to transition from ./ to .storeName
        const storeName = this.myInput.value.value;
        //we can use this.storeinput because we ref it down below - another instance where we don't have to use the constructor
        this.props.history.push(`/store/${storeName}`);
      }
    render(){
        return(
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input type="text"
                  ref={this.myInput}
                  required placeholder="Store Name"
                  defaultValue={getFunName()}  />
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}
//this is an object rhar gives us access to transitionTo through the router.
// StorePicker.contextTypes={
//     router: React.PropTypes.object
// }
export default StorePicker;
