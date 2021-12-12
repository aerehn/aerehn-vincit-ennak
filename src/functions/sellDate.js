
const sellDate=(data,ldt)=>{ //data is the daily price data and ldt=longest downward trend
    var highest_price = data[0][1];
    var highest_date = data[0][0];
    var return_date="";
    if(ldt===data.length-1){ // this in case the price keeps dropping throughout the timeframe. Then we don't sell
        return_date="Don't sell!";
        highest_price="";
        return {return_date,highest_price};
    }else{
        
        for (let day of data){
            if (day[1]>highest_price){
                //console.log(day[1]);
                highest_price = day[1];
                highest_date = day[0];
            }
        }
        // convert from unix timestamp to a normal date
        //console.log(highest_date);
        return_date = new Date(highest_date).toGMTString();
        
        //object that contains the selling date and the highest price
        return {return_date,highest_price};
    }
}

export default sellDate
