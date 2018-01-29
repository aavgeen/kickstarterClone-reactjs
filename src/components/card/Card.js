import React, { Component } from 'react';
import {Button, Icon, Card, CardTitle, ProgressBar} from 'react-materialize'
import './style.css';
import Cardback from '../../images/cardhead.JPG'


class OneCard extends Component {
    constructor(props){
        super(props);
        this.state = {project: props.project}
        console.log(this.state.project)
    }

    render(){
        // 
        //
        return(
            <div>
                <Card className='medium'  header={<CardTitle reveal image={Cardback}><p className="title">{this.state.project.title}</p></CardTitle>}
                      actions={[
                        <span className="backers">Backers: {this.state.project["num.backers"]}</span>
                        ,<span className="statecountry">{this.state.project["location"]}, {this.state.project["country"]}</span>
                        ,<a href={"https://www.kickstarter.com/"+this.state.project.url} target="_blank"><Button floating small className='blue' waves='light' icon='link' /></a>
                      ]}
                      reveal={<p className="blurb"><t/>{this.state.project.blurb}</p>}>

                    <p className="byname">by: {this.state.project.by}</p>
                    <p className="blurb"><t/>{this.state.project.blurb}</p>
                    <ProgressBar progress={this.state.project["percentage.funded"]}/>
                    <p className="perfunded">Funded: {this.state.project["percentage.funded"]}%</p>
                    <span className="endtime">{new Date(this.state.project["end.time"]).toDateString()}</span>
                    <span><t/></span>
                    <span className="amount">{this.state.project["amt.pledged"]} {this.state.project.currency.toUpperCase()}</span>
                    
            
                </Card>
            </div>        
        );
    }
    
}

export default OneCard;
