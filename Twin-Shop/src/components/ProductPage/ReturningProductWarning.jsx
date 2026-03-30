import React from 'react'
import "./ProductPage.css"

function ReturningProductWarning(props){
  return (
    <div className='returing-product-warning-container'>
        <p>{props.warning}</p>
    </div>
  )
}

export default ReturningProductWarning;