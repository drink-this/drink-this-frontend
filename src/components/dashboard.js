import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import AppDispatcher from '../core/dispatcher.js';
import { GET_HOMEPAGE_INFO } from '../constants.js';
import homepageStore from '../stores/homepage_store.js';
import Stars from './stars.js';

const Dashboard = () => {
  let [info, setInfo] = useState([])
  let [isLoaded, setIsLoaded] = useState(false)

  const getInfo = () => {
    setInfo(homepageStore.info)
    setIsLoaded(true);
  }

  useEffect(() => {
    homepageStore.on(GET_HOMEPAGE_INFO, getInfo);
    
    AppDispatcher.dispatch({
      action: GET_HOMEPAGE_INFO,
      emitOn: [{
        store: homepageStore,
        ids: [GET_HOMEPAGE_INFO]
      }]
    });

    return function cleanup() {
      homepageStore.removeListener(GET_HOMEPAGE_INFO, getInfo);
    };
  }, []) 

  if (!isLoaded) {
      return <div className="text-center font-playfair text-3xl">Loading...</div>
  } else {
    console.log(info);
    let ratedCocktails = info.attributes.rated.cocktails.sort((a, b) => b.rating - a.rating)
    let {unrated, glass, alcohol} = info.attributes
  return (
    <div className="pb-20 text-center">
      <div className="my-8">
        <Link className={"border-2 border-black px-4 py-3 hover:bg-black hover:text-white transition"} to={"/recommendation"}>Get a Cocktail Recommendation</Link>
      </div>

      <div id="rated" className="text-center font-playfair">
        <p className="text-3xl mb-4">Your top cocktails</p>
        <div className="flex justify-center mx-40 space-x-10 mb-10">
          {ratedCocktails.map((item, index) => {
            return (
              <Link to={`/cocktails/${item.id}`} className={'space-y-4'} key={item.id}>
                <img src={item.thumbnail} alt={item.name} style={{height: '13.75rem'}}/>
                <p>{item.name}</p>
                <Stars value={item.rating} cname={'flex justify-center'}/>
              </Link>
            )
          })}
        </div>
      </div>

      <div id="discover" className="text-center font-playfair">
        <p className="text-3xl mb-4">Discover something new</p>
        <div className="flex justify-center mx-40 space-x-10 mb-10">
          {unrated.cocktails.map((item, index) => {
            return (
              <Link to={`/cocktails/${item.id}`} className={'space-y-4'} key={item.id}>
                <img src={item.thumbnail} alt={item.name} style={{height: '13.75rem'}}/>
                <p>{item.name}</p>
              </Link>
            )
          })}
        </div>
      </div>

      <div id="glass" className="text-center font-playfair">
        <p className="text-3xl mb-4">Cocktails in a <span className="italic">'{glass.type}'</span></p>
        <div className="flex justify-center mx-40 space-x-10 mb-10">
          {glass.cocktails.map((item, index) => {
            return (
              <Link to={`/cocktails/${item.id}`} className={'space-y-4'} key={item.id}>
                <img src={item.thumbnail} alt={item.name} style={{height: '13.75rem'}}/>
                <p>{item.name}</p>
              </Link>
            )
          })}
        </div>
      </div>

      <div id="alcohol" className="text-center font-playfair">
        <p className="text-3xl mb-4">Cocktails with <span className="italic">'{alcohol.type}'</span></p>
        <div className="flex justify-center mx-40 space-x-10 mb-10">
          {alcohol.cocktails.map((item, index) => {
            return (
              <Link to={`/cocktails/${item.id}`} className={'space-y-4'} key={item.id}>
                <img src={item.thumbnail} alt={item.name} style={{height: '13.75rem'}}/>
                <p>{item.name}</p>
              </Link>
            )
          })}
        </div>
      </div>

    </div>
  );
        }
}

export default Dashboard;
