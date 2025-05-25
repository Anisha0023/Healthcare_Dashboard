import React from 'react';


const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const appointments = [2, 3, 1, 3, 2, 0, 3];

function ActivityFeed() {
  return (
    <div className="activity-section">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>{appointments.reduce((a, b) => a + b)} appointments on this week</p>
      </div>

      <div className="activity-graph">
        {days.map((day, index) => (
          <div className="day-column" key={index}>
            <div className="bar-group">
              <div className="bar blue" style={{ height: `${appointments[index] * 12 + 20}px` }}></div>
              <div className="bar teal" style={{ height: `${appointments[index] * 10 + 15}px` }}></div>
            </div>
            <span className="day-label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;

