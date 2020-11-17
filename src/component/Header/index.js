import React from "react"
import "./header.scss"
import Logo from "../../assets/img/Group 5.png"


const index = () => {
    return (
        <div className="header">
            <div className="logo">
                <a href="#"><img src={Logo} alt="error"/></a>
            </div>
        </div>
    )
}

export default index;