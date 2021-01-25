import React from 'react'
import {ReactComponent as UnderDev} from '../../assets/underDev.svg';

const Board = () => {
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <UnderDev style={{height:500,width:500}} />
            Under Development, we will be back ASAP
        </div>
    )
}

export default Board
