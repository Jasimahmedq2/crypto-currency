import React from 'react';

const CoinDisplay = ({ image, name, symbol, currentPrice, priceChange, volume, marketCap}) => {

console.log('name',name)
  return (

      <div className="w-4/5 mx-auto my-16">
      
          <div className='grid grid-cols-1 sm:grid-cols-7 container-style'>
            <div className="avatar">
              <div className="mask mask-squircle w-10 mx-auto">
                <img src={image} alt="img" />
              </div>
            </div>
            <h2 className='text-xl text-white font-bold'>{name}</h2>
            <h2 className='text-indigo-600 uppercase'>{symbol}</h2>
            <h2 className='text-sky-700'>${currentPrice}</h2>
            <h2 className='text-primary'>${volume}</h2>
           {
            priceChange < 0 ? <h2 className='text-red-500'>${priceChange}</h2> : <h2 className='text-xl text-emerald-700'>${priceChange}</h2>
           }
           <h2 className='text-accent'><span className='text-secondary'>mrk-Cap: </span> {marketCap}</h2>
          </div>

   

      </div>

  );
};

export default CoinDisplay;