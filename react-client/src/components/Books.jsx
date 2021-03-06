import React, { Component } from 'react'
import Book from './Book'
// import bookData from '../data/books.json'
export default class Books extends Component {
    
    render(){
        let books = [
            // {title: "Getting to Yes", author: "Harvard Law School", desc: "Became conscious about perspective in negotiations, in social and political scale.", img: require('../images/yes.jpg')},
            // {title: "Matchmaker", author: "Harvard Law School", desc: "Became conscious about perspective in negotiations, in social and political scale.", img: require('../images/matchmaker.jpg')},
        ]
        // Object.keys()
        return (
            <ul class="cards">
                {/* {books.map(b => <Book title={b.title} author={b.author} desc={b.desc} img={(b.img)} />)} */}
                <Book title="The Leadership Pipeline" author="Ram Charan" desc="Reading currently. I look forward to learn how to grow as a leader, while growing other leaders in the system. Building a solid leadership pipeline is crucial for teams, businesses and civilizations." img={require('../images/leadership-pipeline.jpg')} />
                <Book title="Zero to One" author="Peter Thiel" desc="It aligned with my thoughts about the concept of competition in individual and social context, labeled people like me as Definite Optimists! It was so good I read about 40 pages a day despite my hectic schedule." img={require('../images/zero-to-one.jpg')} />
                <Book title="Solving Tough Problems" author="Adam Kahane" desc="Loved this book. A great read on transitioning from solving science problems to solving real world problems. Gave me the courage to be more open about my pursuit of leadership and tackling the education problem." img={require('../images/solving-tough-problems.jpg')} />
                <Book title="Misbehaving" author="Richard Thaler" desc="This year (2018) I found a deep interest in 2 things: Economics and understanding/influencing human behavior. This book was quite interesting, I read half of it." img={require('../images/misbehaving.jpg')} />
                <Book title="Getting to Yes" author="Roger Fisher and William Ury" desc="Became conscious about perspective in negotiations, in social and political scale." img={require('../images/yes.jpg')} />
                <Book title="Matchmakers" author="David. Evans and Richard L. Schmalensee" desc="This book organised my unstructured thoughts about education, technology and businesses. Enjoyed the case studies." img={require('../images/matchmaker.jpg')} />
                <Book title="Limit" author="Muhammad Reza Hashemi Mousavi" desc="Limit shapes a huge part of mathematics and it's a concept I've repeatedly fell in love with, thanks to my amazing high school calculus teacher." img={require('../images/limit.jpg')} />
                <Book title="Organize your mind, organize your life" author="Margaret Moore and Paul Hammerness" desc="A study of human brain from 2 perspectives: neuroscience and psychology;  with respect to the core feelings that influence our behavior and productivity. Enabled me to be more productived, more in control of my feelings. " img={require('../images/mind.jpg')} />
                <Book title="AI - A Guide to Intelligent Systems" author="Michael Negnevitsky" desc="Gave me a great understanding of logic and inference in machines, knowledge representation and reasoning." img={require('../images/ai.jpg')} />
                <Book title="Everybody matters" author="Rajendra Sisodia and Robert Chapman" desc="Pre-word by Simon Sinek. True story of Bob Chapman's empathy-driven leadership in building his billion dollar company." img={require('../images/chapman.jpg')} />
                <Book title="Rich dad poor dad" author="Robert Kiyosaki and Sharon Lechter" desc="I did not have a great understanding of personal finance before reading this. Made a difference in my lifestyle." img={require('../images/richdad.jpg')} />
                <Book title="Ali's Attraction and Repulsion" author="Morteza Motahhari" desc="A brilliant low profile leadership book. Defines justice, hypocrisy and leadership by addressing leadership's side effect of making friends and enemies." img={require('../images/ali.jpg')} />
                <Book title="The matter of bank and riba (usury)" author="Morteza Motahhari" desc="Transcript of an extraordinary socioeconomic argument on Islam's view on banking." img={require('../images/bank.jpg')} />
                <Book title="Computer Organization And Architecture" author="William Stallings" desc="Found a deep interest in computer hardware in my first year at uni. The idea of improving PC performance by fundamentally changing parts of the architecture is fascinating." img={require('../images/csa.jpg')} />
                <Book title="Thinking, fast and slow" author="Daniel Kahneman" desc="I liked it because it articulated my thoughts, and stopped reading it for the same reason." img={require('../images/thinking.jpg')} />
                
                
            </ul>
        )
    }   
}