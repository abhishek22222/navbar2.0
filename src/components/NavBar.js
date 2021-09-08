import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
//import HomeIcon from '@material-ui/icons/Home';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
//import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
//import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined"
import {Avatar} from '@material-ui/core';
import *as ReactBootStrap from "react-bootstrap";
import { NavLink } from 'react-bootstrap';
import styles from './NavBar.css'



export default function NavBar() {
    return (
        <>
        <div className="Header">
            <ReactBootStrap.Navbar sticky="top" collapseOnSelect expand="lg" className="Head">
                <ReactBootStrap.Container>
                <ReactBootStrap.Navbar.Brand href="#home" className="logo">Sona_Space</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="me-auto">
                    <ReactBootStrap.Nav.Link href="#home" className="comp">Home</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#companies" className="comp">Companies</ReactBootStrap.Nav.Link>
                    
                    
                    <ReactBootStrap.Nav.Link href="#ans" className="icon"><AssignmentTurnedInOutlinedIcon/></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#notification" className="icon"><NotificationsOutlinedIcon/></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#search"> <ReactBootStrap.Form className="d-flex">
                    <ReactBootStrap.FormControl type="search" placeholder="Search" className="mr-2 searchBar" aria-label="Search"/></ReactBootStrap.Form></ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link href="#Question"><button className="addQuestion">Add Question</button></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#login" className="login">Login</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#profile"><Avatar/></ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
            </div>
            
            
        </>   
    )
}
