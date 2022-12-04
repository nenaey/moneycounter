import './App.css';
import TwoHundredEGP from "./Images/TwoHundredEGP.jpg"
import HundredEGP from "./Images/HundredEGP.jpg"
import FiftyEGP from  "./Images/FiftyEGP.jpg"
import TwentyEGP from "./Images/TwentyEGP.jpg"
import TenEGP from "./Images/TenEGP.png"
import FiveEGP from "./Images/FiveEGP.png"
import OneEGP from "./Images/OneEGP.png" 
import MintaSoftLogo from "./Images/MintaSoftLogo.jpg"
import MoneyCategory from './Components/MoneyCategory';
import { useState, useEffect } from 'react';


function App() {

  const [money,setMoney] =useState([{name:"TwoHundredEGP", category:200, image: TwoHundredEGP, subTotal:0},
                                    {name:"HundredEGP", category:100, image:HundredEGP, subTotal:0},
                                    {name:"FiftyEGP", category:50, image:FiftyEGP, subTotal:0},
                                    {name:"TwentyEGP", category:20, image:TwentyEGP, subTotal:0},
                                    {name:"TenEGP", category:10, image:TenEGP, subTotal:0},
                                    {name:"FiveEGP", category:5, image:FiveEGP, subTotal:0},
                                    {name:"OneEGP", category:1, image:OneEGP, subTotal:0}])

  const[updatedTotalValue, setUpdatedTotalValue] = useState(0)

  useEffect(() => {
    const moneySum = money.reduce((accumulator, {subTotal})=> accumulator + subTotal, 0)
    setUpdatedTotalValue(moneySum)
    setMoney(money)
  }, [money])
  

  const totalValueHandler =()=>{
    let totalValue = 0
    for (let i = 0; i<money.length; i++){
      totalValue+= money[i].subTotal
    }
    console.log("This is " + totalValue)
    setUpdatedTotalValue(totalValue)
  }

  return (
    <div className="App">
      <header>
        <div className="header">
          <h1 className="title">Money Calculator</h1>
        </div>
      </header>

      <div>

        {money.map((moneyType)=>{
          return(
            <li key={moneyType.name}>
              <MoneyCategory moneyType={moneyType} totalValueHandler={totalValueHandler}/>
            </li>
          )
        })
        }
        </div>
        <div className="total-section">
          <img className="minta-img" src={MintaSoftLogo} alt="MintaSoftLogo"/>
          <h1 className="total-statement">Total is: {updatedTotalValue} EGP</h1>
          <h5 className="minta">Powered by <a href="https://www.facebook.com/MintaSoft/">MintaSoft</a></h5>
        </div>
        
    </div>
  );
}

export default App;
