import React, { useState, useEffect } from 'react';
import { OPERATING_HOURS } from '../constants';
import { DayOfWeek } from '../types';

const OperatingStatus: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' }) as DayOfWeek;
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const currentTime = hours * 60 + minutes;

            const todaysHours = OPERATING_HOURS[dayOfWeek];

            if (!todaysHours) {
                setIsOpen(false);
                return;
            }

            const [openHour, openMinute] = todaysHours.open.split(':').map(Number);
            const openTime = openHour * 60 + openMinute;

            const [closeHour, closeMinute] = todaysHours.close.split(':').map(Number);
            const closeTime = closeHour * 60 + closeMinute;

            setIsOpen(currentTime >= openTime && currentTime < closeTime);
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
            <span className={`h-3 w-3 rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-500'}`}></span>
            <span>{isOpen ? 'Open Now' : 'Currently Closed'}</span>
        </div>
    );
};

export default OperatingStatus;
