import React, { Component } from 'react'
import Card from './Card'

export default class Cards extends Component {
    
    render(){
        let books = [
            {title: "Getting to Yes", author: "Harvard Law School", desc: "Became conscious about perspective in negotiations, in social and political scale.", img: require('../images/yes.jpg')},
            {title: "Matchmaker", author: "Harvard Law School", desc: "Became conscious about perspective in negotiations, in social and political scale.", img: require('../images/matchmaker.jpg')},
        ]
        return (
            <ul class="cards">
                {/* {books.forEach(function(book){
                    <Card title={book.title} author={book.author} desc={book.desc} img={book.img} />
                })} */}
                <Card title="Getting to Yes" author="Harvard Law School" desc="Became conscious about perspective in negotiations, in social and political scale." img={require('../images/yes.jpg')} />
                <Card title="Matchmakers" author="Harvard Business Review" desc="This book organised my unstructured thoughts about education, technology and businesses. Enjoyed the case studies." img={require('../images/matchmaker.jpg')} />
                <Card title="Limits: concept, definition and calculation" author="Muhammad Reza Hashemi Mousavi" desc="My high school advanced calculus teacher advised me to fully understand the concept of limit in maths, to truly understand maths. One of the most beautiful concepts I've learned in life, with no doubt." img={require('../images/limit.jpg')} />
                <Card title="Organize your mind, organize your life" author="Margaret Moore and Paul Hammerness" desc="This book organised my unstructured thoughts about education, technology and businesses. Enjoyed the case studies." img={require('../images/mind.jpg')} />
                <Card title="Organize your mind, organize your life" author="Margaret Moore and Paul Hammerness" desc="This book organised my unstructured thoughts about education, technology and businesses. Enjoyed the case studies." img={require('../images/mind.jpg')} />
                
            </ul>
        )
    }   
}