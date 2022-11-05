import React, { useEffect, useState } from 'react';
import { getAds } from './services/ads';

function App() {
  const [ads, setAds] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [count, setCount] = useState(0);
  
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleClick = () => {
    const newCount = count+1;
    setCount(newCount);
  }

  useEffect(() => {
    if (count > 0) {
      getAds(searchInput)
        .then(items => {
            setAds(items)
          })
    }
  }, [count])

  return (
    <div className="container">
      <h1 className='text-center mt-5 mb-5'>Search Ads</h1>
      <div className='d-flex justify-content-center mb-5'>
        <div className="col-md-6">
          <input className='form-control' type="text" onChange={handleChange} />
        </div>
        <div className="ms-3">
          <button className='btn btn-dark' onClick={handleClick}> Search </button>
        </div>
      </div>
      <div className='d-flex justify-content-center col-md-12'>
        {ads.map((ad) => {
          return (
            <div className='w-50 bg-warning p-4 m-1' key={ad._id}>
              <h2 className='text-center mb-4'>{ad.companyName}</h2> 
              <h4>{ad.headline}</h4> 
              <p>{ad.primaryText}</p> 
              <a href={ad.companyId.url} target="_blank" className='btn btn-dark'>{ad.cta}</a>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App;