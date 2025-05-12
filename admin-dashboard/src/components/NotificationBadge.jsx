import React from 'react';

const NotificationBadge = ({ count }) => {
    return (
        <div className="relative inline-block">
            <span className="bg-blue-500 text-white text-xs font-bold rounded-full px-2 py-1 absolute -top-1 -right-1">
                {count}
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22c1.104 0 2-.896 2-2H10c0 1.104.896 2 2 2zm6-6V10c0-3.313-2.686-6-6-6S6 6.687 6 10v6H4v2h16v-2h-2z"
                />
            </svg>
        </div>
    );
};

export default NotificationBadge;