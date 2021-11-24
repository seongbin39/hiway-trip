import React from 'react'
import './Food.css'

function Food({...rest}){
    return(
        <div className={`Food`}>
            {rest.serviceAreaName } {rest.batchMenu} ( {rest.salePrice} )
        </div>
    )
}

export default Food