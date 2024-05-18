// Certification Page
import React, { useState } from 'react'

const CertificationList = [
    "Deans List Fall 2020",
    "Deans List Fall 2021",
    "Deans List Fall 2022",
    "Deans List Spring 2023",
]

export default function Certification() {
  
  return (
    <div>
        <ul>
            {CertificationList.map((certification) => (
                <li>{certification}</li>
            ))}
        </ul>
    </div>
  )
}
