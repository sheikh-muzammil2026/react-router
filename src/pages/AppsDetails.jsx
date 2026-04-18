import { Link, useParams } from 'react-router';
import useApps from '../Componenet/Hooks/useApps';
import { CircularProgress } from 'react-loader-spinner';
import { useContext } from 'react';
import { InstalledAppContext } from '../Componenet/Context/InstalledAppContext';
import { toast } from 'react-toastify';


const AppsDetails = () => {
   

    const [apps, loader] = useApps();
    const {id} = useParams();
    const {installedApps, setInstalledApps} = useContext(InstalledAppContext);

    // console.log(installedApps, setInstalledApps);


    const expectedApp = apps.find((app) => app.id == Number(id));
    // console.log(expectedApp);
    
    if(loader){
        return <CircularProgress/>  
        
    }

    if (!expectedApp) {
        return <p>App not found</p>;
    }

    const handleInstalledApp = () =>{
       setInstalledApps([...installedApps,expectedApp])
       toast.success(`${expectedApp.title} is installed.` );
       
    }
    // console.log(installedApps)

    return (
        <div className='container mx-auto shadow-md mt-4'>
           
            <div className="flex justify-between items-center p-2">
                <div className='card_body flex'>
                    <figure><img className='w-12' src={expectedApp.image} alt={expectedApp.title} /></figure>
                <div className="description flex flex-col  p-2">
                    <p className="company-name">{expectedApp.companyName}</p>
                <p>{expectedApp.downloads}</p>
                </div>
                </div>
                <Link to='/installed'><button onClick={handleInstalledApp} className="btn btn-primary">Install Now</button></Link>
            </div>
        </div>
    );
};

export default AppsDetails;