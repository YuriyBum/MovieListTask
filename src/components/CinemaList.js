import React from 'react';
import { useSelector } from 'react-redux'
import CinemaItem from './CinemaItem'
import OptionManager from './OptionManager'

function CinemaList () {

    const filmData = useSelector(state => state)
    const films = []

    console.log(filmData)

    const items = filmData.options.displayData.data 

    console.log(items)
    items.forEach((item, index) => {
      films.push(<CinemaItem key={index+"_film"} data={item} />)
    })

    return (
      <div className="cinema--list">
        {films}
        <OptionManager />
      </div>
    );
  }
  
  export default CinemaList;