import React, {Component} from 'react'

export default class SideProject extends Component {
    render(){
        let styles = {
            backgroundImage: 'url(' + this.props.img + ')'
        }
        return (
            <li class="cards__item">
                <div class="card">
                <div class="card__image" style={styles}></div>
                <div class="card__content">
                    <div class="card__title">{this.props.name}</div>
                    <div class="card__desc">{this.props.type}</div>
                    <p class="card__text">{this.props.desc}</p>
                    <a href="#" class="btn btn--block card__btn">Visit</a>
                    {/* <button class="btn btn--block card__btn">Visit</button> */}
                </div>
                </div>
            </li>
        )
    }
}