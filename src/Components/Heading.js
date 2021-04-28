import React, { Component } from 'react'
import { Jumbotron, Container, Button} from 'react-bootstrap'
import HCarousel from './Carousel'
import './Styles/Jumbotron.css'

export default class Heading extends Component{
    render(){
        return(
            <Jumbotron className="jumbo" >
                <HCarousel />
            </Jumbotron>
            
        )
    }
}