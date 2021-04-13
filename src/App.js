
import './App.css';



import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class App extends Component {

  constructor(){
    super();
    this.state = {label :["test"] , values:[60000] };
    this.url = "https://api.coinbase.com/v2/exchange-rates?currency=BTC";
    this.options = {Authorization: 'Bearer 90df5f27a7b170cd775abf89d632b350b7c1c9d53e08b340cd9832ce52c2c'};

  }
  componentDidMount(){
    fetch(this.url,this.options)
    .then(res=>res.json())
    .then(data=> { let tp = data.data.rates; 
      let ts = [];
      let vs = [];
      for (let [key, value] of Object.entries(tp)) {
        ts.push(key)
        vs.push(value)
    };
    this.setState({label:ts,values:vs})
    console.log(this.state);
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: this.state.label,
          datasets: [{
              label: 'Exchange value (BTC)',
              data: this.state.values,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        scales: {
            y: {
                suggestedMin: 50,
                max: 8000000,
                beginAtZero:true,
            }
        }
    }
  });
    });
    
    
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h4>cli-crypto</h4>
      </header>
      <div className="container">
        Tracking Bitcoins
        <div className="chart">
        <canvas id="myChart" responsive="true" ></canvas>
        </div>
      </div>
      <div className="foot">
      <p>
          made by --> Abhishek Kale <br/>
          <a href="https://github.com/overrkill">github.com/overrkill</a>
          
        </p>
      </div>
    </div>
    )
  }
}


// // curl https://api.coinbase.com/v2/prices/BTC-USD/spot 

 


  
