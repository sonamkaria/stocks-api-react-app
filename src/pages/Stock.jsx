import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Stock() {
  const apiKey = '88abc45c845fa39906d6fa1822296bd6'
  const params = useParams();
  const symbol = params.symbol;
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`
 
  const [stock, setStock] = useState({});

  const getStock = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStock(data);
    
  };

  useEffect(() => {
    getStock();
  }, []);



 
  const loaded = () => (
   (
    <div className="Stock">
      <h1>{symbol}</h1>

      </div>
   
  ));


return stock ? loaded() : <h1>Loading...</h1>;
  }
export default Stock;