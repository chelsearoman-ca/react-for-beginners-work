import React from 'react';
import {getFunName} from '../helpers.js';

class StorePicker extends React.Component{
    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    goToStore(e){
        e.preventDefault();
        console.log('you changed the URL');
        //first grab the text from the box
        //second we're going ot transition from ./ to .storeId
        const storeId=this.storeInput.value;
        console.log(`Going to ${storeId}`);
        //we can use this.storeinput because we ref it down below - another instance where we don't have to use the constructor
        this.context.router.transitionTo(`${storeId}`);
    }
    render(){
        //any where else
        return(
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput=input}}/>
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}
//this is an object rhar gives us access to transitionTo through the router.
StorePicker.contextTypes={
    router: React.PropTypes.object
}
export default StorePicker;
