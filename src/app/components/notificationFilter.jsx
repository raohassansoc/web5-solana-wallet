"use client"
import React, { useState } from 'react';

//component
import NotificationCard from './notificationCard';

const NotificationsFilter = () => {
    const [search, setSearch] = useState('');
    const [notifications, setNotifications] = useState([
        {
            icon: <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">🎁</div>,
            title: "Claim your rewards!",
            isNew: true,
            description: "Claim your sign up bonus rewards by Tapcoin now",
            timestamp: "2 hours ago"
        },
        {
            icon: <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">B</div>,
            title: "Claim your rewards!",
            isNew: false,
            description: "Claim your sign up bonus rewards by Tapcoin now",
            timestamp: "2 hours ago"
        }
        // ... You can add more notifications as needed
    ]);

    const filteredNotifications = notifications.filter(notification => 
        notification.title.toLowerCase().includes(search.toLowerCase()) ||
        notification.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        // className=" min-h-screen p-6"
        <div>
        
               <div className="search-bar p-4 flex items-center justify-between hover:shadow-md mb-5">
                    <input type="text" value={search} placeholder="Search..." onChange={(e) => setSearch(e.target.value)} className="w-full p-2 rounded-md"/>
                    <span className="magnifying-glass-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21.5305 20.47L17.6895 16.629C18.9735 15.106 19.7505 13.143 19.7505 11C19.7505 6.175 15.8255 2.25 11.0005 2.25C6.17549 2.25 2.25049 6.175 2.25049 11C2.25049 15.825 6.17549 19.75 11.0005 19.75C13.1435 19.75 15.1065 18.973 16.6295 17.689L20.4705 21.53C20.6165 21.676 20.8085 21.75 21.0005 21.75C21.1925 21.75 21.3845 21.677 21.5305 21.53C21.8235 21.238 21.8235 20.763 21.5305 20.47ZM3.75049 11C3.75049 7.002 7.00249 3.75 11.0005 3.75C14.9985 3.75 18.2505 7.002 18.2505 11C18.2505 14.998 14.9985 18.25 11.0005 18.25C7.00249 18.25 3.75049 14.998 3.75049 11Z" fill="white"/>
                    </svg>
                    </span>
                </div>
            
            {filteredNotifications.map((notification, index) => (
                <NotificationCard
                    key={index}
                    icon={notification.icon}
                    title={notification.title}
                    isNew={notification.isNew}
                    description={notification.description}
                    timestamp={notification.timestamp}
                />
            ))}
        </div>
    );
};

export default NotificationsFilter;
