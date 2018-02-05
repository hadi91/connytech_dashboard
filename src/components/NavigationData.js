import React from 'react';

function NavigationData() {
    return (
      <div className="navigationData data-box">
        <h4>Navigation</h4>
        <ol id="level1-nav-list">
          <h6>Level 1</h6>
          <li>Meeting Room</li>
          <li>Reception</li>
          <li>FAT Area</li>
          <li>Workshop Area</li>
          <li>Mr Pang Office</li>
          <li>Engraving Room</li>
        </ol>

        <ol id="level2-nav-list">
          <h6>Level 2</h6>
          <li>Demo Room</li>
          <li>Conference Room</li>
          <li>Mr Foo Office</li>
          <li>Mr Low Office</li>
          <li>Admin</li>
          <li>Office Area</li>
        </ol>
      </div>
    );
}

export default NavigationData;
