import React from 'react'
import {ReactComponent as UnderDev} from '../assets/underDev.svg';
import { Header } from '../components/Header';
const Settings = () => {
    return (
        <div style={{display:"flex",flexDirection:"column",flexGrow:1,}}>
            <Header title="Settings" />
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <UnderDev style={{height:500,width:500}} />
                Looks like you don't have much settings to take control of, we'll be back ASAP
            </div>
        </div>
    )
}

export default Settings
