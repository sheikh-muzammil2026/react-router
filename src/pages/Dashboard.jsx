import React from 'react';
import { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstalledAppContext } from '../Componenet/Context/InstalledAppContext';
import useApps from '../Componenet/Hooks/useApps';

const Dashboard = () => {
    const {installedApps }= useContext(InstalledAppContext)
    const [apps] = useApps();
    const unInstalledApps = apps.length - installedApps.length;

    const data = [
  { name: "Installed", value: installedApps.length },
  { name: "Uninstalled", value: unInstalledApps },
    ]
    return (
        <div>
          <h1 className='text-center text-2xl'>Installed and Uninstalled apps</h1>
            <PieChart style={{ 
                width: '100%', 
                maxWidth: '500px', 
                maxHeight: '80vh', 
                margin: 'auto',
                aspectRatio: 1 }} 
                responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
       
      />
      <Legend/>
      <Tooltip/>
    </PieChart>
        </div>
    );
};

export default Dashboard;