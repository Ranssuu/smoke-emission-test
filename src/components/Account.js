import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTachometerAlt, faInfoCircle, faCog, faUserAlt, faSignOutAlt, faSearch, faHistory } from '@fortawesome/free-solid-svg-icons';

function AccountPage() {
    useEffect(() => {
        document.title = 'Account';
    }, []);

    const [profileImage, setProfileImage] = useState(""); // State to store profile image

    useEffect(() => {
        document.title = 'Account';

        // Add event listener for file input change
        const profileImageInput = document.getElementById("profile-image-input");
        profileImageInput.addEventListener("change", handleImageChange);

        return () => {
            // Clean up event listener when component unmounts
            profileImageInput.removeEventListener("change", handleImageChange);
        };
    }, []);

    // Function to handle profile image change
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            setProfileImage(e.target.result); // Set profile image in state
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="A-account-body">
            <div className="A-account-sidebar">
                <div className="A-account-sidebar-header">
                    <FontAwesomeIcon icon={faUserCircle} size="2x" className="A-icon" />
                    <span className="A-user-name">USER</span>
                </div>
                <div className="A-menu-section">
                    <span className="A-section-title">Menu</span>
                    <ul>
                        <li><a href="/Home"><FontAwesomeIcon icon={faTachometerAlt} className="A-icon" />Dashboard</a></li>
                        <li><a href="/Userlist"><FontAwesomeIcon icon={faInfoCircle} className="A-icon" />User Information</a></li>
                    </ul>
                </div>
                <div className="A-other-section">
                    <span className="A-section-title">Others</span>
                    <ul>
                        <li className="active"><FontAwesomeIcon icon={faUserAlt} className="A-icon" />Account</li>
                        <li><a href="/"><FontAwesomeIcon icon={faSignOutAlt} className="A-icon" />Logout</a></li>
                    </ul>
                </div>
            </div>

            <div className="A-main-content">
                <div className="A-main-title">
                    <h2>Account</h2>
                </div>
                <div className="A-user-profile">
                    <div className="A-profile-header">
                        <h1 className="A-profile-title">My Profile</h1>
                        <div className="A-profile-description">Manage and protect your account</div>
                    </div>
                    <div className="A-profile-content">
                        <div className="A-profile-details">
                            <div className="A-profile-field">
                                <div className="A-profile-label">Firstname</div>
                                <div className="A-profile-value" id="firstname">John</div>
                                <button className="A-profile-edit-btn">Edit</button>
                            </div>
                            <div className="A-profile-field">
                                <div className="A-profile-label">Lastname</div>
                                <div className="A-profile-value" id="lastname">Doe</div>
                                <button className="A-profile-edit-btn">Edit</button>
                            </div>
                            <div className="A-profile-field">
                                <div className="A-profile-label">Email</div>
                                <div className="A-profile-value" id="email">example@example.com</div>
                                <button className="A-profile-edit-btn">Edit</button>
                            </div>
                            <div className="A-profile-field">
                                <div className="A-profile-label">Phone Number</div>
                                <div className="A-profile-value" id="phone">123-456-7890</div>
                                <button className="A-profile-edit-btn">Edit</button>
                            </div>
                            <div className="A-profile-field">
                                <div className="A-profile-label">Password</div>
                                <div className="A-profile-value" id="password">********</div>
                                <button className="A-profile-edit-btn">Edit</button>
                            </div>
                        </div>
                        <div className="A-profile-image-section">
                            <div className="A-profile-image-preview" id="profile-image-preview">
                                <div className="A-profile-image" id="profile-image">
                                    <img src={profileImage || "default_profile_pic.jpg"} alt="Profile Picture" id="uploaded-image" />
                                    <div className="A-profile-image-text" id="profile-image-text">Profile Picture</div>
                                </div>
                            </div>
                            <div className="A-profile-image-upload">
                                <input className="A-hidden" type="file" id="profile-image-input" />
                                <label htmlFor="profile-image-input" className="A-profile-image-upload-btn">Select Image</label>
                                <div className="A-profile-image-upload-info">
                                    <div className="A-image-upload-info">File size: maximum 1 MB</div>
                                    <div className="A-image-upload-info">File extension: .JPEG, .PNG</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;