import React, { Component } from 'react';
import {Button, Icon, Row, Col} from 'react-materialize'
import './style.css';
import axios from 'axios';
import Card from '../card/Card'



class Projectlook extends Component {
  constructor(props){
    super(props);
    this.state = {projects: props.projects};
  };
 
  componentDidMount(){

  }

  componentWillUnMount(){
    
  }

  render() {
    const Cards = this.state.projects.map((proj, index)=>
      <Col s={1} m={4} l={4} className='grid-example' key={proj["s.no"]}><Card project = {proj}/></Col>
    );
    return (
      <div>
        <Row className="cardstyle">
          {Cards}
        </Row>
      </div>
    );
  }
}
  
  export default Projectlook;