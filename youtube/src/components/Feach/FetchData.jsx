import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Feach/FetchData.css'
// import SinglPage from '../SingelPage/SinglPage';

const FetchData = () => {
  const sechondAPI = '5f02615f38mshb9065bdc9ffb077p1f5bc4jsnf8df466e23b9'
  const firstAPI = 'ccd3dad0a7msh6bb99473ae9efe7p16fd9ajsnd25c3fd7d774'
    const [newsData, setNewsData] = useState([]);
const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'ccd3dad0a7msh6bb99473ae9efe7p16fd9ajsnd25c3fd7d774',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const fetchMe = async () => {
    // try {
    //     const response = await axios.request(options);
    //     console.log(response.data.items);
    //     setNewsData(response.data.items);

    // } catch (error) {
    //     console.error(error);
    // }
    try {
        const response = await axios.request(options);
        // console.log(response.data.items);
        setNewsData(response.data.items);
    } catch (error) {
        // console.error(error);
    }
}
useEffect(() => {
    fetchMe()
  },[])


  return (
    <div className='MapDiv'>
      <div className='MapMainDiv'>
        <div className='MApMidleDiv grid gap-5 grid-cols-12'>
        {
        newsData.slice(0,15).map((element) => (
              <Link to={`news/${element.id.videoId}`}className='map__link'>
              <div className='MapDiv'>
                <img src={element?.snippet?.thumbnails?.medium?.url} alt={element.snippet.title} className='video__img'/>
              {/* <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="1" className='iframa'></iframe> */}
              <p className='MapP'>{element.snippet.channelTitle}</p>
              <span className='MapSpan'>{element.snippet.title}</span>
              <span className='MapSpan'>publishTime<data>{element.snippet.publishTime}</data></span>
              </div>
              </Link>
              
          
          ))
       }
        </div>
      </div>
      <div className='MapMainDiv'>
        <div className='MApMidleDiv grid gap-5 grid-cols-12'>
        {
        newsData.slice(15,30).map((element) => (
          <Link to={`news/${element.id.videoId}`} className='map__link'>
          <div className='MapDiv'>
            <img src={element?.snippet?.thumbnails?.medium?.url} alt={element.snippet.title} className='video__img'/>
          {/* <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="1" className='iframa'></iframe> */}
          <p className='MapP'>{element.snippet.channelTitle}</p>
          <span className='MapSpan'>{element.snippet.title}</span>
          <span className='MapSpan'>publishTime<data>{element.snippet.publishTime}</data></span>
          </div>
          </Link>
              
              
          ))
       }
        </div>
      </div>
      <div className='MapMainDiv' >
        <div className='MApMidleDiv grid gap-5 grid-cols-12'>
        {
        newsData.slice(30,50).map((element) => (
          <Link to={`news/${element.id.videoId}`} className='map__link'>
          <div className='MapDiv'>
            <img src={element?.snippet?.thumbnails?.medium?.url} alt={element.snippet.title} className='video__img'/>
          {/* <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="1" className='iframa'></iframe> */}
          <p className='MapP'>{element.snippet.channelTitle}</p>
          <span className='MapSpan'>{element.snippet.title}</span>
          <span className='MapSpan'>publishTime<data>{element.snippet.publishTime}</data></span>
          </div>
          </Link>
              
          
          ))
       }

        </div>
      </div>
    </div>
  )
}

export default FetchData