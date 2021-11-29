const longestDownwardTrend=(data)=>{

    //console.log("Clicked in function");
    //console.log(data.length);
    let longest = 0;
    let cumulative = 0;
    for (let i=1 ;i<data.length; i++){
        if(data[i][1]>data[i-1][1]){
           longest = (cumulative>longest ? cumulative : longest);
           cumulative=0;
        }else{
            cumulative++;
        }
    }
    longest = (cumulative>longest ? cumulative : longest);
    //console.log(longest);
    return longest
}


export default longestDownwardTrend