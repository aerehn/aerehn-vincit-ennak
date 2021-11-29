// testing the convertTimeFrame function
import convertTimeFrame from '../convertTimeFrame';
test("test if the timeframe conversion does the conversion correctly", async ()=>{
    const timeframe={startday:"2020-11-29",endday:"2021-11-29"};
    const convertedtimeframe = convertTimeFrame(timeframe);
    expect(convertedtimeframe.unix_converted_start_date).toBe(1606608000);
    //end date must be at 1 am utc
    expect(convertedtimeframe.unix_converted_end_date).toBe(1638147600);
})


test("test if the timeframe conversion returns false if the dates are in the wrong order", async ()=>{
    const timeframe={startday:"2021-11-29",endday:"2020-11-29"};
    const convertedtimeframe = convertTimeFrame(timeframe);
    expect(convertedtimeframe).toBe(false);
    //end date must be at 1 am utc
    //expect(convertedtimeframe.unix_converted_end_date).toBe(1638147600);
})

test("test if the timeframe conversion returns false if the input is wrong", async ()=>{
    const timeframe={startday:"2021-1129",endday:"2020-11-29"};
    const convertedtimeframe = convertTimeFrame(timeframe);
    expect(convertedtimeframe).toBe(false);
    //end date must be at 1 am utc
    //expect(convertedtimeframe.unix_converted_end_date).toBe(1638147600);
})