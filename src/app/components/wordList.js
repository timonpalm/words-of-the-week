"use client";
import React from "react";
  
export default function WordList({ words }) {

  return (
    <ul className="text-center">
      {words.map(([en, de]) => <li key={en}>{en} - {de}</li>)}
    </ul>
  );
}