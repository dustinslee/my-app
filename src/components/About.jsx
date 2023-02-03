import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function About() {
  const params = useParams();
  const navigate = useNavigate();
  const [heroData, setHeroData] = useState([]);

  async function getHeroData() {
    const res = await fetch("/superHeroes.json");
    const data = await res.json();
    setHeroData(data);
  }

  useEffect(() => {
    getHeroData();
  }, []);

  // Derived State - Simple Example
  const hero = heroData[params.heroId];
  if(Object.keys(heroData).length && !hero) {
    setTimeout(() => {
      // navigate("/about/Ironman");
      navigate(-1);
    }, 2000);
  }

  return (
    <>
      <h2>About This Hero</h2>
      <h3>{params.heroId}</h3>
      <div className="heroCard">
        {hero ? (
        <>
          <p>{`PowerLevel: ${hero.powerLevel}`}</p>
          <p>{`Intelligence: ${hero.intelligence}`}</p>
        </>
        ) : (
          <>
            <p>No hero found by that name</p>
            <p>Redirecting...</p>
          </>
          )}
      </div>

    </>
  )
}