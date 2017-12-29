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
                    <Book title={book.title} author={book.author} desc={book.desc} img={book.img} />
                })} */}
                <Book title="Getting to Yes" author="Roger Fisher and William Ury" desc="Became conscious about perspective in negotiations, in social and political scale." img={require('../images/yes.jpg')} />
                <Book title="Matchmakers" author="David. Evans and Richard L. Schmalensee" desc="This book organised my unstructured thoughts about education, technology and businesses. Enjoyed the case studies." img={require('../images/matchmaker.jpg')} />
                <Book title="Limit" author="Muhammad Reza Hashemi Mousavi" desc="Limit shapes a huge part of mathematics and it's a concept I've repeatedly fell in love with, thanks to my amazing high school calculus teacher." img={require('../images/limit.jpg')} />
                <Book title="Organize your mind, organize your life" author="Margaret Moore and Paul Hammerness" desc="A study of human brain from 2 perspectives: neuroscience and psychology;  with respect to the core feelings that influence our behavior and productivity. Enabled me to be more productived, more in control of my feelings. " img={require('../images/mind.jpg')} />
                <Book title="AI - A Guide to Intelligent Systems" author="Michael Negnevitsky" desc="Gave me a great understanding of logic and inference in machines, knowledge representation and reasoning." img={require('../images/ai.jpg')} />
                <Book title="Everybody matters" author="Rajendra Sisodia and Robert Chapman" desc="Pre-word by Simon Sinek. True story of Bob Chapman's empathy-driven leadership in building his billion dollar company." img={require('../images/chapman.jpg')} />
                <Book title="Rich dad poor dad" author="Robert Kiyosaki and Sharon Lechter" desc="I did not have a great understanding of personal finance before reading this. Made a difference in my lifestyle." img={require('../images/richdad.jpg')} />
                <Book title="The matter of bank and riba (usury)" author="Morteza Motahhari" desc="Transcript of an extraordinary socioeconomic argument on Islam's view on banking." img={require('../images/bank.jpg')} />
                <Book title="Computer Organization And Architecture" author="William Stallings" desc="Found a deep interest in computer hardware in my first year at uni. The idea of improving PC performance by fundamentally changing parts of the architecture is fascinating." img={require('../images/csa.jpg')} />
                <Book title="Thinking, fast and slow" author="Daniel Kahneman" desc="I liked it because it articulated my thoughts, and stopped reading it for the same reason." img={require('../images/thinking.jpg')} />
                
                
            </ul>
        )
    }   
}