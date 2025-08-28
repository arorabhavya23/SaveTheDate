import React, { useEffect, useState } from 'react';
// import {ReactComponent as RoseIcon} from '/src/assets/icons/rose.svg';
import roseIconSvg from '/src/assets/icons/rose.svg';
import './SaveDateInfo.css'; // Assuming you have a CSS file for styling

function SaveDateInfo() {
	const [showNames, setShowNames] = useState(false);
useEffect(() => {
    const timer = setTimeout(() => setShowNames(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container save-date-container">
				<div className="row js-fullheight justify-content-center d-flex align-items-center" style={{height: '897px'}}>
					<div className="col-md-12">
						<div className="text text-center">
							<div className="icon">
                                <img className="rose-icon" src={roseIconSvg} alt="Rose" />                        
							</div>
							<span className={`subheading${showNames ? ' up' : ''}`}></span>
							<h1 className={`main-names${showNames ? ' fade-in' : ''}`}>5th February 2026</h1>
							<span className={`subheading${showNames ? ' down' : ''}`}></span>
                            <p className="date-info">Save The Date</p>
						</div>
					</div>
				</div>
			</div>
  );
}

export default SaveDateInfo;
