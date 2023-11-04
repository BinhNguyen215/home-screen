import React from 'react'

const FeaturesCard = ({icon, title, content}) => {
  return (
    <div className="FeatureCard">
      <div>{icon}</div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default FeaturesCard