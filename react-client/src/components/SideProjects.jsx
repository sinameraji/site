import React, { Component } from 'react'
import SideProject from './SideProject'

export default class SideProjects extends Component {
    
    render(){
        return (
            <ul class="cards">
                
                <SideProject name="App Club" type="Community" desc="Co-founded the tech entrepreneurship community of students at University of Malaya. Love it like my baby." img={require('../images/appclub.jpg')} link="https://www.facebook.com/AppClubUM/" />
                {/* <SideProject name="CrossUni" type="Software/Experience" desc="A side project with 2 great friends in Johor. CrossUni connects students form 5 universities in Johor to each other, based on their interests." img={require('../images/crossuni.jpg')} link="https://crossuni.me/" /> */}
                {/* <SideProject name="CrossFac" type="Software/Experience" desc="Made this first, before CrossUni, to connect like-minded UM students from different faculties. Decided to pause it temporarily and execute CrossUni in Johor first, for good reasons." img={require('../images/crossfac.jpg')} link="https://crossfac.me/" /> */}
              
                
                
            </ul>
        )
    }   
}