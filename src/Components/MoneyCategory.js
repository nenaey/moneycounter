import React from 'react'
import { useState } from 'react'


const MoneyCategory = ({moneyType, totalValueHandler}) => {

    const[moneyValue,setMoneyValue] = useState(0)

    const moneyValueHandler = (e)=>{
        setMoneyValue(e.target.value)
        moneyType.subTotal = (e.target.value) * moneyType.category
        totalValueHandler()
      }

      

  return (
    <div className="money-row">
          <img className="money-image" src={moneyType.image} alt={moneyType.category}/>
          <input
          className="money-input"
          type="text"
          placeholder="How many?"
          onChange={moneyValueHandler}
          ></input>
          <h1>{moneyValue * moneyType.category}</h1>
    </div>
   
  )
}

export default MoneyCategory