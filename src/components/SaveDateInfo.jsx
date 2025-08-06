import React from 'react';
// import {ReactComponent as RoseIcon} from '/src/assets/icons/rose.svg';
import roseIconSvg from '/src/assets/icons/rose.svg';
import './SaveDateInfo.css'; // Assuming you have a CSS file for styling

function SaveDateInfo() {
  return (
    <div className="container" style={{position: 'relative'}}>
				<div className="row js-fullheight justify-content-center d-flex align-items-center" style={{height: '897px'}}>
					<div className="col-md-12">
						<div className="text text-center">
							<div className="icon">
                                <img className="rose-icon" src={roseIconSvg} alt="Rose" />                        
							</div>
							<span className="subheading">The Wedding of</span>
							<h1 className="main-names">Diksha &amp; Bhavya</h1>
							<div id="timer" className="d-flex">
							  <div className="time" id="days">000<span>Days</span></div>
							  <div className="time pl-3" id="hours">00<span>Hours</span></div>
							  <div className="time pl-3" id="minutes">--<span>Minutes</span></div>
							  <div className="time pl-3" id="seconds">--<span>Seconds</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
  );
}

export default SaveDateInfo;
