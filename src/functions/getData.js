/*const getData = () => {
    let data = 'perkele';
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1577836800&to=1609376400')
    .then(response=>{
        return response.json()
    }).then(json=>{
        data = json.prices
        console.log(data)
    })
    return data
}*/

async function getData(){
    let response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1577836800&to=1609376400')
    let data = await response.json();
    return data.headers.get('prices');
}

export default getData
