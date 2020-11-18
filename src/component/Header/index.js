import React from "react"
import "./header.scss"
import logo from "../../assets/img/logo.png"


const index = () => {
    return (
        <div className="header">
            <div className="logo">
                <a href="#"><img src={logo} alt="error" style={{width: 190, height: 60}}/></a>
            </div>
        </div>
    )
}

export default index;