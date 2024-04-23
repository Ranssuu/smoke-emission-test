import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTachometerAlt, faInfoCircle, faCog, faUserAlt, faSignOutAlt, faSearch, faHistory } from '@fortawesome/free-solid-svg-icons';
import './css/history.css';
import html2pdf from 'html2pdf.js';


function History() {
    useEffect(() => {
        document.title = 'History';
    }, []);

    const printInvoice = () => {
        const element = document.getElementById("invoice");
        html2pdf(element, {
            margin: 1,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        });
    };

    return (
        <div className="H-history-body">
            <div className="H-history-wrapper">
                {/* Sidebar */}
                <div className="H-history-sidebar">
                    <div className="H-history-sidebar-header">
                        <FontAwesomeIcon icon={faUserCircle} size="2x" className="UL-icon" />
                        <span className="H-user-name">USER</span>
                    </div>
                    <div className="H-menu-section">
                        <span className="H-section-title">Menu</span>
                        <ul>
                            <li><a href="/Home"><FontAwesomeIcon icon={faTachometerAlt} className="UL-icon" />Dashboard</a></li>
                            <li className="active"><FontAwesomeIcon icon={faInfoCircle} className="UL-icon" />User Information</li>
                        </ul>
                    </div>
                    <div className="H-other-section">
                        <span className="H-section-title">Others</span>
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faCog} className="UL-icon" />Settings</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faUserAlt} className="UL-icon" />Account</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faSignOutAlt} className="UL-icon" />Logout</a></li>
                        </ul>
                    </div>
                </div>

                {/* Content Area */}
                <div className="H-main-content">
                    <div className="H-main-title">
                        <h2>HISTORY</h2>
                    </div>
                    <div className="invoice" id="invoice">
                        <div className="header-content">
                            <div className="header-logo">
                                <img src="assets/imgs/Logo1x.svg" alt="Logo" />
                            </div>
                            <div className="header-text">
                                <h1>Iot Emission Test Kit Result</h1>
                            </div>
                        </div>
                        <table className="H-history-vehicle-table">
                            <thead>
                                <tr>
                                    <th colSpan="4">Personal Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Owner Name: </td>
                                    <td>John Lance D. Tumala</td>
                                    <td>Email:</td>
                                    <td>Lanzester@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Mobile Number: </td>
                                    <td>023654788952</td>
                                    <td>Date of Registration:</td>
                                    <td>10/12/2010</td>
                                </tr>
                                <tr>
                                    <th colSpan="4">Vehicle Details</th>
                                </tr>
                                <tr>
                                    <td>Plate No: </td>
                                    <td>NEO 123</td>
                                    <td>Make/Series: </td>
                                    <td>TOYOTA RUSH</td>
                                </tr>
                                <tr>
                                    <td>Engine No: </td>
                                    <td>741025896321456987</td>
                                    <td>MV Type:</td>
                                    <td>Car</td>
                                </tr>
                                <tr>
                                    <td>Chassis No: </td>
                                    <td>1478523696321456987</td>
                                    <td>Color:</td>
                                    <td>Brown</td>
                                </tr>
                                <tr>
                                    <td>Year Model: </td>
                                    <td>2010</td>
                                    <td>Classification: </td>
                                    <td>Private</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="result">
                            <div className="summary">
                                <h2>Summary</h2>
                            </div>
                            <table className="summary-result">
                                <thead>
                                    <tr>
                                        <th>Opacity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2.00</td>
                                    </tr>
                                    <tr>
                                        <th>Result</th>
                                    </tr>
                                    <tr>
                                        <td>FAILED</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="print-button">
                        <button id="printButton" onClick={printInvoice}>Print</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
