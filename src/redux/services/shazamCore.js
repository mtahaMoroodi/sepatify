import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a53fa213e9mshba9f94cc489a062p13b193jsn1ef525c60bdb',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam.p.rapidapi.com/charts/track', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
      reducerPath : "shazamCoreApi",
      baseQuery : fetchBaseQuery({
        baseUrl : "https://shazam.p.rapidapi.com",
        prepareHeaders : (headers) => {
          headers.set("X-RapidAPI-Key" , "a53fa213e9mshba9f94cc489a062p13b193jsn1ef525c60bdb")
          return headers;
        },
      }),
      endpoints : (builder) => {
        getWorldChart : builder.query({query : "/charts/track"})
      }
    }) 