import { useEffect } from 'react';

const useAutoRefresh = (callback, interval = 60000) => {
    useEffect(() => {
        const timer = setInterval(() => {
            callback();
        }, interval);

        return () => clearInterval(timer);
    }, [callback, interval]);
};

export default useAutoRefresh;