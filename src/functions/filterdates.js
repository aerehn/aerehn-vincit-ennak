//a method that filters out the unnecessary data so we get only one datapoint from each day
function filterdates(data){
    let previous_day=0;
    let filtered_data = [];
    for(let i = 0;i<data.length;i++){
        const day = new Date(data[i][0]).getUTCDate();
        if(day!==previous_day){
            filtered_data.push(data[i]);
            previous_day=day;
        }
    }
    return filtered_data
}

export default filterdates;