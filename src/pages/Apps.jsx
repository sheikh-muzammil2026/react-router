import React from 'react';
// import { useLoaderData } from 'react-router';
import AppCard from './AppCard';
import useApps from '../Componenet/Hooks/useApps';
import { CircularProgress } from 'react-loader-spinner';

const Apps = () => {
    // const data = useLoaderData();
    // console.log(data, "From apps page")
    const [apps, loader ] = useApps();
    // console.log(apps, loader );
    return (
        <div className='container mx-auto grid grid-cols-4 bg-base-100 gap-4 mt-4'>
            {
                loader ? <div className="flex justify-center items-center"><CircularProgress /></div>
               : apps.map((app, ind)=> (<AppCard key={ind} app={app}></AppCard>)
                )
            }
            
        </div>
    );
};

export default Apps;