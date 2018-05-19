import React, { Component } from 'react'

export default class Post extends Component {
    render(){
        let styles = {
            link: {
                color: "#000"
            }
        }
        return (
            <li><a style={styles.link} href={this.props.url}>{this.props.title}</a></li>
            
        )
    }
}