import React, { Component } from 'react';
import './App.css';
import  { getCustomerList, postCustomer, getCustomer } from './customers.js'
import Header from './Header/Header';
import List from './List/List';
import Workspace from './Workspace/Workspace';

class App extends Component {
  constructor() {
    super()
    this.state = {
      customerList: undefined,
      initialLoad: true,
      creating: false,
      currentCustomer: null
    }

  }

componentDidMount = () => {
  // axios.get(apiURL).then(res => console.log(333, res) || res.data)
  getCustomerList().then((cList) => {
    console.log(111,cList)
    this.setState({
      customerList: cList
    })
  })
}

startNewcustomer = () => {
  this.setState({
    creating: true,
    initialLoad: false,
    currentCustomer: null
  })
}

createCustomer = (obj) => {
  postCustomer(obj).then( res => {
    getCustomerList().then((cList) => {
      this.setState({
        customerList: cList,
        creating: false,
        initialLoad: true
      })
    })
  })
}

selectCustomer = (id) => {
  getCustomer(id).then(res => {
    this.setState({
      currentCustomer: res,
      initialLoad: false
    })
  })
}

  render() {
    return (
      <div>
        <Header />
        <div className="App__container">
          {
            this.state.customerList ?
            <List
              customerList={this.state.customerList || []}
              startNewcustomer={this.startNewcustomer}
              selectCustomer={this.selectCustomer}
              />
            : null
          }
          <Workspace initialLoad={this.state.initialLoad}
                    currentCustomer={this.state.currentCustomer}
                    creating={this.state.creating}
                    createCustomer={this.createCustomer}
                  />
        </div>
      </div>
    )
  }
}

export default App;
