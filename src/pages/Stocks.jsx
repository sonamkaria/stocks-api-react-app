import stocks from './data'
import { Link } from "react-router-dom";

function Stocks() {
    const stocks = [
        { name: "Apple Inc.", symbol: "AAPL", lastPrice: 140.64, change: -0.280000000000001, high: 141.74, low: 140.35, open: 141.5 },
        { name: "Microsoft Corporation", symbol: "MSFT", lastPrice: 64.98, change: 0.109999999999999, high: 65.45, low: 64.76, open: 65.12 },
        { name: "Alphabet Inc.", symbol: "GOOGL", lastPrice: 835.14, change: -4.50999999999999, high: 844, low: 829.1, open: 842 },
        { name: "Facebook, Inc.", symbol: "FB", lastPrice: 140.34, change: 0.810000000000002, high: 141.0244, low: 139.76, open: 140.08 },
        { name: "Oracle Corporation", symbol: "ORCL", lastPrice: 44.65, change: -0.300000000000004, high: 45.09, low: 44.575, open: 44.91 },
        { name: "Intel Corporation", symbol: "INTL", lastPrice: 36.16, change: -0.370000000000005, high: 36.78, low: 36.125, open: 36.58 }
    ]


    return (
        <div className="Stocks">
            {
                //currency const for each coin we want to pull out the name property and symbol propert as their own variable. We are going to return a link component that will link to'/price/${symbol}
                stocks.map((stock, index) => {

                    //const{name, symbol} = coin;
                    console.log(stock)
                    return (
                        <div>
                    
                        <Link key={index} to={`/stocks/${stock.symbol}`} >
                            <p1>Name: {stock.name}</p1>
                            <p2>Last Price: {stock.lastPrice}</p2>
                            <p3>Change: {stock.change}</p3>
                        </Link>
                        </div>
                    )



                })
            }
        </div>
    );
}

export default Stocks;