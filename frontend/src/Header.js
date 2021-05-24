import React from 'react'
import Tlogo from './assets/T logo.png'
import LogoutIcon from './assets/logout.png'

function Header({logout,user}) {
    return (
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <div className="header-logo">
            <h1 style={{fontFamily:'Segoe UI'}}>TRANCE</h1>
            <img src={Tlogo} width="122px"/>
        </div>
        {user?.email?<img src={LogoutIcon} alt="" style={{position:'absolute',top:'1em',right:'4em',cursor:"pointer"}} onClick={logout}/>:''}
        </div>
    )
}

export default Header