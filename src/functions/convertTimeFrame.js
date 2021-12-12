function convertTimeFrame(timeframe){
    //we convert a timeframe from startday, endday format yyyy-mm-dd to unixtimestamps
    try{
        var splitted_start_date = timeframe.startday.split("-");
        var converted_start_date = new Date(Date.UTC(splitted_start_date[0],splitted_start_date[1]-1,splitted_start_date[2],'00','00','00'));
        var unix_converted_start_date=converted_start_date.getTime()/1000;
        //console.log(timeframe.endday);
        var splitted_end_date = timeframe.endday.split("-");
        var converted_end_date = new Date(Date.UTC(splitted_end_date[0],splitted_end_date[1]-1,splitted_end_date[2],'01','00','00'));
        var unix_converted_end_date=converted_end_date.getTime()/1000;
        //we check if the result is in correct form
        if(Number.isNaN(unix_converted_end_date) || Number.isNaN(unix_converted_start_date)){
            return false;
        }else if(unix_converted_end_date<unix_converted_start_date){
            return false;
        }else{
            return {unix_converted_start_date,unix_converted_end_date};
        }
    }catch(err){
        return false;
    }
}

export default convertTimeFrame