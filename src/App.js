
import './App.css';
import {React, useEffect, useState} from'react';
// curl https://api.coinbase.com/v2/prices/BTC-USD/spot 
const url = "https://api.coinbase.com/v2/exchange-rates?currency=BTC";
const options = {Authorization: 'Bearer 90df5f27a7b170cd775abf89d632b350b7c1c9d53e08b340cd9832ce52c2c'}
function App() {
  let dat = {};
  let [ls ,setLs]  = useState([]);
  useEffect(()=>{
    fetch(url,options)
  .then(res=>res.json())
  .then(data=>
    {dat = data.data.rates;
      let im = []; 
    for(let key  in dat){
      let val = dat[key];
      im.push({key,val});
    }
    setLs(im);
    })
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <h4>cli-crypto</h4>
      </header>
      <div className="container">
        Tracking Bitcoins
        <ul>
          {ls.map((val,idx)=><li key={idx}>{val.key} {val.val}</li>) }
        </ul>
      </div>
    </div>
  );
}

export default App;
