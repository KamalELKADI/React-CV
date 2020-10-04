import React from 'react';
import Navigation from '../components/Navigation';

const Experience = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
                
                    <div className="exp-1">
                    <h4>Stage du Projet de Fin d'étude</h4>
                    <h5>Juin 2018 / Août 2018 - The Next Clic (TNC) Maroc</h5>
                    <p>Conception et développement d’une application web de gestion de recrutement.</p>
                    <p>
                    Technologies utilisées : Laravel, MYSQL, HTML5, CSS3, JS, jQuery,AJAX.
                    </p>
                    </div>
                    <div className="exp-2">
                    <h4>Stage d'observation</h4>
                    <h5>Juillet 2017 / Août 2017 - Commune de Fès, Maroc</h5>
                    <p>Réalisation d’une application de gestion de stocks des matériels informatiques en Java.</p>
                    </div>
            </div>

            
        </div>

        
    );
};

export default Experience;