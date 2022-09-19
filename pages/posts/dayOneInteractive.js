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

  return (
    <Layout>
      <h1>Day One Mission Log</h1>
      <p>
        The elves have provided me with a submersible device equipped with a sonar system.
        The report however is a little cryptic. Each line is a measurement of the depth of the sea floor.
        I need to find out how quickly the depth increases.
      </p>
      <p>
        {`My findings ${calculateDepthIncrease(inputs)}`}
      </p>
    </Layout>
  );
}