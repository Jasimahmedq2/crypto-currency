import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  console.log(search)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const LoadCoins = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
     `)
    setCoins(data)
  }

  useEffect(() => {
    LoadCoins()
  }, [])

  return (
    <div className="App">
      <h2 className='text-xl font-bold text-primary'>Hello API!!</h2>
      <form>
      <input onChange={handleSearch} type="text" placeholder="Search" className="input input-bordered input-primary w-full max-w-xs" />
      </form>

    </div>
  );
}

export default App;
