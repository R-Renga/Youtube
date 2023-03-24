import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utils/constant'
import VideoCard from './VideosCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
    console.log("useeffectttttttt")
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  console.log("render")

  if (videos.length === 0) return null;
  
  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => (
       <Link to={'watch?v='+ video.id} key={video.id}><VideoCard 
       info = { video } />
       </Link> 
      ))}
    </div>
  )
}

export default VideoContainer;