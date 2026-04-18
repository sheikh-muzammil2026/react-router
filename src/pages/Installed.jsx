import React from 'react';
import { useContext } from 'react';
import { InstalledAppContext } from '../Componenet/Context/InstalledAppContext';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const Installed = () => {
    const {installedApps, setInstalledApps} = useContext(InstalledAppContext);
    // console.log(installedApps);

    const handleUnInstalledApps = (expectedApp)=> {
       const uninstalledApps = installedApps.filter((app)=> app.id != expectedApp.id);
       setInstalledApps(uninstalledApps);
        toast.success(`${expectedApp.title} is uninstalled.` );
    }

    
   
    return (
        <div className='container mx-auto mt-4 flex gap-3 flex-col'>
           
           {
            installedApps.map((expectedApp, index )=> 
                (<div key={index} className="flex justify-between items-center p-2 shadow">
                <div className='card_body flex'>
                    <figure><img className='w-12' src={expectedApp.image} alt={expectedApp.title} /></figure>
                <div className="description flex flex-col  p-2">
                    <p className="company-name">{expectedApp.companyName}</p>
                <p>{expectedApp.downloads}</p>
                </div>
                </div>
                <button 
                onClick={ ()=> handleUnInstalledApps(expectedApp)} 
                className="btn btn-primary">Uninstall</button>
            </div>)
      

            )
           }
             </div>
            
    );
};

export default Installed;