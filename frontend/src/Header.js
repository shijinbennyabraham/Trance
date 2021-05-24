import React from 'react'
import Tlogo from './assets/T logo.png'
import LogoutIcon from './assets/logout.png'

function Header({logout,user}) {
    return (
        <div className="header" style={{display:'flex',justifyContent:'space-between'}}>
        <div className="header-logo">
            <h1 style={{fontFamily:'Segoe UI'}}>TRANCE</h1>
            <img src={Tlogo} width="100%"/>
        </div>
        {user?.email?<img src={LogoutIcon} className="logout" alt="" onClick={logout}/>:""}
        </div>
    )
}

export default Header