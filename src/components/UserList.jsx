import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTachometerAlt, faInfoCircle, faCog, faUserAlt, faSignOutAlt, faSearch, faHistory } from '@fortawesome/free-solid-svg-icons';

function UserList() {
    useEffect(() => {
        document.title = 'Userlist';
    }, []);

    return (
        <div className="UL-userlist-dashboard-container">
            {/* Sidebar */}
            <div className="UL-sidebar">
                <div className="UL-sidebar-header">
                    <FontAwesomeIcon icon={faUserCircle} size="2x" className="UL-icon" />
                    <span className="UL-name">USER</span>
                </div>
                <div className="UL-menu-section">
                    <span className="UL-section-title">Menu</span>
                    <ul>
                        <li><a href="/Home"><FontAwesomeIcon icon={faTachometerAlt} className="UL-icon" />Dashboard</a></li>
                        <li className="active"><FontAwesomeIcon icon={faInfoCircle} className="UL-icon" />User Information</li>
                    </ul>
                </div>
                <div className="UL-other-section">
                    <span className="UL-section-title">Others</span>
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faCog} className="UL-icon" />Settings</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faUserAlt} className="UL-icon" />Account</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faSignOutAlt} className="UL-icon" />Logout</a></li>
                    </ul>
                </div>
            </div>

            {/* Content Area */}
            <div className="UL-main-content">
                <div className="UL-main-title">
                    <h2>USERLIST</h2>
                    {/* Search Bar */}
                    <div className="UL-search-bar">
                        <input type="text" className="UL-searchInput" placeholder="Search..." />
                        <button type="button" className="UL-searchButton"><FontAwesomeIcon icon={faSearch} className="UL-icon" /></button>
                    </div>
                </div>
                <div className="UL-user-container">
                    <table className="UL-user-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Vehicle Type</th>
                                <th>Result</th>
                                <th>History</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="UL-user-row">
                                <td>1</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="/Userinfo"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                            <tr className="UL-user-row">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>2024-04-12</td>
                                <td>Car</td>
                                <td>Pass</td>
                                <td className="UL-history-data"><a href="#"><FontAwesomeIcon icon={faHistory} className="UL-icon" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="UL-vehicle-container">
                    <table className="UL-vehicle-table">
                        <thead>
                            <tr>
                                <th colSpan="2">Personal Details</th>
                                <th colSpan="4">Vehicle Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* Personal Details */}
                                <td>Owner Name</td>
                                <td>Lance Tumala</td>
                                {/* Vehicle Details */}
                                <td>Plate No: </td>
                                <td>NEO 123</td>
                                <td>Make/Series:</td>
                                <td>TOYOTA RUSH</td>
                            </tr>
                            <tr>
                                {/* Personal Details */}
                                <td>Contact No.</td>
                                <td>023654788952</td>
                                {/* Vehicle Details */}
                                <td>Engine No:</td>
                                <td>741025896321456987</td>
                                <td>MV Type:</td>
                                <td>Car</td>
                            </tr>
                            <tr>
                                {/* Personal Details */}
                                <td>Email</td>
                                <td>Lanzester@gmail.com</td>
                                {/* Vehicle Details */}
                                <td>Chassis NO:</td>
                                <td>1478523696321456987</td>
                                <td>Color:</td>
                                <td>Brown</td>
                            </tr>
                            <tr>
                                {/* Personal Details */}
                                <td>Date of Registration</td>
                                <td>10/12/2010</td>
                                {/* Vehicle Details */}
                                <td>Year Model:</td>
                                <td>2010</td>
                                <td>Classification:</td>
                                <td>Private</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserList;
