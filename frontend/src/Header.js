import React from 'react'
import Tlogo from './assets/T logo.png'
import LogoutIcon from './assets/logout.png'

function Header({logout,user}) {
    return (
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{
            padding:'20px 0 0 60px'
            
        }}>
            <h1 style={{fontFamily:'Segoe UI'}}>TRANCE</h1>
            <img src={Tlogo} width="122px"/>
        </div>
        {user?<img src={LogoutIcon} alt="" style={{position:'absolute',top:'2%',right:'5%',cursor:"pointer"}} onClick={logout}/>:''}
        </div>
    )
}

export default Header
