import React, { Suspense } from 'react';
import TrandingApps from './TrandingApps';
import { CircularProgress } from 'react-loader-spinner';
import useApps from '../Componenet/Hooks/useApps';

const Home = () => {

    const [apps, loader] = useApps();
    return (
        <div className='mt-4 '>
           {
            loader 
            ? <div className="flex justify-center items-center"><CircularProgress /></div> 
            :  <Suspense fallback={()=> <p>Loading...</p>} ><TrandingApps apps={apps} /></Suspense>
           }
        </div>
    );
};

export default Home;