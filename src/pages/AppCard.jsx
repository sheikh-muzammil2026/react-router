import React from 'react';
import { Link } from 'react-router';


const AppCard = ({app}) => {
    return (
        
        <Link to={`/apps/${app.id}`}>
        <div className="bg-base-100 shadow-sm">
  <figure >
    <img   src={app.image} alt={app.title} />
  </figure>
  <div className="flex justify-between items-center text-center p-2">
            <p className="description bg-amber-200 py-1">{app.downloads}</p>
            
            <p>{app.ratingAvg}</p>
    </div>
  </div>
  </Link>
    );
};

export default AppCard;