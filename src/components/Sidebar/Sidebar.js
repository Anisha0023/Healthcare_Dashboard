import React from 'react';
import * as Icons from 'lucide-react';

function Sidebar({ navLinks }) {
  const getIconComponent = (iconName) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon className="nav-icon" /> : null;
  };

  return (
    <aside className="sidebar-container">
      {/* Logo */}
      <div className="sidebar-logo">
        <span className="logo-health">Health</span>
        <span className="logo-care">care.</span>
      </div>

      {/* Navigation Links */}
      <nav className="nav-section">
        {navLinks.map((section, index) => (
          <div key={index}>
            <div className="nav-heading">{section.heading}</div>
            <ul className="nav-list">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  {getIconComponent(item.icon)}
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Settings at Bottom */}
      <div className="settings-link">
        <Icons.Settings className="nav-icon" />
        Setting
      </div>
    </aside>
  );
}

export default Sidebar;

