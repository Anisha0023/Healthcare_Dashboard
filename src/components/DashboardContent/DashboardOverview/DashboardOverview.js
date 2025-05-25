import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';
import { navLinks } from '../../../data/navigation';
import CalendarView from '../CalenderView/CalendarView';
import {calendarAppointments} from '../../../data/appintment';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import {upcomingSchedules} from '../../../data/up_schedule';

function DashboardOverview() {
  return (
    <div className="dashboard-layout">
      <Sidebar  navLinks={navLinks} />
      <div className="main-content">
        <Header />
      </div>
      <div className='main-content'>
    <CalendarView  />
    <SimpleAppointmentCard calendarAppointments={calendarAppointments} />
    <UpcomingSchedule upcomingSchedules={upcomingSchedules}/>
      </div>
      
    </div>
  );
}

export default DashboardOverview;


