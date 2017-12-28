import React, { Component } from 'react'
import Card from './Card'

export default class Cards extends Component {
    
    render(){
        return (
            <ul class="cards">
                <Card title="Getting to Yes" author="Harvard Law School" desc="Became conscious about perspective in negotiations, in social and political scale." img={require('../images/yes.jpg')} />
                <Card title="Matchmaker" author="Harvard Business Review" desc="This book organised my unstructured thoughts about education, technology and businesses. Enjoyed the case studies." img={require('../images/fence.jpg')} />
                
            </ul>
        )
    }   
}