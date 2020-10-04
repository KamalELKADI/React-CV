import React from 'react';

import Navigation from '../components/Navigation';

const Formation = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent1">
            <div className="experience">
            <h3>FORMATIONS ACADÉMIQUES</h3>
                <div className="exp-1">
                    <h4>Master 2 Technologies de l’Hypermédia</h4>
                    <h5>2020 / 2021  - Paris 8 Vincennes Saint-Denis</h5>
                    <p>. Technologies émergentes et innovation</p>
                     <p>. Méthodologie et conception d'application</p>
                     <p>. Techniques informatiques et Web</p>
                     <p>. Gestion & conduite de projet</p>
                      
                </div>
                <div className="exp-2">
                    <h4>Master 1 Informatique</h4>
                    <h5>2019 / 2020  - UVSQ - Versailless</h5>
                    <p>. Application Web et Sécurité</p>
                    <p>. Conception de BD</p>
                    <p>. Programmation, GL et preuves</p>
                </div>
                <div className="exp-3">
                    <h4>Master 1 Ingénierie des systèmes d'informations</h4>
                    <h5>2018 / 2019  -   ESISA - Maroc</h5>
                    <p>. Méthodologie de Projet</p>
                    <p>. Ingénierie du web</p>
                    <p>. Architecture des Applications Distribuées</p>
                </div>
                <div className="exp-4">
                    <h4>Licence professionnelle Ingénierie logicielle</h4>
                    <h5>2015 / 2018  - ESISA - Maroc</h5>
                </div>
            </div>
            </div>
    </div>
            
    );
};

export default Formation;