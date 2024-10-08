import React from "react";
import "./Attendance.css";

export default function CoachDisplay({ onCoachChange, selectedCoach }) {
  const testCoaches = ["Coach Tony", "Coach Andy", "Coach Scotty"];

  function handleCoachSelectChange(e) {
    onCoachChange(e.target.value);
  }

  return (
    //____________________this still need work. div isnt clickable. only drop down is, this can be confusing. Also need to eliminate/make better display for when coach is picked. Get functionallity and understanding first.

    <select
      id="coach-select"
      value={selectedCoach}
      onChange={handleCoachSelectChange}
      className="coach-select-dropdown"
    >
      <option value="">{"Choose Coach"}</option>
      {testCoaches.map((coach) => (
        <option key={coach} value={coach}>
          {coach}
        </option>
      ))}
    </select>
  );
}
