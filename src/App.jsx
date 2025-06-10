import React, { useState } from "react";
import "./App.css";

const TASK_ICONS = [
  { key: "tree", label: "Tree", icon: "🌳" },
  { key: "grain", label: "Grain", icon: "🌾" },
  { key: "house", label: "House", icon: "🏠" },
  { key: "track", label: "Track", icon: "🛤️" },
  { key: "water", label: "Water", icon: "💧" },
];

const UNLOCKED_ITEMS = [
  { key: "red_hearts", label: "Red Hearts (1/matching edge)" },
  { key: "forest_cabin", label: "Forest Cabin (🌳-Tasks)" },
  { key: "circus", label: "Circus (completely surrounded = 10)" },
  { key: "harvest_festival", label: "Harvest Festival (🌾-Tasks)" },
  { key: "signalman", label: "Signalman (2/Grade Crossing)" },
  { key: "watchtower", label: "Watchtower (🏠-Tasks)" },
  { key: "shepherdess", label: "Shepherdess (1/Sheep)" },
  { key: "locomotive", label: "Locomotive (🛤️-Tasks)" },
  { key: "hill", label: "Hill (at distance 2 = 2/Task tile)" },
  { key: "ship", label: "Ship (💧-Tasks)" },
  { key: "construction_site", label: "Construction Site (per territory 7+ = 7)" },
  { key: "train_station", label: "Train Station (closed off = 1/tile)" },
  { key: "balloon", label: "Balloon Launch Site (2/distance)" },
  { key: "harbor", label: "Harbor (closed off = 1/tile)" },
  { key: "golden_heart", label: "Golden Heart (2/matching edge)" },
];

const initialTaskState = [0, 0, 0, 0, 0];
const initialUnlockedState = UNLOCKED_ITEMS.map(() => ({ checked: false, value: "" }));

export default function App() {
  const [tasks, setTasks] = useState(initialTaskState);
  const [flags, setFlags] = useState(initialTaskState.slice());
  const [unlocked, setUnlocked] = useState(initialUnlockedState);
  const [playerNames, setPlayerNames] = useState("");
  const [currentDate] = useState(() => {
    const now = new Date();
    // Use the browser's language for date formatting
    return now.toLocaleDateString(navigator.language || navigator.userLanguage, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  });

  // Calculate sums
  const tasksSum = tasks.reduce((sum, val) => sum + (Number(val) || 0), 0);
  const flagsSum = flags.reduce((sum, val) => sum + (Number(val) || 0), 0);
  const unlockedSum = unlocked.reduce(
    (sum, item) => sum + (item.checked ? Number(item.value) || 0 : 0),
    0
  );
  const result = tasksSum + flagsSum + unlockedSum;

  // Handlers
  const handleTaskChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newTasks = [...tasks];
      newTasks[index] = value;
      setTasks(newTasks);
    }
  };

  const handleFlagChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newFlags = [...flags];
      newFlags[index] = value;
      setFlags(newFlags);
    }
  };

  const handleUnlockedCheck = (index, checked) => {
    const newUnlocked = [...unlocked];
    newUnlocked[index] = { ...newUnlocked[index], checked };
    setUnlocked(newUnlocked);
  };

  const handleUnlockedValue = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newUnlocked = [...unlocked];
      newUnlocked[index] = { ...newUnlocked[index], value };
      setUnlocked(newUnlocked);
    }
  };

  return (
    <div className="container">
      <div className="scorecard">
        {/* Header row */}
        <div className="row header">
          <div className="cell icon-header">👑</div>
          {TASK_ICONS.map((icon) => (
            <div key={icon.key} className="cell icon-header">
              <span>{icon.icon}</span>
            </div>
          ))}
          <div className="cell total-header">Totals</div>
        </div>

        {/* Tasks row */}
        <div className="row">
          <div className="cell row-label">Tasks 💬</div>
          {TASK_ICONS.map((_, index) => (
            <div className="cell" key={`task-${index}`}>
              <input
                type="number"
                min="0"
                className="num-input"
                value={tasks[index]}
                onChange={(e) => handleTaskChange(index, e.target.value)}
              />
            </div>
          ))}
          <div className="cell total-cell">{tasksSum}</div>
        </div>

        {/* Flags row */}
        <div className="row">
          <div className="cell row-label">Flags 🚩</div>
          {TASK_ICONS.map((_, index) => (
            <div className="cell" key={`flag-${index}`}>
              <input
                type="number"
                min="0"
                className="num-input"
                value={flags[index]}
                onChange={(e) => handleFlagChange(index, e.target.value)}
              />
            </div>
          ))}
          <div className="cell total-cell">{flagsSum}</div>
        </div>

        {/* Unlocked items section */}
        <div className="unlocked-container">
          <div className="unlocked-title">Unlocked</div>
          <div className="unlocked-section">
            {UNLOCKED_ITEMS.map((item, index) => (
              <div key={item.key} className="unlocked-item">
                <input
                  type="checkbox"
                  id={`unlocked-${item.key}`}
                  checked={unlocked[index].checked}
                  onChange={(e) => handleUnlockedCheck(index, e.target.checked)}
                />
                <label 
                  htmlFor={`unlocked-${item.key}`} 
                  className="unlocked-label"
                >
                  {item.label}
                </label>
                <input
                  type="number"
                  className="unlocked-input"
                  value={unlocked[index].value}
                  onChange={(e) => handleUnlockedValue(index, e.target.value)}
                  min="0"
                  disabled={!unlocked[index].checked}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="bottom-row">
          <div className="player-names">
            <label>Player Names:</label>
            <input
              type="text"
              value={playerNames}
              onChange={(e) => setPlayerNames(e.target.value)}
            />
          </div>
          <div className="date-field">
            <label>Date:</label>
            <div className="date-display">📅 {currentDate}</div>
          </div>
          <div className="result-cell">
            <div className="result-label">Result:</div>
            <div className="result-value">{result}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
