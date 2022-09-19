import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { inputs } from '../../inputs/dayOne'

export default function DayTwo() {

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

  return (
    <Layout>
      <h1>Day Two Mission Log</h1>
      <p>

      </p>
      <p>
        {`My findings ${calculateDepthIncrease(inputs)}`}
      </p>
    </Layout>
  );
}