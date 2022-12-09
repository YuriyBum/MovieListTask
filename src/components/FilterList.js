import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { formConfig } from "../data"
import { DateFilter, 
         ExtractArrayFilter,
         NumberFilter,
         SelectOptionFilter,
         MultiCheckboxFilter,
         TextFilter,
         CheckboxFilter } from "./filters"
import { dataSetup } from '../redux/reducer'
import { apiUrl } from '../data'


function FilterList () {
    
    const dispatch = useDispatch()
    const vals = useSelector(state => state)

    // Запрос данных, асинхронный. После получения отправляем в состояние
    const LoadFilmData = async () => {
      let requestOptions = new Map()
      for (let key in vals.options.filterData) {
        let val = vals.options.filterData[key]
        if (val !== null) {
          requestOptions.set(key, val)
        }
      }

      const requestBody = Object.fromEntries(requestOptions)

      const request = await fetch(apiUrl, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // data: requestBody,
        body: JSON.stringify(requestBody)
      })
      const response = await request.json()
      const filmData = {
        data_size: response.data_size,
        data: response.data
      }

      dispatch(dataSetup(filmData))

      return true
    }

    useEffect(() => {
      LoadFilmData()
    }, []) 

    let filters = [],
    index = 0

    for (let key in formConfig) {
      index++
      let params = formConfig[key];
      switch (params.type) {
        case "number" :
          filters.push(<NumberFilter key={index} name={key} data={params} />)
          break;
        case "date" :
          filters.push(<DateFilter key={index} name={key} data={params} />)
          break;
        case "select" :
          filters.push(<SelectOptionFilter key={index} name={key} data={params} />)
          break;
        case "boolean" :
          filters.push(<CheckboxFilter key={index} name={key} data={params} />)
          break;
        case "text" :
          filters.push(<TextFilter key={index} name={key} data={params} />)
          break;
        case "search" :
          filters.push(<TextFilter key={index} name={key} data={params} />)
          break;
        case "multicheckbox" :
          filters.push(<MultiCheckboxFilter key={index} name={key} data={params} />)
          break;
        case "extract_array" : 
          filters.push(<ExtractArrayFilter key={index} name={key} data={params} />)
          break;
      }
    }


    return (
      <>
       <div className="filter--list">
        {filters}
       </div>
       <button onClick={LoadFilmData}>Применить</button>
      </>
    );
  }
  
  export default FilterList;