import React from 'react';
import '../scss/MainSection.scss';
import ClockIcon from '../images/icons/clock_icon.png';
import HandIcon from '../images/icons/hand_icon.png';
import FolderIcon from '../images/icons/folder_icon.png';
import Greeting from './Greeting';

export default function MainSection() {
  return (
    <div className="section">
        <div className="section__container">
            <Greeting gender="female" lastName="Anderson" />
            <p className="section__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="section__info-block">
                <div className="info_item">
                    <img src={ClockIcon} alt="clock-icon" className="info_item-image"/>
                    <p className="info_item-text">
                        Lorem Ipsum 
                    </p>
                </div>

                <div className="info_item">
                    <img src={HandIcon} alt="hand-icon" className="info_item-image"/>
                    <p className="info_item-text">
                        Lorem Ipsum 
                    </p>
                </div>

                <div className="info_item">
                    <img src={FolderIcon} alt="folder-icon" className="info_item-image"/>
                    <p className="info_item-text">
                        Lorem Ipsum 
                    </p>
                </div>
            </div>
            <div className="open-section">
            <button className="open-button">Click here to open</button>
            </div>
        </div>
    </div>
  )
}
