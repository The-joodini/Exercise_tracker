import RepetitionExercise from "./RepetitionExercise";
import DurationExercise from "./DurationExercise";
import { GlobalStyle } from "./styles";
import React, { useState } from "react";



const exercises = [
  { name: "Push-ups", type: "repetition" },
  { name: "Jumping Jacks", type: "repetition" },
  { name: "Running", type: "duration" },
  { name: "Plank", type: "duration" }
];

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <>
      <GlobalStyle />
      <div className="app-container">
        <h1>Exercise Tracker</h1>
        {!selectedExercise ? (
          <div className="menu">
            <h2>Select an Exercise</h2>
            {exercises.map((exercise, index) => (
              <button key={index} onClick={() => setSelectedExercise(exercise)}>
                {exercise.name}
              </button>
            ))}
          </div>
        ) : (
          <div className="exercise-screen">
            <h2>{selectedExercise.name}</h2>
            {selectedExercise.type === "repetition" ? (
              <RepetitionExercise name={selectedExercise.name} />
            ) : (
              <DurationExercise name={selectedExercise.name} />
            )}
            <button onClick={() => setSelectedExercise(null)}>Back to Menu</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
