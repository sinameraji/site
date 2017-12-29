import React, { Component } from 'react'
import Book from './Book'

export default class Books extends Component {
    
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
                <Card title="Limit: concept, definition and calculation" author="Muhammad Reza Hashemi Mousavi" desc="My high school advanced calculus teacher advised me to fully understand the concept of limit in maths, to truly understand maths. One of the most beautiful concepts I've learned in life, with no doubt." img={require('../images/limit.jpg')} />
                <Card title="Organize your mind, organize your life" author="Margaret Moore and Paul Hammerness" desc="This book organised my unstructured thoughts about education, technology and businesses. Enjoyed the case studies." img={require('../images/mind.jpg')} />
                <Card title="AI - A Guide to Intelligent Systems" author="Michael Negnevitsky" desc="Gave me a great understanding of logic and inference in machines, knowledge representation and reasoning." img={require('../images/ai.jpg')} />
                <Card title="Everybody matters" author="Rajendra Sisodia and Robert Chapman" desc="Pre-word by Simon Sinek. True story of Bob Chapman's empathy-driven leadership in building his billion dollar company." img={require('../images/chapman.jpg')} />
                <Card title="Rich dad poor dad" author="Robert Kiyosaki and Sharon Lechter" desc="Pre-word by Simon Sinek. True story of Bob Chapman's empathy-driven leadership in building his billion dollar company." img={require('../images/richdad.jpg')} />
                <Card title="The matter of bank and riba (usury)" author="Morteza Motahhari" desc="Transcript of an extraordinary socioeconomic argument on Islam's view on banking." img={require('../images/bank.jpg')} />
                <Card title="Computer Organization And Architecture" author="William Stallings" desc="Found a deep interest in computer hardware in my first year. The idea of improving PC performance by fundamentally changing parts of the architecture is fascinating." img={require('../images/csa.jpg')} />
                
                
            </ul>
        )
    }   
}