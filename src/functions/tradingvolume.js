const highestTradingVolume=(data)=>{
    
    var date = 0
    var highest = 0
    for(let day of data){
        if(day[1]>highest){
            highest=day[1]
            date=day[0]
        }
    }
    //convert  from unix timestamp to a normal date
    //console.log(date);
    const return_date = new Date(date).toGMTString()
        

    return {return_date,highest}
}

export default highestTradingVolume