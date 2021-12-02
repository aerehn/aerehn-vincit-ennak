import Header from './components/Header'

import Actions from './components/Actions'
import Timeframe from './components/Timeframe'
import buyDate from './functions/buyDate'
import sellDate from './functions/sellDate'
import longestDownwardTrend from './functions/longestDownwardTrend'
import highestTradingVolume from './functions/highestTradingVolume'

import convertTimeFrame from './functions/convertTimeFrame'
import filterdates from './functions/filterdates'
import React from 'react';
import Axios from 'axios';
import StyleCSS from './components/Index.module.css'




class App extends React.Component {
    constructor(props) {
        super(props)
        //this.klikPos = this.klikPos.bind(this)
        this.state = {
          title: 'Bitcoin examiner',
          buydate: 0, //marks the best day to buy coin in the given timeframe
          lowest_price:0,  
          selldate: 0, //marks the best day to sell coin in the given timeframe
          highest_price:0, 
          longestdt: 0,  // marks the longest downward trend in days
          highestv_date: 0,  // marks the day of the highest trading volume
          highestv:0,
          data: {
            "prices": [
            [
              1392595200000,
              453.4532
            ],
            [
              1392681600000,
              451.4878
            ],
            [
              1392768000000,
              449.7534
            ],
            [
              1392854400000,
              402.5302
            ]
          ],
          "total_volumes":[
            [
              1392595200000,
              34100785.5605295
            ],
            [
              1392681600000,
              15940081.582566679
            ],
            [
              1392768000000,
              9615245.195156122
            ],
            [
              1392854400000,
              24226368.436377108
            ]
          ]
        }
    }
  }
    
    //getPing = async = () => {
    //  const result = await fetch('https://api.coingecko.com/api/v3/ping')
    //  const data = await result.json()
  
    //  return data
    //}
    

    fetch = (timeframe) => {
      
      let convertedtimeframe=convertTimeFrame(timeframe);
      if(convertedtimeframe){
        let start=convertedtimeframe.unix_converted_start_date.toString();
        let end=convertedtimeframe.unix_converted_end_date.toString();
        let url='https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from='+start+'&to='+end;
        Axios.get(url)
        .then((response)=>{
            console.log(response);
            this.setState({
              data: response.data
            });
            var ldt=longestDownwardTrend(filterdates(this.state.data.prices));
            var buy=buyDate(filterdates(this.state.data.prices),ldt);
            var sell=sellDate(filterdates(this.state.data.prices),ldt);

            var htv=highestTradingVolume(filterdates(this.state.data.total_volumes));
            
            //let filtered_data=filterdates(this.state.data.total_volumes);
            this.setState({
              buydate: buy.return_date, 
              lowest_price: buy.lowest_price, 
              selldate: sell.return_date, 
              highest_price: sell.highest_price,
              longestdt: ldt,  
              highestv_date: htv.return_date,
              highestv: htv.highest,
            })
          }
        );
      }else{
        alert("There is something wrong with the dates!");
      }
    }




    addTimeframe = (timeframe) =>{
      console.log(timeframe);
      let convertedtimeframe=convertTimeFrame(timeframe);
      console.log(convertedtimeframe)
      let start=convertedtimeframe.unix_converted_start_date.toString();
      let end=convertedtimeframe.unix_converted_end_date.toString();
      let url='https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from='+start+'&to='+end;
      console.log(url)
    }
      
  
    render(){
        return(
            <div className={StyleCSS.back}>
                <div className={StyleCSS.section}>
                    <Header title = {this.state.title}/>
                    
                    
                </div>
                <div className={StyleCSS.section}>
                    <h2 className={StyleCSS.header}>Specify the time frame for investigation</h2>
                    <Timeframe onAdd = {this.fetch} className={StyleCSS.form}/>
                    
                </div>
                <div className={StyleCSS.section}>
                    
                    <Actions state = {this.state}/>
                    
                </div>
            </div>
        )
    }
}
export default App

