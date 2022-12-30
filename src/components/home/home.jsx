import React from 'react'
import "./home.css"
import Statsbox from './home-components/stats-home';
import Homeinfo from './home-components/home-info';
import SmallCard from './home-components/smallCard';
import Landing from './home-components/landing';
import PreventCovidBox from './home-components/preventcovid/preventcovid';
import RemedyBox from './home-components/remedyBox/remedyBox';
import News from "./home-components/news and articles/news.jsx"
export default function home() {
  return (
    <div className='home-container'>
        <Landing />
      <div className='home-body'>
        <Statsbox />
        <Homeinfo />
        <SmallCard />
        <PreventCovidBox />
        <RemedyBox />
        <News />
      </div>
    </div>
  )
}
