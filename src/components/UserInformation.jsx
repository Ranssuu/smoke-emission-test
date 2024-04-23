import React, { useEffect } from "react";
import ApexCharts from 'apexcharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTachometerAlt, faInfoCircle, faCog, faUserAlt, faSignOutAlt, faSearch, faHistory } from '@fortawesome/free-solid-svg-icons';
import './css/userinfo.css';

function UserInformation() {
    useEffect(() => {
        document.title = 'UserInformation';
    }, []);
    useEffect(() => {
        // AREA CHART
        const areaChartOptions = {
            // Data series for the area chart
            series: [
                {
                    name: 'Passed', // Series name
                    data: [2, 5, 3, 4, 2, 9, 6], // Data points for the 'Passed' series
                },
                {
                    name: 'Failed', // Series name
                    data: [6, 4, 3, 8, 9, 10, 7], // Data points for the 'Failed' series
                },
            ],
            // Chart type and configurations
            chart: {
                type: 'area',
                background: 'transparent',
                height: 350,
                stacked: false,
                toolbar: {
                    show: false,
                },
            },
            // Colors for the areas
            colors: ['#00ab57', '#d50000'],
            // Labels for the X-axis
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            // Other chart configurations
            dataLabels: {
                enabled: false,
            },
            fill: {
                gradient: {
                    opacityFrom: 0.4,
                    opacityTo: 0.1,
                    shadeIntensity: 1,
                    stops: [0, 100],
                    type: 'vertical',
                },
                type: 'gradient',
            },
            grid: {
                borderColor: '#55596e',
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
            },
            legend: {
                labels: {
                    colors: '#f5f7ff',
                },
                show: true,
                position: 'top',
            },
            markers: {
                size: 6,
                strokeColors: '#1b2635',
                strokeWidth: 3,
            },
            stroke: {
                curve: 'smooth',
            },
            // X-axis configurations
            xaxis: {
                axisBorder: {
                    color: '#55596e',
                    show: true,
                },
                axisTicks: {
                    color: '#55596e',
                    show: true,
                },
                labels: {
                    offsetY: 5,
                    style: {
                        colors: '#f5f7ff',
                    },
                },
            },
            // Y-axis configurations
            yaxis: [
                {
                    title: {
                        text: 'Passed', // Title for the first Y-axis
                        style: {
                            color: '#f5f7ff',
                        },
                    },
                    labels: {
                        style: {
                            colors: ['#f5f7ff'],
                        },
                    },
                },
                {
                    opposite: true,
                    title: {
                        text: 'Failed', // Title for the second Y-axis
                        style: {
                            color: '#f5f7ff',
                        },
                    },
                    labels: {
                        style: {
                            colors: ['#f5f7ff'],
                        },
                    },
                },
            ],
            tooltip: {
                shared: true,
                intersect: false,
                theme: 'dark',
            },
        };

        // Create a new instance of ApexCharts for the area chart
        const areaChart = new ApexCharts(document.querySelector('#UI-area-chart'), areaChartOptions);

        // Render the area chart
        areaChart.render();

        // Clean up function to destroy the chart when the component unmounts
        return () => {
            areaChart.destroy();
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className="UI-userlist-dashboard-container">
            {/* Sidebar */}
            <div className="UI-sidebar">
                <div className="UI-sidebar-header">
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                    <span className="UI-name">USER</span>
                </div>
                <div className="UI-menu-section">
                    <span className="UI-section-title">Menu</span>
                    <ul>
                        <li><a href="/Home"><FontAwesomeIcon icon={faTachometerAlt} />Dashboard</a></li>
                        <li className="active"><a href="/Userlist"><FontAwesomeIcon icon={faInfoCircle} />User Information</a></li>
                    </ul>
                </div>
                <div className="UI-other-section">
                    <span className="UI-section-title">Others</span>
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faCog} />Settings</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faUserAlt} />Account</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faSignOutAlt} />Logout</a></li>
                    </ul>
                </div>
            </div>

            {/* Content Area */}
            <div className="UI-main-content">
                <div className="UI-main-title">
                    <h2>USER INFORMATION</h2>
                </div>
                <div className="UI-vehicle-container">
                    <table className="UI-vehicle-table">
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
                <div className="UI-charts">
                    <div className="UI-charts-card">
                        <h2 className="UI-chart-title">Monthly Emission Test</h2>
                        <div id="UI-area-chart"></div>
                    </div>
                    <div className="UI-history-section">
                        <h2 className="UI-history-title">History</h2>
                        <div className="UI-history-container">
                            <ul className="UI-history-list">
                                <li className="UI-history-item UI-passed">
                                    <a href="/History">
                                        <span className="UI-history-date">2024-04-12</span>
                                        <span className="UI-history-result">Passed</span>
                                    </a>
                                </li>
                                {/* Add more history items as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInformation;
