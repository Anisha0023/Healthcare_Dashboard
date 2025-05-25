import React from 'react';
import { ChevronRight } from 'lucide-react';

function HealthStatusCards() {
  const cards = [
    {
      organ: 'Lungs',
      status: 'Needs Attention',
      date: 'Last Checked: Apr 10, 2025',
      color: '#F44336', 
    },
    {
      organ: 'Teeth',
      status: 'Normal',
      date: 'Last Checked: Mar 22, 2025',
      color: '#FF9800', 
    },
    {
      organ: 'Bone',
      status: 'Healthy',
      date: 'Last Checked: Feb 12, 2025',
      color: '#4CAF50', 
    },
  ];

  return (
    <div className="status-cards-container">
      {cards.map((card, idx) => (
        <div className="status-card" key={idx} style={{ borderLeft: `5px solid ${card.color}` }}>
          <h3 className="organ-name">{card.organ}</h3>
          <p className="organ-status" style={{ color: card.color }}>{card.status}</p>
          <p className="check-date">{card.date}</p>
        </div>
      ))}
      <p className='details'>Details<ChevronRight size={12}/></p>
    </div>
  );
}

export default HealthStatusCards;
