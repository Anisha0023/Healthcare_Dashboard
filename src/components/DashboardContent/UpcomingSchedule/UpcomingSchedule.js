function UpcomingSchedule({ upcomingSchedules }) {
  return (
    <>
      <div className="schedule-header">
        <h3>Upcoming Schedule</h3>
        <span className="view-all">View all</span>
      </div>
      <div className="schedule-list">
        {upcomingSchedules.map((item, index) => (
          <div className="schedule-card" key={index}>
            <div className="schedule-left">
              <div className="schedule-head">
 <h4>{item.title}</h4>
            <img src={item.Image} />
              </div>

             

              <p className="schedule-doctor">{item.doctor}</p>
              <p className="schedule-time">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
   </>
  );
}

export default UpcomingSchedule;
