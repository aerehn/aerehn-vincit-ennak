import longestDownwardTrend from "../longestDownwardTrend"
//a dataset where the downward trend lasts the whole timeframe
const testdata1=[
    [123455,9],
    [123456,8],
    [123457,7],
    [123458,6],
    [123459,5],
    [123460,4],
    [123461,3],
    [123462,2],
    [123463,1]
]
test("testing if the function returns the correct downward trend when the trend lasts the whole timeframe",()=>{
    //get the prices from the testdata1
    const prices = [];
    for (let i = 0; i<testdata1.length; i++){
        prices.push(testdata1[i][1]);
    }
    //console.log(prices)
    let longest = 0;
    let count=0;
    let previous=prices[0];
    for (let i=1;i<prices.length;i++){
        if(prices[i]<previous){
            count++;
        }else if(prices[i]>=previous && count>longest){
            longest=count;
            count=0;
        }else{
            count=0;
        }
        if(i==prices.length-1 && count > longest){
            longest = count;
        }
        previous=prices[i];
    }
    
    expect(longestDownwardTrend(testdata1)).toBe(longest);
    expect(longestDownwardTrend(testdata1)).toBe(prices.length-1);
})

const testdata2=[
    [123455,9],
    [123456,8],
    [123457,7],
    [123458,6],
    [123459,6],
    [123460,6],
    [123461,3],
    [123462,2],
    [123463,1]
]

test("testing if the function returns the correct downward trend when the trend lasts the whole timeframe and it has a flat area",()=>{
    //get the prices from the testdata1
    const prices = [];
    for (let i = 0; i<testdata2.length; i++){
        prices.push(testdata2[i][1]);
    }
    //console.log(prices)
    let longest = 0;
    let count=0;
    let previous=prices[0];
    for (let i=1;i<prices.length;i++){
        if(prices[i]<previous){
            count++;
        }else if(prices[i]>=previous && count>longest){
            longest=count;
            count=0;
        }else{
            count=0;
        }
        if(i==prices.length-1 && count > longest){
            longest = count;
        }
        previous=prices[i];
    }
    expect(longestDownwardTrend(testdata2)).toBe(longest);
    expect(longestDownwardTrend(testdata2)).toBe(3);
})

const testdata3=[
    [123455,1],
    [123456,2],
    [123457,3],
    [123458,4],
    [123459,5],
    [123460,6],
    [123461,7],
    [123462,8],
    [123463,9]
]

test("testing if the function returns a zero",()=>{
    //get the prices from the testdata1
    const prices = [];
    for (let i = 0; i<testdata3.length; i++){
        prices.push(testdata3[i][1]);
    }
    //console.log(prices)
    let longest = 0;
    let count=0;
    let previous=prices[0];
    for (let i=1;i<prices.length;i++){
        if(prices[i]<previous){
            count++;
        }else if(prices[i]>=previous && count>longest){
            longest=count;
            count=0;
        }else{
            count=0;
        }
        if(i==prices.length-1 && count > longest){
            longest = count;
        }
        previous=prices[i];
    }
    expect(longestDownwardTrend(testdata3)).toBe(longest);
    expect(longestDownwardTrend(testdata3)).toBe(0);
})

const testdata4=[
    [123455,10],
    [123456,9],
    [123457,8],
    [123458,4],
    [123459,5],
    [123460,6],
    [123461,7],
    [123462,8],
    [123463,9]
]

test("testing if the function returns a correct non zero downward trend when there is both trends present",()=>{
    //get the prices from the testdata1
    const prices = [];
    for (let i = 0; i<testdata4.length; i++){
        prices.push(testdata4[i][1]);
    }
    //console.log(prices)
    let longest = 0;
    let count=0;
    let previous=prices[0];
    for (let i=1;i<prices.length;i++){
        if(prices[i]<previous){
            count++;
        }else if(prices[i]>=previous && count>longest){
            longest=count;
            count=0;
        }else{
            count=0;
        }
        if(i==prices.length-1 && count > longest){
            longest = count;
        }
        previous=prices[i];
    }
    expect(longestDownwardTrend(testdata4)).toBe(longest);
    expect(longestDownwardTrend(testdata4)).toBe(3);
})


const testdata5=[
    [123455,10],
    [123456,9],
    [123457,8],
    [123458,4],
    [123459,5],
    [123460,6],
    [123461,7],
    [123462,8],
    [123463,9],
    [123463,11],
    [123463,10],
    [123462,8],
    [123462,7],
    [123462,3],
]

test("testing if the function returns a correct non zero downward trend when there is both trends present and two downward trends of unequal lengths",()=>{
    //get the prices from the testdata1
    const prices = [];
    for (let i = 0; i<testdata5.length; i++){
        prices.push(testdata5[i][1]);
    }
    //console.log(prices)
    let longest = 0;
    let count=0;
    let previous=prices[0];
    for (let i=1;i<prices.length;i++){
        if(prices[i]<previous){
            count++;
        }else if(prices[i]>=previous && count>longest){
            longest=count;
            count=0;
        }else{
            count=0;
        }
        if(i==prices.length-1 && count > longest){
            longest = count;
        }
        previous=prices[i];
    }
    expect(longestDownwardTrend(testdata5)).toBe(longest);
    expect(longestDownwardTrend(testdata5)).toBe(4);
})