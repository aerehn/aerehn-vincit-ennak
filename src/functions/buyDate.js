const buyDate=(data,ldt)=>{ //data is the daily price data and ldt=longest downward trend
    var lowest_price = data[0][1];
    var lowest_date = data[0][0];
    var return_date="";
    if(ldt===data.length-1){ // this in case the price keeps dropping throughout the timeframe
        return_date="Don't buy!";
        lowest_price="";
        return {return_date,lowest_price};
    }else{
        
        for (let day of data){
            if (day[1]<lowest_price){
                lowest_price = day[1]
                lowest_date = day[0]
            }
        }
        // convert from unix timestamp to a normal date
        //console.log(lowest_date);
        
        return_date = new Date(lowest_date).toGMTString()
        

        return {return_date,lowest_price};
    }
}
export default buyDate
