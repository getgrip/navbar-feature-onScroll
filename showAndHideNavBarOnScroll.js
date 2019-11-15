import React, { Component } from 'react';
import './Navbar.scss'; 
import classNames from "classnames"; 

export default class Navbars extends Component {
    state = {
        initScroll: window.pageYOffset, 
        visible:false
    }
    
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillMount(){
        window.removeEventListener("scroll", this.handleScroll); 
    }

    handleScroll = ()=>{
        const {initScroll} = this.state; 
        const currentScroll = window.pageYOffset; 
        const visible = initScroll < currentScroll; //true 

        this.setState({                 //8
            initScroll:currentScroll,  //0
            visible //false 
        });
    };
 
    render() {
        return (
            <nav  id = "#"className= {
                classNames("navbar fixed-top navbar-expand-lg"," navbar-custom", {"navbarHidden":this.state.visible})}
            >
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#top">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#proList">Projects</a>
                        </li>
                        <li className="nav-item contact-nav">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
