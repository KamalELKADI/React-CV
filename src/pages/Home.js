import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Kamal EL KADI</h1>
          <h2>Etudiant à Paris 8 en Technologie de l'hypermedia</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;