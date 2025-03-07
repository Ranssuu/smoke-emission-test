import React, { useEffect } from "react";
import ApexCharts from 'apexcharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTachometerAlt, faInfoCircle, faCog, faUserAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Home() {
    useEffect(() => {
        document.title = 'Dashboard';
    }, []);
    useEffect(() => {
        // PIE CHART
        const seriesData = [10, 8, 6, 4, 2]; // Data points for the pie chart
        const totalRegistered = seriesData.reduce((acc, curr) => acc + curr, 0); // Calculate total registered vehicles

        const pieChartOptions = {
            // Data series for the pie chart
            series: seriesData,
            // Labels for each segment of the pie chart
            labels: ['Car', 'Truck', 'Bus', 'Trailer', 'Motorbike'],
            // Chart type and configurations
            chart: {
                type: 'pie',
                background: 'transparent',
                height: 350,
            },
            // Colors for the segments of the pie chart
            colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
            // Other chart configurations
            dataLabels: {
                enabled: false,
            },
            fill: {
                opacity: 1,
            },
            legend: {
                labels: {
                    colors: '#f5f7ff',
                },
                show: true,
                position: 'top',
            },
            stroke: {
                colors: ['transparent'],
                show: true,
                width: 2,
            },
            tooltip: {
                enabled: true,
                shared: true,
                intersect: false,
                theme: 'dark',
            },
            // Custom output to display total registered vehicles
            annotations: {
                totalRegistered: {
                    label: {
                        text: `Total Registered: ${totalRegistered}`,
                        style: {
                            color: '#f5f7ff',
                            fontSize: '16px',
                        },
                    },
                },
            },
        };

        // Create a new instance of ApexCharts for the pie chart
        const pieChart = new ApexCharts(document.querySelector('#DB-pie-chart'), pieChartOptions);

        // Render the pie chart
        pieChart.render();


        // AREA CHART
        const areaChartOptions = {
            // Data series for the area chart
            series: [
                {
                    name: 'Passed', // Series name
                    data: [31, 40, 28, 51, 42, 109, 100], // Data points for the 'Passed' series
                },
                {
                    name: 'Failed', // Series name
                    data: [11, 32, 45, 32, 34, 52, 41], // Data points for the 'Failed' series
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
        const areaChart = new ApexCharts(document.querySelector('#DB-area-chart'), areaChartOptions);

        // Render the area chart
        areaChart.render();

        // Cleanup function to destroy charts when the component unmounts
        return () => {
            pieChart.destroy();
            areaChart.destroy();
        };
    }, []);


    return (
        <div className="DB-dashboard-container">
            {/* Sidebar */}
            <div className="DB-home-sidebar">
                <div className="DB-sidebar-header">
                    <FontAwesomeIcon icon={faUserCircle} size="2x" className="DB-fa-icon"/>
                    <span className="DB-user-name">USER</span>
                </div>
                <div className="DB-menu-section">
                    <span className="DB-section-title">Menu</span>
                    <ul>
                        <li className="DB-active"><FontAwesomeIcon icon={faTachometerAlt} className="DB-fa-icon" />Dashboard</li>
                        <li><a href="/Userlist"><FontAwesomeIcon icon={faInfoCircle} className="DB-fa-icon" />User Information</a></li>
                    </ul>
                </div>
                <div className="DB-other-section">
                    <span className="DB-section-title">Others</span>
                    <ul>
                        <li><a href="/account"><FontAwesomeIcon icon={faUserAlt} className="DB-fa-icon" />Account</a></li>
                        <li><a href="/"><FontAwesomeIcon icon={faSignOutAlt} className="DB-fa-icon" />Logout</a></li>
                    </ul>
                </div>
            </div>

            {/* Content Area */}
            <div className="DB-main-content">
                <div className="DB-main-title">
                    <h2>DASHBOARD</h2>
                </div>

                <div className="DB-main-cards">
                    <div className="DB-home-card">
                        <div className="DB-card-inner">
                            <h3>TOTAL NO. USERS</h3>
                        </div>
                        <h1>249</h1>
                    </div>

                    <div className="DB-home-card">
                        <div className="DB-card-inner">
                            <h3>TOTAL NO. VEHICLES</h3>
                        </div>
                        <h1>25</h1>
                    </div>

                    <div className="DB-home-card">
                        <div className="DB-card-inner">
                            <h3>TOTAL PASSED</h3>
                        </div>
                        <h1>1500</h1>
                    </div>

                    <div className="DB-home-card">
                        <div className="DB-card-inner">
                            <h3>TOTAL FAILED</h3>
                        </div>
                        <h1>56</h1>
                    </div>
                </div>

                <div className="DB-charts">

                    <div className="DB-charts-card">
                        <h2 className="DB-chart-title">Monthly Emission Test</h2>
                        <div id="DB-area-chart"></div>
                    </div>

                    {/* Inside the "charts-card" div for the pie chart */}
                    <div className="DB-charts-card">
                        <h2 className="DB-chart-title">No. Vehicle Type Registered</h2>
                        <div className="DB-pie-chart-container">
                            <div id="DB-pie-chart"></div>
                            <div className="DB-legend-container">
                                {/* Labels will be dynamically added here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
