import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CoinDisplay from './CoinDisplay';

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
console.log(coins)
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }



  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => setCoins(res.data)).then(error => {
      console.log(error)
    })
  }, [])

  
const filterSearch = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">
      <h2 className='text-xl font-bold text-primary'>Hello API!!</h2>
      <form>
      <input onChange={handleSearch} type="text" placeholder="Search" className="input input-bordered input-primary w-full max-w-xs" />
      </form>

      {
        filterSearch.map(coin => {
          console.log('coin',coin.name)
          return (
            <CoinDisplay 
            key={coin.id}
            volume={coin.total_volume}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            priceChange={coin.price_change_percentage_24h}
            currentPrice={coin.current_price}
            />
          )
        })
      }

    </div>
  );
}

export default App;
