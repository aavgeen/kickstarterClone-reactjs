import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './screens/Home'
import {Navbar, NavItem, Icon, Button,Row,Col,Input} from 'react-materialize'
class App extends Component {
  constructor(props){
    super(props);
    //True means Asc and false means decending.
    this.state = {perfundsort: true,
                  endtimesort: true};
    this.flipEndTimeSort = this.flipEndTimeSort.bind(this);
    this.flipPerFunSort = this.flipPerFunSort.bind(this);
  }
  flipPerFunSort(){
    this.setState({
      perfundsort: !this.state.perfundsort
    });
  }
  flipEndTimeSort(){
    this.setState({
      endtimesort: !this.state.endtimesort
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <Row>
            <Col m={12}><p className="App-title">Kickstarter</p></Col>
          </Row>
          <Row>
            <Col m={1}></Col>
            <Col m={3}><Input label="Enter Name" placeholder="Search.... " validate large><Icon>search</Icon></Input></Col>
            <Col m={3}>Percentage Funded:<Button >{this.state.perfundsort ? <Icon>vertical_align_bottom</Icon> : <Icon>vertical_align_top</Icon>}</Button></Col>
            <Col m={3}>End Time:<Button >{this.state.endtimesort ? <Icon>vertical_align_bottom</Icon> : <Icon>vertical_align_top</Icon>}</Button> </Col>
            <Col m={2}>Filters</Col>
          </Row>
        </header>
        
        
        <Home/>
      </div>
    );
  }
}

export default App;
