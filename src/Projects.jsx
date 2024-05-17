// Project Page
import React, { useState } from 'react'

const ProjectList = {
  "C++": [
    'Console Snake Game',
    'Tax Management System',
  ],
  "Python": [
    "Dino Game Reinforcement Learning",
    "GAN and VAE implementation on VOC dataset",
    "Urdu News Clustering",
    "Matrix Factorization Recommender System",
  ],
  "React": [
    "Airline Boarding Website Frontend",
    "Sorting Algorithm Visualization Frontend",
    "Student Room Booking Service Frontend",
  ],
  "Nodejs": [
    "Airline Boarding Website Backend",
    "Sorting Algorithm Visualization Backend",
  ],
  "C#": [
    "Student Room Booking Service Backend",
  ],
}

export default function Projects() {
  const [ filteredLanguage, setFilteredLanguage ] = useState('')

  const filteredProjects = filteredLanguage ? ProjectList[filteredLanguage] : null
  
  return (
    <div>
      <div>
        <input type='text' onChange={(e) => setFilteredLanguage(e.target.value)} />
      </div>
      {filteredProjects ? (
        <>
          <h2>{filteredLanguage}</h2>
          <ul>
            {filteredProjects.map(project => (
              <li>{project}</li>
            ))}
          </ul>
      </>
      )
        :
        Object.keys(ProjectList).map(language => (
          <div key={language}>
            <h2>{language}:</h2>
            <ul>
              {ProjectList[language].map(project => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  )
}
