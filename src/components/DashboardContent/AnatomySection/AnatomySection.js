import anatomyImage from '../../../assets/muscularbodyanatomy-removebg-preview.png';


function AnatomySection({healthData}) {
  return (
    <div className="anatomy-section">
      <div className="anatomy-wrapper">
        <img src={anatomyImage} alt="Human Anatomy" className="anatomy-img" />
        {healthData.map((item, index) => (
          <div
            key={index}
            className="indicator-box"
            style={{
              top: item.top,
              left: item.left,
              borderColor: item.color,
              color: item.color,
            }}
          >
            <div className="indicator-label">{item.label}</div>
            <div className="indicator-status">{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnatomySection;
