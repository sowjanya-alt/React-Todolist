import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './plan';

class App extends Component {
  state = {
    items: [],
    text: ""
  }
  handleChange = e => {
    this.setState({ text: e.target.value }) //fetching value from textfield and storing in text variable
  }
  handleAdd = e => {
    if (this.state.text !== "") { //if state is not empty
      const items = [...this.state.items, this.state.text]; //...spread operator, fetching all items in item[] 
      this.setState({ items: items, text: "" }); //storing in items and making textfield empty
    }
  }
  handleDelete = id => {
    console.log("Deleted", id);
    const Olditems = [...this.state.items]//retrieving all items 
    console.log("Olditems", Olditems); //displaying that item on console
    const items = Olditems.filter((element, i) => { //filtering items, 
      return i !== id  //if id not matching then only include item in list, so that we can get a new list
    })
    console.log("Newitems", items); //displaying new items
    this.setState({ items: items }); // setting state of new items
  }
  render() {
    return (
      <div className="container-fluid my-5"> 
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3"> 
            <h2 className="text-center"> Today's Plan </h2>
            <div className="container-fluid">
              <div className="row">
                <div className="col-9">
                  <input type="text" className="form-control" placeholder="Write Plan Here" value={this.state.text} onChange={this.handleChange} />
                </div>
                <div className="col-2">
                  <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
                </div>
              </div>
              <div className="conatiner">
                <ul className="list-unstyled row m-5">
                  {
                    this.state.items.map((value, i) => { //iterating all items
                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete} /> //sending each item in Plan
                      //passing i as unique key, if not passing then will get error for key
                      //if sendData is attribute name, make sure you are using in Plan as props
                    })
                  }
                </ul>
                {/* <ul className="list-unstyled row m-5">
                  <Plan p={this.state.items} sendData={this.handleDelete} />
                </ul> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
