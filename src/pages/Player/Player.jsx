import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useParams, useNavigate } from 'react-router-dom';

function Player() {
  const { id } = useParams(); 
  console.log("Rendering Player Component for ID:", id);
  const navigate = useNavigate(); 

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN2}`
    } 
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        } else {
          console.error('No videos found');
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleBackClick = () => {
    navigate('/'); 
  };

  return (
    <div className='player'>
      <div className="player-header">
        <img 
          src={back_arrow_icon} 
          alt="Back" 
          onClick={handleBackClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
      {apiData.key ? (
        <iframe 
          width="90%" 
          height="90%" 
          src={`https://www.youtube.com/embed/${apiData.key}`} 
          title="trailer" 
          frameBorder="0" 
          allowFullScreen 
        />
      ) : (
        <p>Loading video...</p>
      )}
      <div className="player-info">
        <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : 'N/A'}</p>
        <p>{apiData.name ? apiData.name : 'No Title'}</p>
        <p>{apiData.type ? apiData.type : 'No Type'}</p>
      </div>
    </div>
  );
}

export default Player;

