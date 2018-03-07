import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component{
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
  //1.Take a copy of the existing state
   const fishes = {...this.state.fishes}; //take a copy of an object in JS buy using spread not a deep clone
   //2. Add a new fish to our fishes variable
   fishes[`fish${Date.now()}`] = fish; //date.now() provides a unique key
     //3. Set the new fishes object to state
    this.setState({ fishes }); //we didn't add order, we're just updating the piece of state we want
  };
  loadSampleFishes = () =>{
    //we've created custom functions that update state
    //any custom function that needs to update state needs to live in the same component where our state lives
    this.setState({ fishes: sampleFishes });
  };
  addToOrder = key =>{
    //1.take a copy of state
    const order = {...this.state.order};
    //2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    //3. Call setState to update our state
    this.setState({ order });
  };
    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                      {Object
                        .keys(this.state.fishes)
                        .map(key => (<Fish key={key} details={this.state.fishes[key]} addToOrder={this.state.order[key]}/>
                      ))} {/*object.keys lets you get inside the object*/}
                    </ul>
                </div>
                <Order/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;
