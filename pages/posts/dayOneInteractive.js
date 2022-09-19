import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { inputs } from '../../inputs/dayOne'

export default function DayOne() {

  function calculateDepthIncrease(inputArray) {
    let depthIncreases = 0;
    // Can't trust faulty inputs since this mission is critical.
    if (Array.isArray(inputArray)) {
      for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i + 1] > inputArray[i]) depthIncreases++;
      };
    };
    return depthIncreases;
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
    return slidingWindowIncreases;
  };

  return (
    <Layout>
      <h1>Day One Workbook</h1>
      <h2>Problem 1:</h2>
      <p>
        {`My findings: ${calculateDepthIncrease(inputs)}`}
      </p>
      <h2>Problem 2:</h2>
      <p>
        {`My findings: ${calculateSlidingWindowIncreases(inputs)}`}
      </p>
    </Layout>
  );
}