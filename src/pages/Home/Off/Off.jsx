/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Off = () => {
  // Set the target date and time for the countdown
  const targetDate = new Date().getTime() + 15 * 24 * 60 * 60 * 1000 + 10 * 60 * 60 * 1000 + 24 * 60 * 1000 + 26 * 1000; // 15 days, 10 hours, 24 minutes, 26 seconds from now

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // Countdown finished
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center item-center ">
      <div className="flex gap-5">
        <div>
            <p className="font-mono font-bold text-xl">GET EXTRA 25% OFF <br /> <span className="text-sm">FOR ORDER TAKA 2000+</span></p>
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": timeLeft.days }}></span>
          </span>
          days
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": timeLeft.hours }}></span>
          </span>
          hours
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": timeLeft.minutes }}></span>
          </span>
          min
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": timeLeft.seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Off;

