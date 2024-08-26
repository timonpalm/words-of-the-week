"use client"
import React from 'react'
import { useState, useEffect } from 'react';

export default function Countdown({ targetDate}) {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => { 

        const interval = setInterval(() => {
            var now = new Date();
            var diff = targetDate - now;

            setHours(Math.floor(diff / 1000 / 60 / 60));
            setMinutes(Math.floor(diff / 1000 / 60) % 60);
            setSeconds(Math.floor(diff / 1000) % 60);
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <span className='text-red-700 mx-5 text-2xl'>{hours}:{minutes}:{seconds}</span>
    )
}