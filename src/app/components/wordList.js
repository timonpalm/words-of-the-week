"use client";
import React from "react";
  
export default function WordList({ words }) {

  return (
    <ul className="text-center">
      {words.map(([en, de], idx) => <li key={idx}>{en} - {de}</li>)}
    </ul>
  );
}