import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ["Virat", "Rahul", "Hardik", "Bhuvneshwar", "Chahal"];
  const evenPlayers = ["Rohit", "Dhawan", "Pant", "Dhoni", "Jadeja"];

  const t20Players = ["Virat", "Rohit", "Pant"];
  const ranjiPlayers = ["Pujara", "Rahane", "Ishant"];

  const mergedPlayers = [...t20Players, ...ranjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((p, index) => <li key={index}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((p, index) => <li key={index}>{p}</li>)}
      </ul>

      <h2>Merged T20 + Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((p, index) => <li key={index}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
