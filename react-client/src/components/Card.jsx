import React, { Component } from 'react'

export default class Card extends Component {
    render(){
        let styles = {
            backgroundImage: 'url(' + this.props.img + ')'
        }
        return (
            <li class="cards__item">
                <div class="card">
                <div class="card__image" style={styles}></div>
                <div class="card__content">
                    <div class="card__title">{this.props.title}</div>
                    <div class="card__desc">{this.props.author}</div>
                    <p class="card__text">{this.props.desc}</p>
                    {/* <button class="btn btn--block card__btn">Button</button> */}
                </div>
                </div>
            </li>
            
        )
    }
}