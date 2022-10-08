import React from 'react';

const CoinDisplay = ({ image, name, symbol, currentPrice, priceChange, volume }) => {

console.log('name',name)
  return (

      <div className="w-4/5 mx-auto">
      
          <div className='grid grid-cols-1 sm:grid-cols-7 '>
            <div className="avatar">
              <div className="mask mask-squircle w-10 mx-auto">
                <img src={image} alt="img" />
              </div>
            </div>
            <h2>{name}</h2>
            <h2>{symbol}</h2>
            <h2>${priceChange}</h2>
            <h2>${currentPrice}</h2>
            <h2>{volume}</h2>
           {
            priceChange < 0 ? <h2 className='text-red-500'>${priceChange}</h2> : <h2 className='text-xl text-primary'>${priceChange}</h2>
           }
          </div>

   

      </div>

  );
};

export default CoinDisplay;