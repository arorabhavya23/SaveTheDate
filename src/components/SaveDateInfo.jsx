import React from 'react';
// import {ReactComponent as RoseIcon} from '/src/assets/icons/rose.svg';
import roseIconSvg from '/src/assets/icons/rose.svg';
import './SaveDateInfo.css'; // Assuming you have a CSS file for styling

function SaveDateInfo() {
  return (
    <div className="container save-date-container">
				<div className="row js-fullheight justify-content-center d-flex align-items-center" style={{height: '897px'}}>
					<div className="col-md-12">
						<div className="text text-center">
							<div className="icon">
                                <img className="rose-icon" src={roseIconSvg} alt="Rose" />                        
							</div>
							<span className="subheading">The Wedding of</span>
							<h1 className="main-names">Diksha &amp; Bhavya</h1>
							<span className="subheading">Save The Date</span>
                            <p className="date-info">Day, 00th Month 2025</p>
						</div>
					</div>
				</div>
			</div>
  );
}

export default SaveDateInfo;
