import React, { Component } from 'react'
import Card from './Card'

export default class Cards extends Component {
    
    render(){
        return (
            <ul class="cards">
                <Card title="Getting to Yes" author="Harvard Law School" desc="International negotiations" img={require('../images/record.jpg')} />
                <Card title="Matchmaker" author="Harvard Business Review" desc="The new economics of multisided platform" img={require('../images/fence.jpg')} />
                
            </ul>
        )
    }   
}