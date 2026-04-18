import React, { useEffect, useState } from 'react';

const useApps = () => {

    const [apps, setApps] = useState([]);
    const [loader, setLoader] = useState(true);

useEffect(()=> {
    const dataPromises = async()=> {
        const res = await fetch("/data.json")
        const data =  await res.json();
        // console.log(data);
         setApps(data)
         setLoader(false)
    }
    dataPromises();
   
}
    , [])
    // console.log(apps, "from home");

    return [apps, loader];
};

export default useApps;