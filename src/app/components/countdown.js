"use client"
import React from 'react'
import { useState, useEffect } from 'react';

export default function Countdown({ targetTime}) {

    // get current time
    var now = new Date();

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => { 

        const target = new Date("08/28/2024 12:00");

        const interval = setInterval(() => {
            var now = new Date();
            var diff = target - now;

            setHours(Math.floor(diff / 1000 / 60 / 60));
            setMinutes(Math.floor(diff / 1000 / 60) % 60);
            setSeconds(Math.floor(diff / 1000) % 60);
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <span className='text-red-700 text-'>{hours}:{minutes}:{seconds} h</span>
    )
}