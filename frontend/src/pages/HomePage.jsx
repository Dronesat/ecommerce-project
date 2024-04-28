import React from 'react'
import Trending from '../components/Trending/Trending'

const HomePage = () => {
  const womenTrendingTitle = "Shop the Latest Trends in Women's Fashion";
  const menTrendingTitle = "Explore What's Trending in Men's Fashion";
  return (
    <div>
        <Trending category="women" title = {womenTrendingTitle} trending = {true}/>
        <Trending category="men" title = {menTrendingTitle} trending = {true}/>
    </div>
  )
}

export default HomePage