import React, { useEffect, useRef, useState } from 'react';
import './TitleCard.css';
import { Link } from 'react-router-dom';


const TitleCard = ({ title, category }) => {
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>",category)
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : 'top_rated'}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className='title-card'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div
        className='card-list'
        ref={cardsRef}
        style={{ overflowX: 'auto', display: 'flex' }}
      >
        {apiData.map((card) => (
          <Link
            to={`/player/${card.id}`}
            className='card'
            key={card.id}
            style={{ flexShrink: 0 }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.name}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
