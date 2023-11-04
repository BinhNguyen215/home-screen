import React from 'react'
import { BLOCKS } from '../../Const';
import FeaturesCard from '../FeatureCard';
    


const Features = () => {
  return (    
    <div className="features">
        <div className="features__top">
            <h1 className="features__slogan">What makes our brand different</h1>
        </div>
        <div className="features__block">
            <div className="features__block__container">
                {BLOCKS.map((item, index) => {
                    return (
                        <FeaturesCard key={index} icon={item?.icon} title={item?.title} content={item?.content} />
                    );
                })}
            </div>
        </div>

    </div>
  );
};

export default Features;