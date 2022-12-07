import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { createReducer, createAction, combineReducers } from '@reduxjs/toolkit';
import apiUrl from '../data'

// Текущие значения опций фильтров по умолчанию
export const pendingDataInitialState = {
  filterData: {
    page: 0,
    page_size: 10,
    sort_field: null, // null - фильтр не добавляется в запрос
    sort_order: null,
    imdb_id: null,
    ids: null,
    search: null,
    adult: null,
    budget_min: null,
    budget_max: null,
    genres: null,
    original_language: null,
    popularity_min: null,
    popularity_max: null,
    release_date_min: null,
    release_date_max: null,
    revenue_min: null,
    revenue_max: null,
    runtime_min: null,
    runtime_max: null,
    spoken_languages: null,
    status: null,
    vote_average_min: null,
    vote_average_max: null,
    vote_count_min: null,
    vote_count_max: null
  },
  displayData: { // Список фильмов и значение для рассчета числа страниц
    data_size: 0,
    data: []
  },
  displayOptions: { // Какие параметры фильма отображать, по умолчанию - все
    id: true,
    adult: true,
    belongs_to_collection: true,
    budget: true,
    genres: true,
    homepage: true,
    imdb_id: true,
    original_language: true,
    original_title: true,
    overview: true,
    popularity: true,
    production_companies: true,
    production_countries: true,
    release_date: true,
    revenue: true,
    runtime: true,
    spoken_languages: true,
    status: true,
    tagline: true,
    title: true,
    vote_average: true,
    vote_count: true
  }
}

export const displayData = {
  data: []
}

export const defaultAction = {
    type: "pageSetup",
    payload: {
      page: 0
    }
}

let currentState = pendingDataInitialState

export const applyFilter = createAction("applyFilter")
export const dataSetup = createAction("dataSetup")
export const optionSetup = createAction("optionSetup")

export const UpdatePendingData = (state = currentState, action = defaultAction) => {
      let newState = state;
      if (action.payload) {
        let field = action.payload.filter,
        newValue = action.payload.value

        switch (action.type) {
          case "applyFilter" :
            newState = { // Избегаем мутаций
              filterData: {
                page: (field === "page") ? parseInt(newValue) : state.filterData.page,
                page_size: (field === "page_size") ? parseInt(newValue) : state.filterData.page_size,
                sort_field: (field === "sort_field") ? newValue : state.filterData.sort_field, 
                sort_order: (field === "sort_order") ? newValue : state.filterData.sort_order,
                imdb_id: (field === "imdb_id") ? parseInt(newValue) : state.filterData.imdb_id,
                ids: (field === "ids") ? newValue : state.filterData.ids,
                search: (field === "search") ? newValue : state.filterData.search,
                adult: (field === "adult") ? newValue : state.filterData.adult,
                budget_min: (field === "budget_min") ? parseInt(newValue) : state.filterData.budget_min,
                budget_max: (field === "budget_max") ? parseInt(newValue) : state.filterData.budget_max,
                genres: (field === "genres") ? newValue : state.filterData.genres,
                original_language: (field === "original_language") ? newValue : state.filterData.original_language,
                popularity_min: (field === "popularity_min") ? parseInt(newValue) : state.filterData.popularity_min,
                popularity_max: (field === "popularity_max") ? parseInt(newValue) : state.filterData.popularity_max,
                release_date_min: (field === "release_date_min") ? newValue : state.filterData.release_date_min,
                release_date_max: (field === "release_date_max") ? newValue : state.filterData.release_date_max,
                revenue_min: (field === "revenue_min") ? parseInt(newValue) : state.filterData.revenue_min,
                revenue_max: (field === "revenue_max") ? parseInt(newValue) : state.filterData.revenue_max,
                runtime_min: (field === "runtime_min") ? parseInt(newValue) : state.filterData.runtime_min,
                runtime_max: (field === "runtime_max") ? parseInt(newValue) : state.filterData.runtime_max,
                spoken_languages: (field === "spoken_languages") ? newValue : state.filterData.spoken_languages,
                status: (field === "status") ? newValue : state.filterData.status,
                vote_average_min: (field === "vote_average_min") ? parseInt(newValue) : state.filterData.vote_average_min,
                vote_average_max: (field === "vote_average_max") ? parseInt(newValue) : state.filterData.vote_average_max,
                vote_count_min: (field === "vote_count_min") ? parseInt(newValue) : state.filterData.vote_count_min,
                vote_count_max: (field === "vote_count_max") ? parseInt(newValue) : state.filterData.vote_count_max,
              },
              displayData: state.displayData,
              displayOptions: state.displayOptions
            }
            // console.log(newState)
          break;
          case "dataSetup" : 
          newState = {
            filterData: state.filterData,
            displayData: action.payload,
            displayOptions: state.displayOptions
          }
          // console.log(newState)
          break;
          case "optionSetup" :
            let filtr = action.payload.filter,
            nValue = action.payload.value
            newState = {
              filterData: state.filterData,
              displayData: state.displayData,
              displayOptions: { 
                id: (filtr === "id") ? nValue : state.displayOptions.id,
                adult: (filtr === "adult") ? nValue : state.displayOptions.adult,
                belongs_to_collection: (filtr === "belongs_to_collection") ? newValue : state.displayOptions.belongs_to_collection,
                budget: (filtr === "budget") ? nValue : state.displayOptions.budget,
                genres: (filtr === "genres") ? nValue : state.displayOptions.genres,
                homepage: (filtr === "homepage") ? nValue : state.displayOptions.homepage,
                imdb_id: (filtr === "imdb_id") ? nValue : state.displayOptions.imdb_id,
                original_language: (filtr === "original_language") ? nValue : state.displayOptions.original_language,
                original_title: (filtr === "original_title") ? nValue : state.displayOptions.original_title,
                overview: (filtr === "overview") ? nValue : state.displayOptions.overview,
                popularity: (filtr === "popularity") ? nValue : state.displayOptions.popularity,
                production_companies: (filtr === "production_companies") ? nValue : state.displayOptions.production_companies,
                production_countries: (filtr === "production_countries") ? nValue : state.displayOptions.production_countries,
                release_date: (filtr === "release_date") ? nValue : state.displayOptions.release_date,
                revenue: (filtr === "revenue") ? nValue : state.displayOptions.revenue,
                runtime: (filtr === "runtime") ? nValue : state.displayOptions.runtime,
                spoken_languages: (filtr === "spoken_languages") ? nValue : state.displayOptions.spoken_languages,
                status: (filtr === "status") ? nValue : state.displayOptions.status,
                tagline: (filtr === "tagline") ? nValue : state.displayOptions.tagline,
                title: (filtr === "title") ? nValue : state.displayOptions.title,
                vote_average: (filtr === "vote_average") ? nValue : state.displayOptions.vote_average,
                vote_count: (filtr === "vote_count") ? nValue : state.displayOptions.vote_count
              }
            }
            console.log(newState)
          break;
          default : 
          newState = state;
          break;
        }
      }
      currentState = newState
      return newState
 }  


export const RootReducer = combineReducers ({options: UpdatePendingData})