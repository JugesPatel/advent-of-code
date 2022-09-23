import { useState } from 'react';
import Layout from '../../components/layout';
import { inputs } from '../../inputs/dayTwo'

export default function DayTwo() {
  const sampleInput = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2',
  ]

  const [p1, setP1] = useState(null);
  const [p2, setP2] = useState(null);

  function calculatePosition(inputArray) {
    // Initialize my starting position.
    let horizontalPos = 0;
    let depth = 0;

    for (let i = 0; i < inputArray.length; i++) {
      // Parse my current command by splitting my command and value.
      let command = inputArray[i].split(' ');

      switch (command[0]) {
        case 'forward':
          horizontalPos += parseInt(command[1]);
          break;
        case 'down':
          // Add to my depth if I move down
          depth += parseInt(command[1]);
          break;
        case 'up':
          // Subtract from my depth if I move up
          depth -= parseInt(command[1]);
          break;
        default:
          break;
      }
    }

    setP1(horizontalPos * depth);
  };

  function calculateAimedPosition(inputArray) {
    // Initialize my starting position.
    let horizontalPos = 0;
    let aim = 0;
    let depth = 0;

    for (let i = 0; i < inputArray.length; i++) {
      // Parse my current command by splitting my command and value.
      let command = inputArray[i].split(' ');

      switch (command[0]) {
        case 'forward':
          // Calculate horizontal position and depth.
          horizontalPos += parseInt(command[1]);
          depth += parseInt(command[1]) * aim;
          break;
        case 'down':
          // Add to my aim if I move down.
          aim += parseInt(command[1]);
          break;
        case 'up':
          // Subtract from my aim if I move up.
          aim -= parseInt(command[1]);
          break;
        default:
          break;
      }
    }

    setP2(horizontalPos * depth);
  };

  return (
    <Layout>
      <h1>Day Two Mission Workbook</h1>
      <h2>Problem 1:</h2>
      <button onClick={() => calculatePosition(inputs)}>Solve problem</button>
      <p>
        {p1 ? `Answer: ${p1}` : null}
      </p>
      <h2>Problem 2:</h2>
      <button onClick={() => calculateAimedPosition(inputs)}>Solve problem</button>
      <p>
        {p2 ? `Answer: ${p2}` : null}
      </p>
    </Layout>
  );
}