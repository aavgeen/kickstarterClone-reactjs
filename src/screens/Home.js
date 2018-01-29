import React, { Component } from 'react';

import {Row, Col, Preloader} from 'react-materialize'

import Projectlook from '../components/projectlook/Projectlook'

import './home.css';

import axios from 'axios';

const Loader = () =>{
    return(
        <Row>
            <Col s={12}>
                <Preloader size='big'/>
            </Col>
        </Row>
        )
}

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {projects: [], showLoader: true};
        this.fetchProjects = this.fetchProjects.bind(this);
      };
      
      fetchProjects() {
        axios.get("http://starlord.hackerearth.com/kickstarter")
          .then( (response) => {
            // console.log("response", response);
            this.setState({
              projects: response.data
            });
            // console.log("Fetched Projects: ", this.state.projects);
            this.setState({
                showLoader: false
            })
            this.forceUpdate();
          })
          .catch( (error) => {
            console.log(error);
            this.setState({
                showLoader: false
            })
            //TODO: Show a, Not able to fetch. Please try again, in a modal.
          });  
      }
      componentDidMount(){
        this.fetchProjects();
      }
    
      componentWillUnMount(){
        
      }

    render() {

      return (
        <div>
            { !this.state.showLoader ? <Projectlook projects={this.state.projects}/> : null }
            { this.state.showLoader ? <Loader className="loader"/> : null }
            
        </div>
      );
    }
  }
  
  export default Home;