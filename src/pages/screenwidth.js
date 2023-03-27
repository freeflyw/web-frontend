import React, { useEffect, useState } from 'react'

function useScreenwidth() {
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
        const screenWidth = window.innerWidth;
        setIsMobileScreen(screenWidth < 600);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, []);
      
  return [isMobileScreen]
}

export default useScreenwidth