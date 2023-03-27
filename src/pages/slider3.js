import React, { useEffect, useRef, useState } from 'react'
import "./slider3.css"
function Slider3({ data }) {
    const [scrollPos, setScrollPos] = useState(0);
    const sliderRef = useRef(null);
    const handleScroll = (event) => {
        // Get the current scroll position
        const newScrollPos = event.target.scrollLeft;
    
        // Update the scroll position state
        setScrollPos(newScrollPos);
      };
    
      useEffect(() => {
        // Add event listener to the slider element
        const slider = sliderRef.current;
        slider.addEventListener('scroll', handleScroll);
    
        // Remove event listener on unmount
        return () => {
          slider.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    useEffect(() => {
        let intervalId;
        let k=0
        intervalId = setInterval(() => {
        const slider = sliderRef.current;
        
        if (scrollPos+10 >= slider.scrollWidth - slider.clientWidth) {
              // If at end of slider, move back to beginning
              slider.scrollTo(0, 0);
            } else {
              // Otherwise, move to next slide
            slider.scrollBy({ left: slider.clientWidth-45 , behavior: 'smooth' });
            }
          }, 2500);
        
    
        return () => {
          clearInterval(intervalId);
        };
      }, [scrollPos]);
    return (
        <a class="sliderd1" ref={sliderRef} href="/signup">
            {
                data.map((item) => (
<div class="eachd1-slide" key={item.photos}>
                    <div className="slid1" key={item.photos} >
                        <img src={item.photos} alt="" style={{maxWidth:"initial"}}/>
                        
                    </div>
                    <p>{item.title}</p>

                    </div>
                ))
            }
        </a>
    )
}

export default Slider3