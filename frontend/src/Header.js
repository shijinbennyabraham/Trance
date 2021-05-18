import React from 'react'
import Tlogo from './assets/T logo.png'

function Header() {
    return (
        <div style={{
            padding:'20px 0 0 60px'
            
        }}>
            <h1 style={{fontFamily:'Segoe UI'}}>TRANCE</h1>
            <img src={Tlogo} width="122px"/>
            
        </div>
    )
}

export default Header
