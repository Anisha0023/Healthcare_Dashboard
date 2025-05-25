import React from 'react';
import { Search,Bell,ChevronDown } from 'lucide-react';
import AnatomySection from '../DashboardContent/AnatomySection/AnatomySection';
import HealthStatusCards from '../DashboardContent/HealthStatusCards/HealthStatusCards';
import ActivityFeed from '../DashboardContent/ActivityFeed/ActivityFeed';
import {healthData} from '../../data/healthData';

function Header() {
    return (
        <div className="topbar-container">
          <div className="search-box">
            <Search className="search-icon" size={16} />
            <input type="text" placeholder="Search" className="search-input" />
            <Bell size={18} className="icon bell-icon" color='blue' />
          </div>
          <div className="dashboard-title">
            <h2>Dashboard</h2>
            <h5>This week<ChevronDown size={10}/> </h5>
          </div>
          <div className='section'>
            <AnatomySection healthData={healthData}/>
            <HealthStatusCards/>
          </div>
            <ActivityFeed/>

        </div>
      );
    }

export default Header;
