import React from 'react'
import logo from "../assets/myphoto.jpg"
import "../styles/introduction.css"

export const Introduction = ({props}) => {
    return (
        <div style={{position:'relative'}}>
            <div style={{width:"0px",height:"0px",borderTop:"100vh solid cyan",borderRight:"85vw solid white"}}>
            </div>
            <div>
                <div style={{position:"absolute",top:"20vh",left:"5vw"}}>
                    <img src={logo} alt="My Picture" style={{width:"40vh",height:"40vh",border:"5px solid white",borderRadius:"50%"}}/> 
                </div>
                <div className="intro-text" style={{position:"absolute",top:"35vh",right:"10vw"}}>
                    <p style={{fontSize:26}}>My Name is</p>
                    <p style={{fontSize:36}}>Satyajit Choudhary</p>
                    <p style={{fontSize:20}}>I am a full stack web developer by passion</p>
                </div>
            </div>
        </div>
    )
}
