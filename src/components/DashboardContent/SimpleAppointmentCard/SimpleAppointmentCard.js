function SimpleAppointmentCard({calendarAppointments}) {
  return (
    <div className="appointments">
      {calendarAppointments.map((appt, index) => (
        <div className="appointment-card" key={index}>
          <div className="appointment-header">
            <h5>{appt.title}</h5>
            <img src={appt.Image} alt="No Image" />
          </div>
          <p className="appointment-time">{appt.startTime} - {appt.endTime}</p>
          <p className="appointment-doctor">{appt.doctor}</p>
        </div>
      ))}
    </div>
  );
}

export default SimpleAppointmentCard;
