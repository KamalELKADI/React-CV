import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state = {
    languages: [
      {id: 1, value: "Java", xp:0.9},
      {id: 2, value: "Python", xp:0.7},
      {id: 3, value: "C++", xp:0.6},
    ],
    frameworks: [
      {id: 1, value: "Laravel", xp:0.7},
      {id: 2, value: "NodeJS", xp:0.6},
      {id: 3, value: "JEE", xp:0.8},
      {id: 4, value: "Bootstrap", xp:0.8},
      {id: 5, value: "Spring", xp:0.7},
    ]
  };

  render() {
    let {languages, frameworks} = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar 
          languages={languages}
          className="languagesDisplay"
          title="langages"
        /> 
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;