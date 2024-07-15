import React, { useEffect, useRef } from 'react';
import './style1.css';

function Face() {
  const eyesRef = useRef(null);

  useEffect(() => {
    const eyeball = (event) => {
      if (!eyesRef.current) return; // Avoid errors before element is available

      const eyes = eyesRef.current.querySelectorAll('.eye');
      const eyeCenterX = eyes[0].getBoundingClientRect().left + (eyes[0].clientWidth / 2);
      const eyeCenterY = eyes[0].getBoundingClientRect().top + (eyes[0].clientHeight / 2); // Assuming both eyes have the same center

      let x = event.pageX; // Get mouse X-coordinate relative to entire page
      let y = event.pageY; // Get mouse Y-coordinate relative to entire page

      let radian = Math.atan2(x - eyeCenterX,y - eyeCenterY); // Calculate angle

      // Uncomment the following lines if you want to rotate the eyes based on the angle
      let rot = (radian * (180 / Math.PI) * -1)+270;
      eyes.forEach(eye => eye.style.transform = `rotate(${rot}deg)`);

      // Optional: Log the angle in degrees to console for debugging
      console.log('Angle between eyes and mouse:', radian * (180 / Math.PI) + ' degrees');
    };

    document.body.addEventListener('mousemove', eyeball);

    return () => {
      document.body.removeEventListener('mousemove', eyeball);
    };
  }, []);

  return (
    <div className="face" ref={eyesRef}>
      <div className="eyes">
        <div className="eye"></div>
        <div className="eye"></div>
      </div>
      <div className="face::before"></div> {/* Empty div for mouth animation */}
    </div>
  );
}

export default Face;
