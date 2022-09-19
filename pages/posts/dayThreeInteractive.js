import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { inputs } from '../../inputs/dayThree';

export default function DayThree() {
  const sampleInput = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ]

  function calculatePowerConsumption(inputArray) {
    let countOnesMap = new Map();

    // Iterate through the array and count all the ones in each position.
    for (let i = 0; i < inputArray.length; i++) {

      // Iterate through the input string positions.
      for (let j = 0; j < inputArray[i].length; j++) {

        // Using the index of the character position as a key, we can track the occurrences of ones.
        if (parseInt(inputArray[i][j]) === 1) {
          countOnesMap.set(j, countOnesMap.get(j) + 1 || 1);
        } else {
          // Need to do this to keep the order of the keys
          countOnesMap.set(j, countOnesMap.get(j) || 0);
        }
      }
    }

    let gammaString = '';
    let epsilonString = '';

    // Iterate through our object to determine the gamma and epsilon value.
    for (const [, value] of countOnesMap) {
      /**
       * Since we only track occurrences of ones, we can determine occurrences of zeros by subtracting
       * the length of the input array with the occurrences of ones.
       */
      if (value > (inputArray.length - value)) {
        gammaString += '1';
        epsilonString += '0';
      } else {
        gammaString += '0';
        epsilonString += '1';
      }
    }

    return parseInt(gammaString, 2) * parseInt(epsilonString, 2);
  };

  function calculateLifeSupport(inputArray) {

  };

  return (
    <Layout>
      <h1>Day Three Workbook</h1>
      <h2>Problem 1:</h2>
      <p>
        {`My findings ${calculatePowerConsumption(inputs)}`}
      </p>
      <h2>Problem 2:</h2>
      <p>
        {`My findings ${calculateLifeSupport(sampleInput)}`}
      </p>
    </Layout>
  );
}