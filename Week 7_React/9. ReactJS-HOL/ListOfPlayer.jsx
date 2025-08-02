ListOfPlayer.js

import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 65 },
    { name: "KL Rahul", score: 55 },
    { name: "Shikhar Dhawan", score: 75 },
    { name: "Hardik Pandya", score: 90 },
    { name: "Rishabh Pant", score: 60 },
    { name: "MS Dhoni", score: 95 },
    { name: "Ravindra Jadeja", score: 70 },
    { name: "Bhuvneshwar Kumar", score: 50 },
    { name: "Jasprit Bumrah", score: 80 },
    { name: "Yuzvendra Chahal", score: 40 },
  ];

  const lowScorers = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players Scored Below 70</h3>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
