
import profile from '../../../assets/profile.png'
import { ChevronRight,ChevronLeft } from 'lucide-react';
function CalendarView(){
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const time1 = ["10:00", "08:00", "12:00", "10:00", "-", "12:00", "09:00"];
  const time2 = ["11:00", "09:00", "-", "11:00", "14:00", "14:00", "10:00"];
  const time3 = ["12:00", "10:00", "13:00", "-", "16:00", "15:00", "11:00"];

  return (
    <>
      <div className="profile-container">
        <div className="avatar">
          <img src={profile} alt="Profile" />
        </div>
        <button className="add-button">+</button>
      </div>

      <div className="calendar-container">
        <div className="calendar-header">
          <h4>May 2025</h4>
          <div className="nav-arrows">
            <ChevronLeft />
            <ChevronRight />
          </div>
        </div>

        {/* Calendar Table */}
        <table className="calendar-table">
          <thead>
            <tr>
              {days.map((day, index) => (
                <th key={index}>
                  <div style={{ fontSize: '10px'}}>{day}</div>
                  <div style={{ fontSize: '16px'}}>{dates[index]}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {time1.map((time, index) => (
                <td key={index}>{time}</td>
              ))}
            </tr>
            <tr>
              {time2.map((time, index) => (
                <td key={index}>{time}</td>
              ))}
            </tr>
            <tr>
              {time3.map((time, index) => (
                <td key={index}>{time}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CalendarView;

