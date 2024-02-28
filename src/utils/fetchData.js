export const exerciseOptions =  {
    method: 'GET',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };


  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '662029b805mshf6d3bb51ea4b446p1b6715jsn2a3a01362ee5',
    },
  };







export const fetchData = async (url, options) => {

const response = await fetch(url, options);
const data = await response.json();

return data;

}

