import { useState } from 'react';
import Layout from '../../components/layout';
import { inputs } from '../../inputs/dayOne'

export default function DayOne() {

  const [p1, setP1] = useState(null);
  const [p2, setP2] = useState(null);

  function calculateDepthIncrease(inputArray) {
    let depthIncreases = 0;
    // Can't trust faulty inputs since this mission is critical.
    if (Array.isArray(inputArray)) {
      for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i + 1] > inputArray[i]) depthIncreases++;
      };
    };
    setP1(depthIncreases);
  };

  function calculateSlidingWindowIncreases(inputArray) {
    let slidingWindowIncreases = 0;
    // Can't trust faulty inputs since this mission is critical.
    if (Array.isArray(inputArray)) {

      // We are reducing the max value of i since this will get us to the last group.
      for (let i = 0; i < inputArray.length - 3; i++) {
        // The first group is this input (i) and the next two
        const sumFirstGroup = inputArray[i] + inputArray[i + 1] + inputArray[i + 2];

        // The second group is the next three inputs after i
        const sumSecondGroup = inputArray[i + 1] + inputArray[i + 2] + inputArray[i + 3];

        // Compare the groups to see if the sum of the next is greater than this one.
        if (sumSecondGroup > sumFirstGroup) slidingWindowIncreases++;
      };
    };
    setP2(slidingWindowIncreases);
  };

  return (
    <Layout>
      <h1>Day One Workbook</h1>
      <h2>Problem 1:</h2>
      <button onClick={() => calculateDepthIncrease(inputs)}>Solve problem</button>
      <p>
        {p1 ? `Answer: ${p1}` : null}
      </p>
      <h2>Problem 2:</h2>
      <button onClick={() => calculateSlidingWindowIncreases(inputs)}>Solve problem</button>
      <p>
        {p2 ? `Answer: ${p2}` : null}
      </p>
    </Layout >
  );
}