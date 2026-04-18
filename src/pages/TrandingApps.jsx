// import React, { use } from 'react';
import { Link } from 'react-router';
import AppCard from './AppCard';

// const dataPromises = fetch("./data.json").then((res)=> res.json());

// console.log(dataPromises);

const TrandingApps = ({apps}) => {
    // const apps = use(dataPromises);
    // console.log(apps , "from tranding page")
    
    return (
        <>
        <div className='container mx-auto grid grid-cols-4 bg-base-100 gap-4'>
            {
                apps.slice(0,8).map((app, ind)=> (<AppCard key={ind} app={app}></AppCard>)
                )
            }
            
        </div>
        <Link to={'/Apps'} className="primary-btn-container flex justify-center items-center mt-2"><button className="btn btn-primary">View all</button></Link>
        </>
    );
};

export default TrandingApps;