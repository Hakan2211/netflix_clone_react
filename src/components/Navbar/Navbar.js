import React, {useState,useEffect} from 'react'
import classes from './Navbar.module.css'
import classnames from 'classnames'
import logo from '../../assets/Avatar.jpg'

const Navbar = () => {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll',() =>{
            if(window.scrollY > 200) {
                handleShow(true)
            }else handleShow(false)
        })

        return () =>{
            window.removeEventListener('scroll')
        }
    },[])
    
    return (
        <div className={[classnames(classes.nav, {
            [classes.nav__black]: show
           
        })].join(" ")}
        >
                

            <img
                className={classes.nav__logo} 
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                alt="Netflix Logo"/>
            
            <img
                className={classes.nav__avatar} 
                src={logo} 
                alt="Avatar Logo"/>
        </div>
    )
}

export default Navbar
